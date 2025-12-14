# ✨ Olivia's Fairy House ✨

A magical, interactive website featuring a fairy, an enchanted fairy house, and a collection of beautiful dresses for kids.

## Features

- 🧚 **Interactive Fairy** - A beautiful fairy that follows your mouse/touch movements
- 🏠 **Enchanted Fairy House** - A detailed house with windows, door, and decorative flowers
- 👗 **Dress Collection** - Six magical dresses that the fairy can wear when clicked
- 🦕 **Flying Dinosaur** - An animated dinosaur that flies around the screen
- ✨ **Magical Effects** - Sparkles, animations, and glowing effects throughout
- 📱 **Mobile-Friendly** - Fully responsive design for all devices

## Technologies Used

- HTML5
- CSS3 (with animations and responsive design)
- JavaScript (for interactivity)

## Getting Started

Simply open `index.html` in your web browser to view the website.

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality
- `fairy-face.jpg` - Fairy's face image
- `dinosaur.png` - Flying dinosaur image

## Customization

You can customize the fairy's face by replacing `fairy-face.jpg` with your own image. The dinosaur image can also be replaced by updating `dinosaur.png`.

## Deployment to Cloudflare Pages

This project is ready to deploy to Cloudflare Pages. Follow these steps:

### Option 1: Deploy via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Click **Connect to Git**
4. Select your GitHub account and choose the `olivia-fairy-house` repository
5. Configure the build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `/` (root directory)
6. Click **Save and Deploy**

Your site will be live at: `https://olivia-fairy-house.pages.dev` (or your custom domain)

### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler CLI (if not already installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy .
```

### Build Settings for Cloudflare Pages

- **Build command**: (empty - no build needed)
- **Output directory**: `/` (root)
- **Root directory**: `/` (root)

The project is configured with:
- `_redirects` file for proper routing
- Static files ready for deployment
- No build process required

## License

Created with ✨ magic ✨ for Olivia

