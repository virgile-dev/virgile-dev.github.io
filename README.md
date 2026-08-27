oss.pm
======

Personal site for Virgile Deville, built with [Astro](https://astro.build/).

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushes to `master` build and deploy via `.github/workflows/deploy.yml` to GitHub Pages.
The repo's Pages source must be set to "GitHub Actions" (Settings → Pages) for this to take effect.
