# Deployment Architecture

**Read this before doing any deploy or domain work.** This repo's hosting has a history of looking healthy while being wrong. Everything below reflects the audited state of August 2026.

## TL;DR topology

```
GitHub Actions (deploy-to-vercel.yml)
        │  runs `vercel --prod` with VERCEL_TOKEN/ORG_ID/PROJECT_ID secrets
        ▼
Vercel project  "joegandys-projects/rsmap-uk"
        │            ⚠ deploys land HERE — verify domains attach HERE too
        ├─ production alias: https://rsmap-rjn0xqydy-joegandys-projects.vercel.app
        └─ custom domains: rsmap.uk, www.rsmap.uk   ← must be added to THIS project
        ▲
        │ DNS (Cloudflare-managed): A @ 76.76.21.21, CNAME www → cname.vercel-dns.com
rsmap.uk visitors

Tiles never touch Vercel:
public/tiles/** ──(deploy-tiles-to-pages.yml)──► GitHub Pages mirror
                                                 joegandy.github.io/RSMap/tiles/
The app's TileLayer loads tiles straight from that mirror (see OSRSMap.tsx).
```

## The three projects problem (historical incident)

As of Aug 2026 there are/were **three Vercel entities**, all serving *different* build hashes:

| Entity | What it was |
|---|---|
| `rsmap-uk` | Where CI actually deploys. Fresh builds. |
| `rsmap.vercel.app` | A separate older project serving a different stale build. |
| unknown project holding the domains | Served months-old builds while every deploy reported success. |

**Symptom of this class of failure:** GitHub deploy workflow green + `x-vercel-cache: HIT` + site up, but the site serves old chunk hashes that no recent commit produces. Diagnose by comparing `chunks/app/page-*.js` filenames served by each host against a local `npm run build` of `main`.

**Fix pattern:** ensure exactly one project (`rsmap-uk`) owns both domains; delete or detach the strays. Vercel allows a domain on only one project at a time — removing from the old project is required before adding to the new one.

## Deployment Protection (SSO wall)

New deployments of `rsmap-uk` shipped with **Vercel Authentication enabled** (visitors get redirected to `vercel.com/sso-api/...`). Public site = must be **disabled**: Project → Settings → Deployment Protection → turn off Vercel Authentication. If a fresh deploy URL redirects to SSO, this is why the world can't see it even after the domain is attached.

## How deploys fire

| Trigger | Workflow | Result |
|---|---|---|
| Monthly tile run success | `workflow_run` → deploy-to-vercel.yml | app redeploy (tiles excluded) |
| Push to `main` (non-tile paths) | `push` event | app redeploy |
| Push touching `public/tiles/**` only | skipped for Vercel (`paths-ignore`) | Pages mirror republishes instead |

Key facts baked into the config:

- `vercel.json` sets `"git": {"deploymentEnabled": false}` — **Git-integration deploys are off**; the CLI step in Actions is the only path to production. Don't "simplify" the workflow away thinking Vercel auto-deploys.
- The workflow deletes `public/tiles` before deploying ("lightweight deployment") — tiles are ~864 MB and must come from Pages, not Vercel.
- If `VERCEL_TOKEN` secret were ever emptied, the deploy step silently skips itself and the job still shows **success** (there's a fallback notification step). A "successful" run is not proof of a new deployment — check the log line `Deploying joegandys-projects/rsmap-uk` exists.
- Required secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (project id of `rsmap-uk`).

## DNS

Managed at Cloudflare:

```
A      @    76.76.21.21          (proxied status irrelevant for apex A; keep DNS-only to avoid redirect loops)
CNAME  www  cname.vercel-dns.com
```

No other records needed for Vercel. SSL is issued automatically once the domain attaches to a project.

## Verification checklist after any deploy/domain change

1. Deploy log contains `Deploying joegandys-projects/rsmap-uk`.
2. Fresh deployment URL (from log) serves HTTP 200 **without** redirecting to `vercel.com/sso-api`.
3. `https://www.rsmap.uk/` page-chunk hash matches a fresh local build of `main`
   (`ls .next/static/chunks/app/page-*.js` vs what the site serves).
4. Tile smoke test: `https://www.rsmap.uk/tiles/0/5/25/145.png` returns an image (redirects to the Pages mirror — follow it).
5. Dependabot/alert count still zero if deps changed.

## Related incidents (context for future debugging)

- **Aug 2026**: domain served pre-upgrade build for weeks despite green deploys — root cause was the multi-project split above plus SSO protection hiding the real deployment. Fixed by consolidating onto `rsmap-uk`.
- **Mar–Aug 2026**: map data frozen — RuneLite cache pin crash (see AGENTS.md gotcha 3) compounded by schedule auto-disable (gotcha 4).
