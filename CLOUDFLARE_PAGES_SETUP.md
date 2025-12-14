# Cloudflare Pages Setup - Step by Step

## ⚠️ IMPORTANT: Pages vs Workers

**You need to use CLOUDFLARE PAGES, not Workers!**

- **Pages** = Static website hosting (what you need)
- **Workers** = Serverless functions (not what you need)

## Correct Navigation Path

1. Go to: https://dash.cloudflare.com/

2. In the **left sidebar**, look for:
   - ✅ **"Pages"** (with a document/page icon) ← Click this!
   - ❌ NOT "Workers & Pages"
   - ❌ NOT "Workers"

3. Once in Pages:
   - You'll see a page with "Pages" as the title
   - Click **"Create a project"** button (usually top right, blue button)

4. Choose **"Connect to Git"**

5. Select your Git provider (GitHub)

6. Authorize and select repository: `akleads/olivia-fairy-house`

7. **Build Settings:**
   ```
   Project name: olivia-fairy-house
   Production branch: main
   Framework preset: None
   Build command: (leave completely empty)
   Build output directory: / (just a forward slash)
   Root directory: / (just a forward slash)
   ```

8. Click **"Save and Deploy"**

## If You're Still Seeing Workers

If you're still being directed to Workers:

1. **Check the URL** - It should be: `https://dash.cloudflare.com/[account-id]/pages`
2. **Look for the correct icon** - Pages has a document icon, Workers has a gear/worker icon
3. **Try direct link**: After logging in, go directly to: `https://dash.cloudflare.com/pages`
4. **Clear browser cache** and try again

## Alternative: Direct Pages Link

After logging into Cloudflare:
- Try going directly to: `https://dash.cloudflare.com/pages`
- This should take you straight to the Pages section

## What You Should See

When you're in the correct Pages section, you should see:
- A page titled "Pages" at the top
- A list of your existing Pages projects (if any)
- A "Create a project" button
- Options like "Connect to Git" or "Upload assets"

If you see anything about "Workers", "Functions", or "Wrangler", you're in the wrong place!

