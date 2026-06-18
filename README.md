# My Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Showcasing projects, skills, and professional experience with smooth animations using Framer Motion.

## Features

✨ **Modern Design**
- Clean, professional layout
- Dark theme with cyan accent colors
- Fully responsive (mobile, tablet, desktop)
- Smooth animations with Framer Motion

🎨 **Sections**
- Hero section with animated name
- About preview with personal summary
- Featured projects with images
- Tech stack categorized and organized
- All projects showcase page
- Contact CTA
- Resume download

⚡ **Performance**
- Static generation for optimal speed
- Image optimization with Next.js
- Code splitting and lazy loading
- Minified CSS and JavaScript
- SEO optimized

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Afrah-create/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

To create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── home/              # Home page sections
│   │   ├── Hero.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── TechStack.tsx
│   │   └── ContactCTA.tsx
│   ├── layout/            # Layout components
│   ├── ui/                # Reusable UI components
├── data/                  # Static data
│   └── projects.ts
├── lib/                   # Utilities & constants
│   └── constants.ts
└── types/                 # TypeScript types
    └── project.ts
public/
├── projects/              # Project images
└── resume.html           # Resume
```

## Deployment

### Option 1: Deploy on Vercel (Recommended)

The easiest and fastest way to deploy:

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js and apply the correct settings
5. Click "Deploy"

The configuration in `vercel.json` ensures optimal deployment settings.

### Option 2: Deploy on Vercel with CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Environment Variables

No environment variables are required for this portfolio. All data is static.

## Configuration

### Vercel Configuration (`vercel.json`)
- Build, dev, and install commands configured
- Security headers enabled
- Cache optimization for static assets
- Disabled Next.js telemetry

### Next.js Configuration (`next.config.ts`)
- Image optimization settings
- Security headers (HSTS, CSP, X-Frame-Options, etc.)
- Minification enabled
- Powered-by header removed (security)
- React Strict Mode enabled

### Tailwind Configuration
- Custom color theme (cyan accents)
- Responsive design utilities
- Optimized for production

## Performance Optimizations

- **Static Generation**: Pages are pre-rendered at build time
- **Image Optimization**: Automatic format conversion (AVIF, WebP)
- **Code Splitting**: Automatic chunking of JavaScript
- **Tree Shaking**: Unused code is removed
- **Minification**: All assets are minified
- **Compression**: Gzip compression on server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source under the MIT License.

## Contact

- **Email**: fahadirashidawongo@gmail.com
- **LinkedIn**: [Awongo Fahadi Rashid](https://www.linkedin.com/in/awongo-fahadi-rashid-0b823a363)
- **GitHub**: [Afrah-Create](https://github.com/Afrah-Create)

---

Built with ❤️ by Awongo Fahadi Rashid
