# Codeloom — Team Website

A clean, animated one-page site for **Codeloom**, a small web & mobile development team led by Ritchie Nalam. Built with **React + Vite** and **Framer Motion**.

## Features
- Sticky navbar with scrollspy + smooth scrolling and an SVG logo mark
- Animated hero with rotating services, a rotating **network globe** background, and stats
- **Our Tech Stack** — categorized brand-icon grid (Frontend, Backend, DevOps & Cloud, Design & CMS, AI Tools)
- **Our Work** — project cards
- **Our Team** — member cards with photos (auto-fallback to initials)
- Dark / light theme toggle, scroll-progress bar, fully responsive, reduced-motion aware

## Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # preview the build
```

## Customize
- **Content** lives in [`src/data/resume.js`](src/data/resume.js) — team name, members, projects, contact.
- **Tech stack** icons/categories are in [`src/components/Skills.jsx`](src/components/Skills.jsx).
- **Team photos:** `public/avatar.png`, `public/krissha.png`, `public/john.png`.
- **Logo:** the vector mark is [`src/components/Logo.jsx`](src/components/Logo.jsx); colors/accents in [`src/index.css`](src/index.css).

## Deploy
Any static host (Vercel, Netlify, Cloudflare Pages). Build with `npm run build` and serve `dist/`.
