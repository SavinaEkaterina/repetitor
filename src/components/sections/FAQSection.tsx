import React from 'react';
import { faqList } from '../../data/faq';
import { Accordion } from '../ui/Accordion';
import { Badge } from '../ui/Badge';
import faqContent from '../../content/faq.json';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <Badge variant="purple">{faqContent.headingTitle}</Badge>
          <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">
            {faqContent.headingTitle}
          </h2>
          <p className="text-slate-600 text-base">
            {faqContent.headingSubtitle}
          </p>
        </div>

        <Accordion items={faqList} />

      </div>
    </section>
  );
};
