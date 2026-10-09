import fm from 'front-matter';
import { BlogPostItem } from '../types';

interface NewsFrontMatter {
  id?: string;
  slug?: string;
  title?: string;
  summary?: string;
  category?: string;
  readTime?: string;
  date?: string;
  published?: boolean;
  isDemoPost?: boolean;
  tags?: string[];
  image?: string;
}

const monthsMap: Record<number, string> = {
  1: 'января',
  2: 'февраля',
  3: 'марта',
  4: 'апреля',
  5: 'мая',
  6: 'июня',
  7: 'июля',
  8: 'августа',
  9: 'сентября',
  10: 'октября',
  11: 'ноября',
  12: 'декабря'
};

/**
 * Formats YYYY-MM-DD string to Russian date format (e.g. "15 сентября 2026")
 */
export const formatRussianDate = (dateStr: string): string => {
  if (!dateStr) return '';
  
  // Check YYYY-MM-DD pattern
  const isoMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const year = isoMatch[1];
    const monthNum = parseInt(isoMatch[2], 10);
    const dayNum = parseInt(isoMatch[3], 10);
    const monthName = monthsMap[monthNum] || '';
    return `${dayNum} ${monthName} ${year}`;
  }

  // Fallback if already in Russian or other format
  return dateStr;
};

/**
 * Parse timestamp for sorting descending
 */
export const getPostTimestamp = (dateStr: string): number => {
  if (!dateStr) return 0;
  const isoMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    return new Date(dateStr).getTime();
  }
  // If date string contains year
  const yearMatch = dateStr.match(/\d{4}/);
  if (yearMatch) {
    const year = parseInt(yearMatch[0], 10);
    return new Date(year, 0, 1).getTime();
  }
  return 0;
};

// Import all markdown files in src/content/news/
const newsModules = import.meta.glob('/src/content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

const loadNewsFromMarkdown = (): BlogPostItem[] => {
  const posts: BlogPostItem[] = [];

  for (const [filepath, rawContent] of Object.entries(newsModules)) {
    // Exclude templates or documentation files starting with _ or README
    const filename = filepath.split('/').pop() || '';
    if (filename.startsWith('_') || filename.toUpperCase().startsWith('README')) {
      continue;
    }

    try {
      if (!rawContent || typeof rawContent !== 'string') {
        console.error(`[News Loader Warning] File ${filepath} is empty or unreadable.`);
        continue;
      }

      const parsed = fm<NewsFrontMatter>(rawContent);
      const attrs = parsed.attributes || {};

      // Validate required fields
      const missingFields: string[] = [];
      if (!attrs.title) missingFields.push('title');
      if (!attrs.slug) missingFields.push('slug');
      if (!attrs.summary) missingFields.push('summary');
      if (!attrs.category) missingFields.push('category');
      if (!attrs.date) missingFields.push('date');
      if (attrs.published === undefined) missingFields.push('published');

      if (missingFields.length > 0) {
        console.error(
          `[News Validation Error] File ${filepath} is missing required fields: ${missingFields.join(', ')}`
        );
        continue;
      }

      // Check for duplicate slug
      if (posts.some(p => p.slug === attrs.slug)) {
        console.error(
          `[News Duplicate Slug Error] File ${filepath} uses duplicate slug "${attrs.slug}". Article skipped.`
        );
        continue;
      }

      // Format content body into array of paragraphs
      const rawBody = parsed.body || '';
      const paragraphs = rawBody
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(Boolean);

      const content = paragraphs.length > 0 ? paragraphs : [attrs.summary!];

      const formattedDate = formatRussianDate(attrs.date!);

      const postItem: BlogPostItem = {
        id: attrs.id || `news-${attrs.slug}`,
        slug: attrs.slug!,
        title: attrs.title!,
        summary: attrs.summary!,
        category: attrs.category!,
        readTime: attrs.readTime || '4 мин',
        date: formattedDate,
        content,
        tags: attrs.tags || [],
        isDemoPost: Boolean(attrs.isDemoPost),
        published: Boolean(attrs.published),
        image: attrs.image
      };

      posts.push(postItem);
    } catch (error) {
      console.error(`[News Parsing Error] Failed to parse markdown in ${filepath}:`, error);
    }
  }

  // Sort descending by date (newest first)
  posts.sort((a, b) => getPostTimestamp(b.date) - getPostTimestamp(a.date));

  return posts;
};

// All valid parsed posts from Markdown
export const allBlogPostsList: BlogPostItem[] = loadNewsFromMarkdown();

// Publicly visible published posts
export const blogPostsList: BlogPostItem[] = allBlogPostsList.filter(
  post => post.published !== false
);
