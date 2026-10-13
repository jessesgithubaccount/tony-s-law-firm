# T.N Ogwoka & Osili Advocates – React site

Vite + React 18 + React Router. Poppins is the only font on every page.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Deploy (Netlify)

Build command `npm run build`, publish directory `dist`. `netlify.toml` and `public/_redirects`
make direct links like `/contact` and `/family-law` work.

## Where things live

| What | Where |
| --- | --- |
| Routes | `src/App.jsx` – `/`, `/contact`, and one route per practice area |
| Nav / footer / page shell | `src/components/Navbar.jsx`, `Footer.jsx`, `SiteLayout.jsx` |
| Home page sections | `src/components/home/` (Hero, About, Team, PracticeAreas, Faq, Testimonials) |
| About stats (100+ clients served …) | `stats` array at the top of `src/components/home/About.jsx` |
| Contact page | `src/pages/Contact.jsx` |
| Practice-area list, order, summaries | `src/data/practiceAreas.js` (also drives the menu and prev/next links) |
| Practice-area article text | `src/content/*.jsx` |
| FAQ, testimonials, team | `src/data/faqs.js`, `testimonials.js`, `team.js` |
| Styles | `src/styles/site.css` (home + contact), `src/styles/article.css` (articles) |
| Images | `public/images/` |

The contact form validates its fields but does not send anywhere yet.
