# Deployment Guide

## Vercel Deployment (Recommended)

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/osrs-world-map)

### Manual Deployment

1. **Fork/Clone the repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Environment Variables** (if needed):
   - No environment variables required for basic functionality
   - Add any API keys if you extend the functionality

4. **Build Settings**:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Vercel Configuration

The project includes optimal settings for Vercel:

- **Static File Serving**: Tiles served from `public/tiles/`
- **API Routes**: Tile generation API works seamlessly
- **Automatic HTTPS**: Provided by Vercel
- **Global CDN**: Fast tile delivery worldwide

### Performance Considerations

- **Tile Caching**: API routes include proper cache headers
- **Static Assets**: Large tile files are served as static assets
- **Bundle Size**: Core app is lightweight (~2MB)

## Alternative Hosting

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build && npm run export`
3. Publish directory: `out`

### Self-Hosting
1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Serve on port 3000 or configure reverse proxy

## Domain Setup

1. **Custom Domain**: Add your domain in Vercel dashboard
2. **DNS Configuration**: Point your domain to Vercel's nameservers
3. **SSL**: Automatically provided by Vercel

## Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Error Tracking**: Automatic error reporting in Vercel dashboard
- **Logs**: Real-time function logs available

## Scaling

Vercel Free Tier Limits:
- **Bandwidth**: 100GB/month
- **Function Executions**: 100GB-hours/month
- **Build Time**: 6000 minutes/month

For higher traffic, upgrade to Pro plan.
