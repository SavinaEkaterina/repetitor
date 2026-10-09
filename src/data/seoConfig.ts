import seoContent from '../content/seo.json';
import { blogPostsList } from './blog';
import { authorCoursesList } from './courses';

export const DEFAULT_SITE_URL = seoContent.defaultSiteUrl;

export const getSiteUrl = (): string => {
  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin;
  }
  return DEFAULT_SITE_URL;
};

export interface PageSeoData {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export const defaultSeoData: PageSeoData = seoContent.defaultSeoData as PageSeoData;

export const routeSeoConfig: Record<string, PageSeoData> = seoContent.routeSeoConfig as Record<string, PageSeoData>;

export const getDynamicSeoData = (pathname: string): PageSeoData => {
  if (routeSeoConfig[pathname]) {
    return routeSeoConfig[pathname];
  }

  // Handle blog post route
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '');
    const post = blogPostsList.find(p => p.slug === slug);
    if (post) {
      return {
        title: `${post.title} — Новости Виктории Славоладовой`,
        description: post.summary,
        ogType: "article",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.summary,
            "author": {
              "@type": "Person",
              "name": "Виктория Славоладова"
            },
            "publisher": {
              "@type": "Person",
              "name": "Виктория Славоладова"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": `${DEFAULT_SITE_URL}/` },
              { "@type": "ListItem", "position": 2, "name": "Новости", "item": `${DEFAULT_SITE_URL}/blog` },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `${DEFAULT_SITE_URL}${pathname}` }
            ]
          }
        ]
      };
    }
  }

  // Handle course detail route
  if (pathname.startsWith('/courses/')) {
    const slug = pathname.replace('/courses/', '');
    const course = authorCoursesList.find(c => c.slug === slug);
    if (course) {
      return {
        title: `${course.title} — Авторский курс Виктории Славоладовой`,
        description: course.description || course.subtitle,
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": course.title,
            "description": course.description || course.subtitle,
            "provider": {
              "@type": "Person",
              "name": "Виктория Славоладова"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": `${DEFAULT_SITE_URL}/` },
              { "@type": "ListItem", "position": 2, "name": "Курсы", "item": `${DEFAULT_SITE_URL}/courses` },
              { "@type": "ListItem", "position": 3, "name": course.title, "item": `${DEFAULT_SITE_URL}${pathname}` }
            ]
          }
        ]
      };
    }
  }

  // Fallback 404
  return {
    title: "Страница не найдена — 404",
    description: "Запрошенная страница не найдена на сайте преподавателя английского языка Виктории Славоладовой."
  };
};
