import programsContent from '../content/programs.json';
import coursesContent from '../content/courses.json';
import { CourseItem, Direction } from '../types';

export const directionsList: Direction[] = (programsContent.items as any[])
  .filter((item: any) => item.published !== false && item.visible !== false)
  .map((item: any) => ({
    id: item.id,
    title: item.title,
    path: item.path,
    shortDesc: item.shortDesc,
    badge: item.badge,
    targetAudience: item.targetAudience,
    ageGroup: item.ageGroup,
    isKidsFriendly: item.isKidsFriendly,
    highlights: item.highlights,
    iconName: item.iconName,
    colorTheme: item.colorTheme
  }));

export const authorCoursesList: CourseItem[] = (coursesContent.items as any[])
  .filter((item: any) => item.published !== false);

export const coursesPageContent = coursesContent.pageContent;
