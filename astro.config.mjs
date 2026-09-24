import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oss.pm',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
