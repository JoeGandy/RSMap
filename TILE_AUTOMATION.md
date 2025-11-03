# 🗺️ Automated OSRS Tile Generation

This project includes automated tile generation that runs monthly via GitHub Actions to keep your OSRS map tiles up-to-date with the latest game cache.

## 🚀 How It Works

### Automatic Monthly Updates
- **Schedule**: Runs on the 1st of every month at 2:00 AM UTC
- **Process**: Downloads latest OSRS cache → Generates tiles → Commits changes
- **Smart Updates**: Only regenerates if tiles are older than 30 days or missing

### Manual Triggering
You can manually trigger tile generation anytime:

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **Generate OSRS Tiles** workflow
4. Click **Run workflow**
5. Optionally check "Force regenerate all tiles" to rebuild everything

## 📋 What the Workflow Does

### 1. Environment Setup
- ✅ Ubuntu runner with Node.js 18, Java 11, Python 3.9
- ✅ Installs system dependencies (libvips, build tools)
- ✅ Installs project dependencies (npm, pip, gradle)

### 2. Smart Tile Checking
- 🔍 Checks if tiles exist and are recent (< 30 days old)
- 🔍 Skips generation if tiles are up-to-date (saves resources)
- 🔍 Forces regeneration if manually requested

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

### Common Issues

**Workflow fails with memory errors:**
- Increase `NODE_OPTIONS` memory limit
- Consider splitting tile generation into smaller batches

**Tiles not updating:**
- Check if workflow is enabled in repository settings
- Verify the cron schedule syntax
- Manually trigger to test

**Build fails after tile generation:**
- Check if `public/tiles/` directory structure is correct
- Verify tile files are valid PNG format
- Check Next.js build logs for specific errors

### Debug Steps
1. Check workflow logs in GitHub Actions
2. Download failed run artifacts (if available)
3. Run tile generation locally to reproduce issues
4. Check system dependencies and versions

## 📁 File Structure

After successful generation:
```
public/tiles/
├── 0/          # Plane 0 (surface)
│   ├── 3/      # Zoom level 3
│   ├── 4/      # Zoom level 4
│   └── ...     # Up to zoom level 11
├── 1/          # Plane 1 (underground)
├── 2/          # Plane 2 (sky level 1)
└── 3/          # Plane 3 (sky level 2)
```

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
- 🚀 **Zero Maintenance**: Set it and forget it

Your OSRS map will now stay current with the latest game updates automatically! 🎉
