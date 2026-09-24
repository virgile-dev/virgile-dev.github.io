import type { APIRoute } from 'astro';
import { rssFeed } from '../feeds';

export const GET: APIRoute = ({ site }) => rssFeed('en', site!);
