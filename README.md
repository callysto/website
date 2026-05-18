# Callysto Website

The official website for [Callysto](https://callysto.ca) — free data science resources for Canadian K–12 teachers and students.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages via GitHub Actions.

---

## Local development

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later (`brew install node` on macOS)

### Setup

```bash
# Install dependencies (first time only)
npm install

# Start the local dev server with live reload
npm run dev
```

The site is available at **http://localhost:4321**. Changes to any file in `src/` reload the browser automatically.

### Other commands

```bash
npm run build    # Build for production → outputs to dist/
npm run preview  # Preview the production build locally
```

---

## Deployment

Pushes to the `main` branch automatically trigger a GitHub Actions build and deploy to GitHub Pages. No manual steps required.

The workflow is defined in [.github/workflows/publish.yaml](.github/workflows/publish.yaml).

---

## Branch strategy

| Branch | Purpose |
|---|---|
| `main` | Live site at callysto.ca |
| `astro-redesign` | New Astro redesign in progress |

The `astro-redesign` branch is merged into `main` when the redesign is ready to go live.

---

## Project structure

```
src/
  layouts/       ← Base HTML shell (BaseLayout.astro)
  pages/         ← One .astro file per route
  styles/        ← Global CSS (Tailwind v4 + design tokens)
content/         ← Markdown content (being migrated to Astro content collections)
assets/media/    ← Images and logos
public/          ← Static files served as-is
```

---

## Analytics

The site uses [GoatCounter](https://www.goatcounter.com/) for privacy-first, cookie-free analytics. The tracking script is in `src/layouts/BaseLayout.astro` (commented out until the GoatCounter account is set up).

---

## Contact

Questions? Email [contact@callysto.ca](mailto:contact@callysto.ca) or find us at [@callysto_canada](https://twitter.com/callysto_canada).
