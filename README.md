# GrowMart - Animated Landing Page (Next.js)

This is a healthcare telemedicine platform landing page built with Next.js, TypeScript, and Tailwind CSS. It features smooth GSAP animations with a stacking cards effect.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **GSAP** - Professional animations
- **shadcn/ui** - Component library

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- 🎨 Modern healthcare design with teal/cyan color scheme
- ✨ Smooth GSAP scroll animations
- 📱 Fully responsive design
- 🎯 Stacking cards effect
- 🎭 Text reveal animations
- 🖼️ Parallax image effects
- 🚀 Optimized for performance

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── TextRevealSection.tsx
│   ├── FeatureCards.tsx
│   ├── ProcessSteps.tsx
│   └── WaitlistSection.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## Deployment

Deploy on [Vercel](https://vercel.com):

```bash
vercel
```

## License

MIT
