oss.pm
======

Personal site for Virgile Deville, built with [Astro](https://astro.build/).
Originally based on the Freelancer Bootstrap theme, migrated from Jekyll in 2026.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Content

- `src/content/projects/` — portfolio entries shown as cards/modals on the homepage
- `src/content/press/` — press-mentions archive shown in the Press Room section

## Deployment

Pushes to `master` build and deploy via `.github/workflows/deploy.yml` to GitHub Pages.
The repo's Pages source must be set to "GitHub Actions" (Settings → Pages) for this to take effect.
