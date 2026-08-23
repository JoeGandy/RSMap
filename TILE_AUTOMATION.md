# 🗺️ Automated OSRS Tile Generation

This project includes automated tile generation that runs monthly via GitHub Actions to keep your OSRS map tiles up-to-date with the latest game cache.

## 🚀 How It Works

### Automatic Monthly Updates
- **Schedule**: Runs on the 1st of every month at 2:00 AM UTC (`cron: '0 2 1 * *'`)
- **Process**: Downloads latest OSRS cache → Generates tiles → Commits changes
- **Change detection**: Every run regenerates from the latest cache; the commit step only pushes when files actually differ

> ⚠️ **The schedule can silently stop**: GitHub disables scheduled workflows on public repos after 60 days without repo activity. Because failed runs commit nothing, this already happened once (Apr–Aug 2026 the cron never fired). Check **Actions → Generate OSRS Tiles → ⋯ → Enable workflow** if a month goes quiet.

### Manual Triggering
You can manually trigger tile generation anytime:

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **Generate OSRS Tiles** workflow
4. Click **Run workflow**
5. Optionally check "Force regenerate all tiles" to rebuild everything

## 📋 What the Workflow Does

### 1. Environment Setup
- ✅ Ubuntu runner with Node.js 22 (npm install + app build); Java 17 + Python 3.11 live inside the generator Docker image
- ✅ Installs system dependencies (libvips via Docker image), npm deps, Pillow/numpy for transparency pass
- ✅ Tile generation itself runs in Docker (`osrs-tile-generator` image built from `tile_generator/Dockerfile`)

### 3. Tile Generation Process
```bash
npm run clean              # Remove old tiles and cache
npm run build:with-tiles   # Generate new tiles + build app
```

### 4. Automatic Git Operations
- 📝 Commits new tiles with descriptive message
- 📝 Includes tile count and generation reason
- 📝 Pushes changes back to repository
- 📝 Only commits if there are actual changes

## 🛠️ Local Development

### Generate Tiles Locally
```bash
# Clean and generate tiles
npm run clean
npm run build:with-tiles

# Or just generate tiles without building
./scripts/generate-tiles.sh
```

### Manual Scripts
```bash
# Clean everything
npm run clean

# Build with fresh tiles
npm run build:with-tiles

# Regular build (uses existing tiles)
npm run build
```

## 📊 Monitoring

### GitHub Actions Dashboard
- View workflow runs in the **Actions** tab
- Each run shows detailed logs and summaries
- Failed runs upload tiles as artifacts for debugging

### Workflow Summary
Each run creates a summary showing:
- ✅ Generation status and reason
- 📈 Number of tiles generated
- 💾 Total file size
- 🔄 Git commit status

## 🔧 Configuration

### Workflow Schedule
Edit `.github/workflows/generate-tiles.yml` to change the schedule:
```yaml
schedule:
  # Run on the 15th of every month at 3:00 AM UTC
  - cron: '0 3 15 * *'
```

### Timeout Settings
The workflow has a 2-hour timeout. Adjust if needed:
```yaml
timeout-minutes: 120  # 2 hours
```

### Memory Settings
Node.js memory is increased for tile processing:
```yaml
env:
  NODE_OPTIONS: '--max-old-space-size=4096'  # 4GB
```

## 🚨 Troubleshooting

These are the failure modes this pipeline has actually hit, in order of likelihood:

**1. Java dumper crashes: `BufferUnderflowException` while loading objects (with `Unrecognized opcode` warnings)**
The pinned RuneLite cache library can't parse a newer game cache. `tile_generator/java/build.gradle` uses `net.runelite:cache:1.12.+` which auto-tracks the latest **stable** release — if you still see this, check whether a new stable was published recently and whether Gradle resolved it (`./gradlew dependencies | grep runelite`). This froze the map Mar–Aug 2026 when the dep was hard-pinned to `1.12.0`.

**2. Cron never fired at all**
GitHub disables scheduled workflows after 60 days without repo activity (`disabled_inactivity`). Failed tile runs commit nothing → inactivity → schedule dies silently. Fix: Actions tab → Generate OSRS Tiles → Enable workflow. Consider a keepalive commit or a watchdog alert.

**3. Workflow "succeeds" but site still shows old tiles**
Deploy chain: tiles commit → Pages publish → Vercel deploy. Check each hop: Pages deployment status, then `docs/DEPLOYMENT_ARCHITECTURE.md` (domain/project mismatch has bitten here).

**4. Memory errors during render/slice**
The Java dumper wants ~8 GB heap; Node slicing uses `NODE_OPTIONS='--max-old-space-size=4096'`. On local machines ensure Docker has ≥8 GB allocated.

**5. Build fails after generation**
Check `public/tiles/` structure (planes 0–3 × zooms 0–6) and that PNGs are valid. The slicer logs per-zoom failures but continues — inspect the Python step output, not just the exit code.

### Debug Steps
1. Check workflow logs in GitHub Actions (the Java step's stderr is inside the Docker build/run logs)
2. Download failed run artifacts (if available)
3. Reproduce locally: `npm run clean && ./scripts/generate-tiles.sh`
4. Compare against the last known-good cache on [archive.openrs2.org](https://archive.openrs2.org/) — if only the newest cache fails, it's a format change (see #1)

## 📁 File Structure

After successful generation:
```
public/tiles/
├── 0/          # Plane 0 (surface)
│   ├── 0/      # Zoom level 0 … up to zoom level 6
│   └── 5/      # Zoom 5 = reference grid: 51 x 178 tiles (256px each)
├── 1/          # Plane 1 (underground)
├── 2/          # Plane 2 (sky level 1)
└── 3/          # Plane 3 (sky level 2)
```

~193k files / ~864 MB total. Tile path pattern: `/tiles/{plane}/{zoom}/{x}/{y}.png`.

## 🔐 Security

- Uses `GITHUB_TOKEN` for repository access (automatically provided)
- No additional secrets required
- Commits are made by "GitHub Action" user
- All operations are logged and auditable

## 💡 Benefits

- 🔄 **Always Up-to-Date**: Tiles automatically refresh monthly
- 💰 **Cost Effective**: Only regenerates when needed
- 🛡️ **Reliable**: Robust error handling and recovery
- 📊 **Transparent**: Full logging and status reporting
- 🚀 **Low maintenance**: fully automated, with per-run summaries — but check in monthly: this pipeline has several *silent* failure modes (see Troubleshooting)

Your OSRS map will now stay current with the latest game updates automatically! 🎉
