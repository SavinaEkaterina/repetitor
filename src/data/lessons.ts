import lessonsContent from '../content/lessons.json';

export interface LessonStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export const lessonSteps: LessonStep[] = lessonsContent.steps as LessonStep[];
export const lessonToolkits = lessonsContent.toolkits;
