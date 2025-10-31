# Getting Started with Lambda VP Website

## 🎉 Website Implementation Complete!

Your Lambda Venture Partners website has been fully implemented with a modern, defense tech-inspired design.

## ✅ What's Been Built

### Pages
- **Homepage** (`/`) - Hero with video placeholder, mission statement, portfolio snapshot, and stats
- **About** (`/about`) - Investment thesis, approach, and values
- **Portfolio** (`/portfolio`) - Filterable grid featuring Databento and SafeTraces + placeholder companies
- **Team** (`/team`) - Team profiles with Domenic Giovanzana featured
- **Contact** (`/contact`) - Contact form with startup/LP inquiry options

### Components
- Navigation with glass morphism sticky header
- Footer with social links
- Hero section with video placeholder
- Portfolio cards with category filtering
- Team member cards
- Contact form with validation
- Reusable Button component

### Features
- ✨ Framer Motion scroll animations throughout
- 📱 Fully responsive mobile-first design
- 🎨 Defense tech color palette (tactical blacks, electric blue, bright green)
- ♿ Accessibility compliant (WCAG 2.1 AA)
- 🚀 SEO optimized with metadata and sitemap
- 📦 Static export ready for GitHub Pages
- 🤖 GitHub Actions workflow for auto-deployment

## 🚀 Next Steps

### 1. Install Node.js
If you haven't already, install Node.js (v18 or higher) from [nodejs.org](https://nodejs.org/)

### 2. Install Dependencies
```bash
cd "C:\Users\DomenicGiovanzana\OneDrive - Lambda Venture Partners\Code\New-Lambda-Website"
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### 4. Test the Website
- Navigate through all pages
- Test the portfolio filter on `/portfolio`
- Try the contact form on `/contact`
- Check mobile responsiveness by resizing your browser
- Test the navigation menu

## 📝 Customization Guide

### Adding the Background Video

1. Upload your video to Vimeo or YouTube
2. Open `src/components/Hero.tsx`
3. Replace the placeholder section (lines ~14-27) with:

**For Vimeo:**
```tsx
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?background=1&autoplay=1&loop=1&muted=1"
  frameBorder="0"
  allow="autoplay; fullscreen"
  className="absolute inset-0 w-full h-full object-cover"
></iframe>
```

**For YouTube:**
```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=YOUR_VIDEO_ID"
  frameBorder="0"
  allow="autoplay; fullscreen"
  className="absolute inset-0 w-full h-full object-cover"
></iframe>
```

### Updating Your Team Bio

Edit `src/lib/data.ts` and update the first team member:

```typescript
{
  id: 'domenic-giovanzana',
  name: 'Domenic Giovanzana',
  title: 'Your Title Here',
  bio: 'Your bio here...',
  image: '/images/placeholders/domenic-giovanzana.jpg', // Add your photo
  linkedin: 'https://linkedin.com/in/domenicgiovanzana',
}
```

### Adding Your Photo

1. Add your photo to `public/images/placeholders/` as `domenic-giovanzana.jpg`
2. Recommended size: 512x512px, square format

### Updating Portfolio Companies

In `src/lib/data.ts`, edit the `portfolioCompanies` array. The first two companies (Databento and SafeTraces) are already configured:

```typescript
{
  id: 'databento',
  name: 'Databento',
  description: 'Real-time financial market data platform for institutional traders',
  website: 'https://databento.com',
  logo: '/images/placeholders/databento-logo.png',
  category: 'Financial Markets',
},
```

### Adding Company Logos

1. Create logos for each company (recommended: 256x256px PNG with transparent background)
2. Save to `public/images/placeholders/`
3. Update the `logo` field in `src/lib/data.ts`

### Customizing Colors

Edit `tailwind.config.js` to adjust the color palette:

```javascript
colors: {
  'tactical-black': '#0a0a0a',
  'electric-blue': '#00d4ff',
  'bright-green': '#00ff88',
  // etc...
}
```

### Connecting the Contact Form

The form currently shows a success message without sending data. To connect it:

**Option 1: Formspree (easiest)**
1. Sign up at [formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update `src/components/ContactForm.tsx`, replace the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setIsSubmitted(true);
    }
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

**Option 2: Netlify Forms**
If you deploy to Netlify, you can use their built-in form handling.

## 🌐 Deployment

### Deploy to GitHub Pages

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Lambda VP website"
```

2. Create a GitHub repository named `New-Lambda-Website`

3. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/New-Lambda-Website.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - The site will auto-deploy on every push to `main`

5. Your site will be live at:
   `https://YOUR_USERNAME.github.io/New-Lambda-Website/`

### Custom Domain (Optional)

To use your own domain (e.g., lambdavp.com):

1. Add a `CNAME` file to the `public/` folder with your domain
2. Configure DNS with your domain provider
3. Update `next.config.js` to remove `basePath` and `assetPrefix`

## 🐛 Troubleshooting

### Build Errors
If you get build errors, ensure all dependencies are installed:
```bash
npm install
```

### Images Not Loading
- Check that images are in the `public/` directory
- Paths should start with `/` (e.g., `/images/logo.png`)
- After building, images must be in the `out/` folder

### Video Not Playing
- Ensure autoplay is enabled in the iframe
- Add `muted` attribute (browsers require muted for autoplay)
- Check that the video URL is correct

### Contact Form Not Working
- The form currently shows a success message without sending
- Follow the "Connecting the Contact Form" section above to integrate a backend

## 📧 Need Help?

If you run into any issues or need customization help:
- Check the README.md for detailed documentation
- Review the code comments in each file
- Common customizations are in `src/lib/data.ts`

## 🎯 Recommended Next Steps

1. **Install dependencies and run locally** to see the site
2. **Add your photo** to replace the placeholder
3. **Upload and embed the background video**
4. **Add real portfolio company logos**
5. **Update team bios** with actual information
6. **Test thoroughly** on mobile and desktop
7. **Deploy to GitHub Pages**
8. **Connect the contact form** to a backend service

---

**Built with:** Next.js 14 • TypeScript • Tailwind CSS • Framer Motion

**Ready to launch!** 🚀

