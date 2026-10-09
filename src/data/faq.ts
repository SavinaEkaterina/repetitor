import faqContent from '../content/faq.json';
import { FAQItemData } from '../types';

export const faqList: FAQItemData[] = (faqContent.items as any[])
  .filter((item: any) => item.visible !== false)
  .map((item: any) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    category: item.category
  }));
