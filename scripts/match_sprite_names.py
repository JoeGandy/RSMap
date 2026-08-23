#!/usr/bin/env python3
"""
Match cache map sprites to the OSRS Wiki's 'Map icons' category images.

Deterministic pipeline (no manual curation):
  1. exact byte-hash match
  2. trimmed-alpha byte-hash match
  3. alpha-trimmed, 32x32-canonicalised MSE match (tolerance 60)

Writes public/map_sprite_names.json  { "<spriteId>": "<key name>" }.
Sprites the wiki doesn't mirror yet (brand-new content) keep provisional
names and get picked up automatically once the wiki uploads them.

Usage:  python3 scripts/match_sprite_names.py
Needs:  pip install pillow   (network access to oldschool.runescape.wiki)
"""
import json, os, io, sys, hashlib, urllib.request, urllib.parse
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPRITES = os.path.join(ROOT, "public", "map_sprites")
OUTFILE = os.path.join(ROOT, "public", "map_sprite_names.json")
UA = {"User-Agent": "rsmap-sprite-match/1.0 (RSMap tile pipeline; contact: joe@gandy.ws)"}
CAT = "Category:Map icons"
MSE_TOLERANCE = 60.0

def api(params):
    url = "https://oldschool.runescape.wiki/api.php?" + urllib.parse.urlencode(params)
    return json.load(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30))

def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read()

def to_rgba(img):
    return img.convert("RGBA") if img.mode != "RGBA" else img

def trim(img):
    img = to_rgba(img)
    bbox = img.getchannel("A").getbbox()
    return img.crop(bbox) if bbox else img

def canon(img, size=(32, 32)):
    a = trim(img)
    w, h = a.size
    c = Image.new("RGBA", size, (0, 0, 0, 0))
    f = min((size[0] - 2) / w, (size[1] - 2) / h)
    nw, nh = max(1, int(w * f)), max(1, int(h * f))
    a = a.resize((nw, nh), Image.NEAREST if f > 1 else Image.LANCZOS)
    c.paste(a, ((size[0] - nw) // 2, (size[1] - nh) // 2))
    return c

def mse(a, b):
    pa, pb = a.tobytes(), b.tobytes()
    return sum((pa[i] - pb[i]) ** 2 for i in range(0, len(pa), 3)) / (len(pa) / 3)

def main():
    # 1. wiki category members -> image URLs
    members, cont = [], None
    while True:
        p = {"action": "query", "list": "categorymembers", "cmtitle": CAT,
             "cmlimit": "500", "format": "json"}
        if cont: p["cmcontinue"] = cont
        d = api(p)
        members += [m["title"] for m in d["query"]["categorymembers"]
                    if m["title"].endswith(".png")]
        cont = d.get("continue", {}).get("cmcontinue")
        if not cont: break
    print(f"wiki category files: {len(members)}")

    # 2. resolve URLs in batches
    urls = {}
    for i in range(0, len(members), 50):
        d = api({"action": "query", "titles": "|".join(members[i:i+50]),
                 "prop": "imageinfo", "iiprop": "url", "format": "json"})
        for pg in d["query"]["pages"].values():
            ii = pg.get("imageinfo")
            if ii: urls[pg["title"]] = ii[0]["url"]
    print(f"with URLs: {len(urls)}")

    # 3. download + index wiki images by exact and trimmed hashes, keep canon for MSE
    exact, trimmed, canon_imgs = {}, {}, []
    for title, url in urls.items():
        try:
            img = Image.open(io.BytesIO(fetch(url)))
        except Exception:
            continue
        h = hashlib.md5(img.convert("RGBA").tobytes()).hexdigest()
        exact.setdefault(h, title)
        t = trim(img.convert("RGBA"))
        th = hashlib.md5(t.tobytes()).hexdigest()
        trimmed.setdefault(th, title)
        canon_imgs.append((title, canon(img)))

    # 4. match our sprites
    existing = {}
    if os.path.exists(OUTFILE):
        existing = json.load(open(OUTFILE))
    result, unmatched = dict(existing), []
    for fn in sorted(os.listdir(SPRITES), key=lambda f: int(f.replace(".png", ""))):
        sid = int(fn.replace(".png", ""))
        if str(sid) in existing and "(provisional)" not in existing[str(sid)]:
            continue  # keep previously confirmed names
        img = Image.open(os.path.join(SPRITES, fn)).convert("RGBA")
        name = None
        h = hashlib.md5(img.tobytes()).hexdigest()
        if h in exact:
            name = exact[h]
        if not name:
            th = hashlib.md5(trim(img).tobytes()).hexdigest()
            if th in trimmed:
                name = trimmed[th]
        method = "hash"
        if not name:
            c = canon(img)
            best_t, best_d = None, 1e18
            for t, ci in canon_imgs:
                d = mse(c, ci)
                if d < best_d: best_t, best_d = t, d
            if best_d < MSE_TOLERANCE:
                name, method = best_t, f"mse{best_d:.0f}"
        if name:
            clean = name.replace("File:", "").replace(" icon.png", "").replace(" map icon.png", "")
            result[str(sid)] = clean
            print(f"  {sid}: {clean}  [{method}]")
        else:
            unmatched.append(sid)
            result.setdefault(str(sid), f"Icon {sid} (provisional)")

    json.dump(result, open(OUTFILE, "w"), indent=1)
    print(f"\nwrote {OUTFILE}: {sum(1 for v in result.values() if '(provisional)' not in v)}/{len(result)} named")
    if unmatched:
        print("still provisional:", unmatched)

if __name__ == "__main__":
    main()
