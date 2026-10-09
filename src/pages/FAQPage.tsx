import React from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import { faqList } from '../data/faq';
import { Accordion } from '../components/ui/Accordion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import faqContent from '../content/faq.json';

export const FAQPage: React.FC = () => {
  const pageContent = (faqContent as any).pageContent || {
    badge: "Частые вопросы",
    title: "Ответы на ключевые вопросы",
    subtitle: "Собрали ответы на вопросы, которые чаще всего возникают у родителей и взрослых учеников об онлайн-занятиях, формате обучения и процессах.",
    ctaTitle: "Остались вопросы?",
    ctaSubtitle: "Если вы не нашли ответа, я подробно отвечу на вопросы и помогу подобрать подходящий формат обучения.",
    ctaButtonText: "Задать вопрос"
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="purple" icon={<HelpCircle className="w-3.5 h-3.5 text-purple-600" />}>
          {pageContent.badge}
        </Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          {pageContent.title}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {pageContent.subtitle}
        </p>
      </div>

      {/* Main FAQ Accordion */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-xs">
        <Accordion items={faqList} />
      </div>

      {/* Lower CTA Block (Остались вопросы?) */}
      <div className="bg-purple-50/70 border border-purple-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 shadow-xs">
        <div className="space-y-1 sm:space-y-1.5 max-w-2xl">
          <h2 className="font-heading font-bold text-slate-900 text-xl sm:text-2xl">
            {pageContent.ctaTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {pageContent.ctaSubtitle}
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto pt-1 sm:pt-0">
          <Button
            to="/contacts"
            variant="primary"
            size="md"
            icon={<MessageSquare className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            {pageContent.ctaButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
