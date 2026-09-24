import { getCollection, type CollectionEntry } from 'astro:content';
import { postLang, findTranslation, type Lang } from './i18n/ui';

export const SITE_NAME = 'oss.pm';
export const OG_IMAGE = '/img/og.png';

export const author = {
  name: 'Virgile Deville',
  path: '/virgile-deville/',
  image: '/img/portrait.webp',
  sameAs: ['https://github.com/virgile-dev', 'https://www.linkedin.com/in/virgiledeville'],
};

/** schema.org Person for the site's author; `site` is Astro.site. */
export function authorJsonLd(site: URL, lang: Lang) {
  return {
    '@type': 'Person',
    '@id': new URL(`${author.path}#person`, site).href,
    name: author.name,
    url: new URL(author.path, site).href,
    image: new URL(author.image, site).href,
    jobTitle:
      lang === 'fr'
        ? 'Senior Product Manager — Open source & communs numériques'
        : 'Senior Product Manager — Open Source & Digital Commons',
    worksFor: {
      '@type': 'GovernmentOrganization',
      name: 'DINUM',
      url: 'https://www.numerique.gouv.fr/numerique-etat/dinum/',
    },
    knowsAbout: ['Open source software', 'Product management', 'Digital commons', 'Civic tech'],
    sameAs: author.sameAs,
  };
}

export async function getPublishedPosts() {
  return getCollection('blog', ({ data }) => !data.draft);
}

/** Posts listed for a language: its own posts, plus other-language posts not translated yet. Newest first. */
export function listedPosts(lang: Lang, posts: CollectionEntry<'blog'>[]) {
  return posts
    .filter((post) => postLang(post) === lang || !findTranslation(post, posts))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
