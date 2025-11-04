# Deployment Guide for Vercel

This guide will help you deploy your portfolio to Vercel with automatic CI/CD.

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Git repository initialized

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
```

2. Add all files and commit:
```bash
git add .
git commit -m "Initial commit: Portfolio website"
```

3. Create a new repository on GitHub and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

### Option B: Via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

## Step 3: Automatic CI/CD Setup

Vercel automatically sets up CI/CD when you connect a Git repository:

- ✅ **Automatic deployments** on every push to `main` branch
- ✅ **Preview deployments** for pull requests
- ✅ **Automatic HTTPS** and custom domain support
- ✅ **Build logs** and deployment status

### How it works:

1. Push to `main` branch → Production deployment
2. Create a PR → Preview deployment
3. Merge PR → Production deployment

## Environment Variables

If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Build fails:
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct build script
- Verify all dependencies are in `package.json`

### 404 errors on routes:
- The `vercel.json` includes rewrites for SPA routing
- Ensure all routes redirect to `index.html`

## Manual Deployment

If you need to redeploy manually:
```bash
vercel --prod
```

Or use the "Redeploy" button in Vercel dashboard.

