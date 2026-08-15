# Nordholm Studio — Frontend Portfolio Project

A production-style marketing website for a fictional product design & engineering
studio, built with React, Vite, Tailwind CSS, and React Router.

## Features

- 6 fully routed pages: Home, About, Services, Projects, Contact, 404
- Dark / light mode with `localStorage` persistence and system-preference detection
- Live search + category filtering on the Projects page
- Project detail modal with keyboard (Escape) support and focus handling
- Validated, stateful contact form (client-side validation, loading + success states)
- Fully responsive layout with a working mobile hamburger menu
- Accessible: visible focus states, skip-to-content link, `aria-*` attributes throughout
- Custom design system (color tokens, type scale) defined in `tailwind.config.js`

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/     # Reusable UI building blocks
├── pages/          # Route-level page components
├── layouts/         # Shared page shell (navbar + footer)
├── data/            # Mock content (projects, services, team, FAQs)
├── context/          # Theme (dark/light) context
├── hooks/            # Small reusable hooks
├── utils/            # Form validation helpers
├── App.jsx           # Route definitions
├── main.jsx           # App entry point
└── index.css           # Tailwind layers + design system utility classes
```

## Notes

- All content is static/mock data in `src/data/` — there is no backend.
  The contact form simulates a network request with `setTimeout`.
- Swap the fonts, colors, or copy in `tailwind.config.js` and `src/data/`
  to reskin this for a different studio or product.
