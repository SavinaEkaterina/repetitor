import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItemData } from '../../types';

interface AccordionProps {
  items: FAQItemData[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-purple-50/50 border-purple-300 shadow-sm'
                : 'bg-white border-slate-200 hover:border-purple-200'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              id={`faq-header-${item.id}`}
            >
              <span className="font-heading font-semibold text-slate-900 text-base sm:text-lg pr-2">
                {item.question}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? 'bg-purple-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-content-${item.id}`}
                role="region"
                aria-labelledby={`faq-header-${item.id}`}
                className="px-5 pb-6 sm:px-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-purple-100/60 pt-4"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
