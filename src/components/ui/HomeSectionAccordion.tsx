import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HomeSectionAccordionProps {
  id: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  borderVariant?: 'purple' | 'amber';
  className?: string;
}

export const HomeSectionAccordion: React.FC<HomeSectionAccordionProps> = ({
  id,
  icon,
  iconBgColor = 'bg-purple-100 text-purple-700',
  title,
  subtitle,
  badge,
  children,
  defaultOpen = false,
  borderVariant = 'purple',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const borderClass =
    borderVariant === 'amber'
      ? 'border-2 border-amber-300/90 hover:border-amber-400 bg-white'
      : 'border-2 border-purple-200/90 hover:border-purple-300 bg-white';

  const chevronColor =
    borderVariant === 'amber' ? 'text-amber-700' : 'text-purple-700';

  return (
    <div
      className={`rounded-3xl shadow-sm transition-all duration-200 ${borderClass} ${className}`}
    >
      {/* Accordion Trigger Button (Min touch height ~56px) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`home-accordion-${id}`}
        className="w-full min-h-[56px] p-4 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${iconBgColor}`}
          >
            {icon}
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 tracking-tight uppercase group-hover:text-purple-700 transition-colors">
                {title}
              </span>
              {badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            borderVariant === 'amber'
              ? 'bg-amber-50 group-hover:bg-amber-100'
              : 'bg-purple-50 group-hover:bg-purple-100'
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ease-in-out shrink-0 ${chevronColor} ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Accordion Expandable Content (Grid transition for smooth height animation without max-height hack) */}
      <div
        id={`home-accordion-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-purple-100/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
