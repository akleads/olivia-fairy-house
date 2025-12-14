# Instructions to Push to GitHub

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `olivia-fairy-house` (or any name you prefer)
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/olivia-fairy-house.git

# Rename branch to main if needed (already done)
git branch -M main

# Push your code
git push -u origin main
```

## Alternative: Using SSH

If you have SSH keys set up with GitHub:

```bash
git remote add origin git@github.com:YOUR_USERNAME/olivia-fairy-house.git
git push -u origin main
```

## After Pushing

Your website will be available at:
- Repository URL: `https://github.com/YOUR_USERNAME/olivia-fairy-house`
- You can also enable GitHub Pages to host it live!

