# Cloudflare Pages Deployment Guide

This project is fully configured and ready to deploy to Cloudflare Pages.

## Quick Deploy Steps

### 1. Via Cloudflare Dashboard (Recommended)

**IMPORTANT: Make sure you're in the PAGES section, NOT Workers!**

1. **Access Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Sign in to your account

2. **Navigate to Pages (NOT Workers)**
   - Look in the **left sidebar** for **"Pages"** (it has a document/page icon)
   - **DO NOT** click on "Workers & Pages" - that's different
   - Click directly on **"Pages"** in the sidebar
   - You should see a page titled "Pages" with options to create projects

3. **Create New Pages Project**
   - Click the **"Create a project"** button (usually blue, top right)
   - Select **"Connect to Git"** option

3. **Connect GitHub Repository**
   - Choose **GitHub** as your Git provider
   - Authorize Cloudflare to access your repositories
   - Select the `akleads/olivia-fairy-house` repository
   - Click **Begin setup**

4. **Configure Build Settings**
   - **Project name**: `olivia-fairy-house` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: Select **None** (this is a static site)
   - **Build command**: Leave **empty** (no build needed)
   - **Build output directory**: `/` (root directory)
   - **Root directory**: `/` (root directory)

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the deployment to complete (usually takes 1-2 minutes)

6. **Access Your Site**
   - Your site will be live at: `https://olivia-fairy-house.pages.dev`
   - You can customize the domain in the project settings

### 2. Via Wrangler CLI

If you prefer using the command line:

```bash
# Install Wrangler (if not installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Navigate to project directory
cd /Users/alexkozhemiachenko/Downloads/Cursor/Olivia

# Deploy
wrangler pages deploy . --project-name=olivia-fairy-house
```

## Configuration Files

The project includes:
- `_redirects` - Handles routing for single-page app behavior
- `.cloudflare-pages.json` - Optional Cloudflare Pages configuration
- All static files are ready for deployment

## Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Add your domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to Git, Cloudflare Pages will automatically:
- Deploy on every push to the `main` branch
- Create preview deployments for pull requests
- Provide deployment history and rollback options

## Troubleshooting

### Build Fails
- Make sure **Build command** is empty
- Verify **Output directory** is set to `/`
- Check that all files are committed to Git

### Assets Not Loading
- Ensure all image files (`fairy-face.jpg`, `dinosaur.png`) are in the repository
- Check that file paths in HTML are relative (they already are)

### 404 Errors
- The `_redirects` file should handle this
- Verify the file exists in the root directory

## Support

For more information, visit:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Getting Started](https://developers.cloudflare.com/pages/get-started/)

