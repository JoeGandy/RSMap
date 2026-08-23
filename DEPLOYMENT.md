# Deployment Guide

> **Topology, incident history and verification steps live in [`docs/DEPLOYMENT_ARCHITECTURE.md`](docs/DEPLOYMENT_ARCHITECTURE.md) — read that first if you're debugging deploys or domains.** This file covers the practical "how to deploy".

## Production (how it actually works)

Production is deployed **by GitHub Actions only** — Vercel's Git integration is disabled in `vercel.json` (`git.deploymentEnabled: false`).

```
push to main (non-tile paths)      ──► deploy-to-vercel.yml ──► vercel --prod ──► project "rsmap-uk"
monthly tile run success           ──► same workflow via workflow_run
push touching public/tiles/** only ──► deploy-tiles-to-pages.yml ──► GitHub Pages mirror
```

### Required GitHub secrets

| Secret | Purpose |
|---|---|
| `VERCEL_TOKEN` | CLI auth. **If empty, the deploy step silently skips and the job still passes** — a green run is not proof of a deploy. |
| `VERCEL_ORG_ID` | Vercel team/scope id |
| `VERCEL_PROJECT_ID` | Project id of `rsmap-uk` |

### What the workflow does

1. `npm ci` on Node 22
2. `npm run build` (type-check + lint + prerender — this is the real gate)
3. Removes `public/tiles/` (864 MB — tiles are served from GitHub Pages, never Vercel)
4. `vercel --prod --token …` → deploys to project **`rsmap-uk`**

### Verify a deploy actually shipped

```bash
# 1. log must contain the project name:
#    "Deploying joegandys-projects/rsmap-uk"
# 2. fresh deployment URL must NOT redirect to vercel.com/sso-api
#    (if it does: Project → Settings → Deployment Protection → disable Vercel Authentication)
# 3. served page chunk must match a local build of main:
npm run build && ls .next/static/chunks/app/page-*.js
curl -s https://www.rsmap.uk/ | grep -oE 'chunks/app/page-[a-f0-9]+\.js'
# 4. tiles still flow:
curl -sL -o /dev/null -w '%{http_code}\n' https://www.rsmap.uk/tiles/0/5/25/145.png   # expect 200
```

## Domains

`rsmap.uk` + `www.rsmap.uk` must be attached to the **`rsmap-uk`** project (Settings → Domains). DNS (Cloudflare):

```
A      @    76.76.21.21
CNAME  www  cname.vercel-dns.com
```

⚠️ Vercel allows a domain on only one project at a time. If the site serves stale builds while deploys succeed, the domain is probably attached to an old project — see `docs/DEPLOYMENT_ARCHITECTURE.md`.

## Local development

```bash
npm ci
npm run dev        # http://localhost:3000
```

Tiles load from the GitHub Pages mirror in dev too — no local tile files required.

## Self-hosting (alternative)

The app is a standard Next.js server:

```bash
npm ci && npm run build && npm start   # :3000, reverse-proxy as needed
```

Tiles: either mirror `public/tiles/` onto the same host (restore from the repo or Pages) or keep pointing the frontend at the Pages mirror (it's a plain URL constant in `src/components/OSRSMap.tsx`).

## Cost notes

- **Vercel** serves only the lightweight app (~2 MB + chunks); tiles bypass it entirely, keeping bandwidth/billing minimal.
- **GitHub Pages** carries the ~864 MB tile pyramid (repo-hosted, free for public repos).
- The tile-generation runner costs up to 120 min/month of Actions time.
