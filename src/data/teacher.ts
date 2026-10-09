import siteContent from '../content/site.json';
import aboutContent from '../content/about.json';
import { TeacherProfile } from '../types';

export const teacherData: TeacherProfile = {
  fullName: siteContent.fullName,
  shortName: siteContent.shortName,
  brandName: siteContent.brandName,
  role: siteContent.role,
  experienceYears: siteContent.experienceYears,
  tagline: siteContent.tagline,
  bio: aboutContent.bio,
  education: (aboutContent as any).education || [
    {
      degree: "Диплом бакалавра",
      institution: "Высшее педагогическое / лингвистическое образование",
      year: "2018"
    }
  ],
  certificates: (aboutContent as any).certificates || [],
  principles: (aboutContent.principles || []).map((p: any) => ({
    title: p.title,
    description: p.description,
    iconName: p.iconName || 'Sparkles'
  })),
  stats: (aboutContent as any).stats || []
};
