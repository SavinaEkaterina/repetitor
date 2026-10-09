import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { FooterNavSection } from '../../data/navigation';

export interface MobileNavAccordionProps {
  sections: FooterNavSection[];
  onLinkClick?: () => void;
  theme?: 'dark' | 'light';
  className?: string;
}

export const MobileNavAccordion: React.FC<MobileNavAccordionProps> = ({
  sections,
  onLinkClick,
  theme = 'dark',
  className = '',
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isDark = theme === 'dark';

  return (
    <div className={`space-y-1.5 ${className}`}>
      {sections.map((section) => {
        const isOpen = !!openSections[section.id];
        return (
          <div
            key={section.id}
            className={`border-b transition-colors ${
              isDark ? 'border-slate-800/90' : 'border-purple-100'
            }`}
          >
            {/* Accordion Toggle Button */}
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className={`w-full flex items-center justify-between py-3.5 px-0.5 text-left transition-colors cursor-pointer select-none ${
                isDark
                  ? 'text-purple-300 hover:text-white'
                  : 'text-purple-950 hover:text-purple-700'
              }`}
              aria-expanded={isOpen}
              aria-controls={`mobile-nav-${section.id}`}
            >
              <span
                className={`font-heading font-semibold text-xs uppercase tracking-wider ${
                  isDark ? 'text-purple-300' : 'text-purple-900'
                }`}
              >
                {section.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                  isDark ? 'text-purple-300' : 'text-purple-700'
                } ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Collapsible Content */}
            <div
              id={`mobile-nav-${section.id}`}
              className={`${
                isOpen
                  ? 'max-h-[500px] opacity-100 pb-3.5 pt-0.5'
                  : 'max-h-0 opacity-0 pb-0 pt-0 pointer-events-none'
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <ul className="space-y-2 text-sm pl-1">
                {section.links.map((link) => (
                  <li key={link.path + link.title}>
                    <Link
                      to={link.path}
                      onClick={onLinkClick}
                      className={`block py-1 transition-colors ${
                        link.highlight
                          ? isDark
                            ? 'font-medium text-purple-200 hover:text-white'
                            : 'font-bold text-purple-700 hover:text-purple-900'
                          : isDark
                          ? 'text-slate-300 hover:text-purple-300'
                          : 'text-slate-600 hover:text-purple-700'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
