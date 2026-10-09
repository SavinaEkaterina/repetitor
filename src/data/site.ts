import siteContent from '../content/site.json';

export const siteConfig = {
  title: `${siteContent.brandName} — ${siteContent.role}`,
  shortTitle: siteContent.brandName,
  brandName: siteContent.brandName,
  tagline: siteContent.tagline,
  description: siteContent.shortDescription,
  heroHeading: siteContent.tagline,
  heroSubheading: siteContent.shortDescription,
  mascotNote: (siteContent as any).mascotNote || '',
  placeholdersNotice: "Информация с отметкой [Будет добавлено] находится на согласовании с Викторией Славоладовой и обновляется по мере предоставления материалов."
};
