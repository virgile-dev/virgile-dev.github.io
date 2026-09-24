import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oss.pm',
  // The stylesheet is small; inlining it saves a render-blocking request.
  build: { inlineStylesheets: 'always' },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
