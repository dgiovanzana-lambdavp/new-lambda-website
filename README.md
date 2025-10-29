# Lambda Venture Partners Website

A modern, high-performance website for Lambda Venture Partners, a venture capital firm focused on defense technology investments.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 🎨 Design Features

- Dark military-inspired color palette
- Glass morphism effects
- Smooth scroll animations
- Responsive design (mobile-first)
- Accessibility compliant (WCAG 2.1 AA)

## 📦 Installation

1. Install Node.js (v18 or higher)
2. Install dependencies:
```bash
npm install
```

## 🛠️ Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Building for Production

Build the static site:
```bash
npm run build
```

The static files will be generated in the `out` directory.

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

1. Build the site: `npm run build`
2. The `out` folder contains the static files
3. Push to the `main` branch
4. GitHub Actions will automatically deploy

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── images/         # Images and logos
│   └── robots.txt      # SEO configuration
├── src/
│   ├── app/            # Next.js pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── portfolio/  # Portfolio page
│   │   ├── team/       # Team page
│   │   └── layout.tsx  # Root layout
│   ├── components/     # React components
│   ├── lib/            # Data and utilities
│   └── styles/         # Global styles
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Key Pages

- **Homepage** (`/`): Hero with video placeholder, mission statement, portfolio preview
- **About** (`/about`): Investment thesis, approach, and values
- **Portfolio** (`/portfolio`): Filterable grid of portfolio companies
- **Team** (`/team`): Team member profiles
- **Contact** (`/contact`): Contact form and information

## ✨ Features to Add

- [ ] Replace video placeholder with actual background video
- [ ] Add real team photos for Domenic Giovanzana
- [ ] Integrate contact form backend (Formspree/Netlify Forms)
- [ ] Add Google Analytics tracking
- [ ] Add real portfolio company logos
- [ ] Optional: CMS integration for content management

## 🔧 Configuration

### Adding the Background Video

1. Upload video to Vimeo or YouTube
2. Update `src/components/Hero.tsx` with the embed code
3. Replace the placeholder div with an iframe or video element

### Updating Content

Edit `src/lib/data.ts` to update:
- Team member information
- Portfolio companies
- Focus areas and values
- News items

## 📝 License

© 2024 Lambda Venture Partners. All rights reserved.

## 🤝 Contributing

This is a private project for Lambda Venture Partners. For any updates or changes, please contact the development team.

## 📞 Support

For technical issues or questions about the website, please contact info@lambdavp.com

