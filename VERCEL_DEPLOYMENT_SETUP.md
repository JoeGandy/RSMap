# 🚀 Vercel Deployment Setup Guide

## 📋 **Required GitHub Secrets**

You need to add these secrets to your GitHub repository for the deployment workflow to work:

### **1. Get Vercel Token**
```bash
# Install Vercel CLI
npm i -g vercel

# Login and get token
vercel login
vercel --token  # This will show your token
```

### **2. Get Project Details**
```bash
# In your project directory
vercel link
vercel env ls  # This will show your project details
```

### **3. Add GitHub Secrets**
Go to: `GitHub Repository → Settings → Secrets and variables → Actions`

Add these secrets:
- **`VERCEL_TOKEN`**: Your Vercel authentication token
- **`VERCEL_ORG_ID`**: Your Vercel organization ID  
- **`VERCEL_PROJECT_ID`**: Your Vercel project ID

## 🔧 **Alternative: Simplified Approach**

If you prefer not to use the Vercel GitHub Action, here's a simpler approach:

### **Option 1: Disable Auto-Deploy in Vercel**
1. Go to Vercel Dashboard → Your Project → Settings → Git
2. **Disable "Auto-deploy"** for the main branch
3. **Enable "Deploy only after workflow succeeds"**

### **Option 2: Use Branch Protection**
1. Go to GitHub → Settings → Branches
2. Add protection rule for `main` branch
3. Require status checks: "Generate OSRS Tiles"
4. Vercel will only deploy after the check passes

## 🎯 **How It Works**

### **Current Setup:**
1. **Monthly Schedule**: Tiles generate on 1st of each month
2. **Workflow Dependency**: Vercel deployment waits for tile generation
3. **Smart Triggers**: 
   - Code changes → Deploy immediately
   - Tile updates → Deploy after generation
   - Manual tile generation → Deploy after completion

### **Deployment Flow:**
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Code Push      │───▶│  Deploy to       │───▶│  Live Site      │
│  (main branch)  │    │  Vercel          │    │  Updated        │
└─────────────────┘    └──────────────────┘    └─────────────────┘

┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Tile Generation│───▶│  Tiles Updated   │───▶│  Deploy to       │───▶│  Live Site      │
│  (monthly/manual)│    │  (Git Push)      │    │  Vercel          │    │  Updated        │
└─────────────────┘    └──────────────────┘    └──────────────────┘    └─────────────────┘
```

## ⚙️ **Configuration Files**

### **`vercel.json`** ✅ (Already created)
- Disables automatic Git deployments
- Sets proper caching for tiles
- Configures API timeouts

### **`.github/workflows/deploy-to-vercel.yml`** ✅ (Already created)
- Waits for tile generation to complete
- Deploys only after successful tile updates
- Handles both production and preview deployments

## 🔍 **Testing the Setup**

### **1. Test Manual Tile Generation**
```bash
# Trigger manual tile generation
gh workflow run generate-tiles.yml

# Check workflow status
gh run list --workflow=generate-tiles.yml
```

### **2. Verify Deployment Trigger**
After tile generation completes, check:
- GitHub Actions tab for deployment workflow
- Vercel dashboard for new deployment
- Live site for updated tiles

## 🛡️ **Backup Plan**

If the automated deployment fails, you can always:

```bash
# Manual deployment
vercel --prod

# Or deploy specific commit
vercel --prod --meta gitCommitSha=<commit-hash>
```

## 📊 **Monitoring**

Watch these indicators:
- ✅ **Tile Generation**: Monthly workflow completes
- ✅ **Git Push**: Tiles committed to repository  
- ✅ **Deployment Trigger**: Vercel workflow starts
- ✅ **Live Update**: New tiles visible on site

Your OSRS map will now stay automatically updated with the latest game data! 🗺️✨
