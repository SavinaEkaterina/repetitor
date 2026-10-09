import navContent from '../content/navigation.json';
import programsContent from '../content/programs.json';
import freeCoursesContent from '../content/free-courses.json';

export function isPathPublished(path: string): boolean {
  if (['/', '/about', '/reviews', '/blog', '/contacts', '/pricing', '/faq', '/lessons', '/privacy', '/offer', '/personal-data', '/children'].includes(path)) {
    return true;
  }
  if (path === '/free-courses') {
    if ((freeCoursesContent as any).published === false) return false;
  }
  const prog = (programsContent.items as any[]).find(p => p.path === path || p.id === path.replace('/', ''));
  if (prog) {
    if (prog.published === false || prog.visible === false) return false;
  }
  return true;
}

export interface NavItem {
  title: string;
  path: string;
  badge?: string;
  children?: {
    title: string;
    path: string;
    description: string;
    iconName?: string;
  }[];
}

export const mainNavigation: NavItem[] = (navContent.mainNavigation as any[])
  .filter((item: any) => item.visible !== false && isPathPublished(item.path))
  .map((item: any) => ({
    title: item.title,
    path: item.path,
    children: item.children
      ? item.children.filter((child: any) => child.visible !== false && isPathPublished(child.path))
      : undefined
  }));

export const footerLegalNav = (navContent.footerLegalNav as any[])
  .filter((item: any) => item.visible !== false);

export interface FooterNavSection {
  id: string;
  title: string;
  links: {
    title: string;
    path: string;
    highlight?: boolean;
  }[];
}

export const footerNavSections: FooterNavSection[] = [
  {
    id: 'main',
    title: 'Основные разделы',
    links: [
      { title: 'Главная страница', path: '/' },
      { title: 'Обо мне', path: '/about' },
      { title: 'Как проходят занятия', path: '/lessons' },
      { title: 'Отзывы учеников', path: '/reviews' },
      { title: 'Стоимость и форматы', path: '/pricing' },
      { title: 'Частые вопросы', path: '/faq' },
      { title: 'Бесплатное обучение', path: '/free-courses' },
      { title: 'Новости и статьи', path: '/blog' },
      { title: 'Контакты', path: '/contacts' },
    ].filter(link => isPathPublished(link.path)),
  },
  {
    id: 'children',
    title: 'Для детей',
    links: [
      { title: 'Общий раздел', path: '/children', highlight: true },
      { title: 'Подготовка к школе', path: '/school-preparation' },
      { title: 'Школьный английский', path: '/school-english' },
      { title: 'Подготовка к ОГЭ', path: '/oge' },
      { title: 'Как проходят занятия', path: '/lessons' },
    ].filter(link => isPathPublished(link.path)),
  },
  {
    id: 'adults',
    title: 'Для взрослых',
    links: [
      { title: 'Общий раздел', path: '/adults', highlight: true },
      { title: 'Авторские курсы', path: '/courses' },
      { title: 'Бесплатные материалы', path: '/free-courses' },
      { title: 'Как устроено обучение', path: '/lessons' },
      { title: 'Стоимость', path: '/pricing' },
    ].filter(link => isPathPublished(link.path)),
  },
].filter(sec => sec.links.length > 0);

