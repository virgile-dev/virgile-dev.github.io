import type { CollectionEntry } from 'astro:content';

export const languages = { en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.about': 'About me →',
    'nav.blog': '← Blog',
    'index.description': 'Writing on open source product management and digital commons.',
    'index.tagline':
      "Hey, I'm Virgile. I'm a Product Manager working on open source software, currently leading LaSuite Docs at DINUM, the French government's digital agency. This blog is where I write about running open source products, where the industry is headed, and what AI is doing to it — including how I'm using it myself.",
    'post.readIn': 'Lire en français',
    'layout.description': 'Senior Product Manager specialized in open source collaboration software.',
  },
  fr: {
    'nav.about': 'À propos →',
    'nav.blog': '← Blog',
    'index.description': "Écrits sur le product management open source et les communs numériques.",
    'index.tagline':
      "Bonjour, moi c'est Virgile. Je suis Product Manager dans le logiciel libre, et je pilote actuellement LaSuite Docs à la DINUM, la direction interministérielle du numérique. J'écris ici sur la conduite de produits open source, sur l'évolution du secteur et sur ce que l'IA lui fait — y compris la manière dont je l'utilise moi-même.",
    'post.readIn': 'Read in English',
    'layout.description': 'Senior Product Manager spécialisé dans les logiciels libres de collaboration.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

/** Prefix a path with the language, e.g. ('fr', '/blog/x/') -> '/fr/blog/x/'. */
export function localizePath(lang: Lang, path: string): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

export function formatDate(lang: Lang, date: Date): string {
  return new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

// Blog posts live in src/content/blog/<lang>/<key>.md. Two posts sharing
// the same <key> in different language folders are translations of each other.
type Post = CollectionEntry<'blog'>;

export function postLang(post: Post): Lang {
  return post.id.split('/')[0] as Lang;
}

export function postKey(post: Post): string {
  return post.id.split('/').slice(1).join('/');
}

export function postSlug(post: Post): string {
  return post.data.urlSlug ?? postKey(post);
}

export function postUrl(post: Post): string {
  return localizePath(postLang(post), `/blog/${postSlug(post)}/`);
}

export function findTranslation(post: Post, posts: Post[]): Post | undefined {
  return posts.find((p) => postKey(p) === postKey(post) && postLang(p) !== postLang(post));
}
