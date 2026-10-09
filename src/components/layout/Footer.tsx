import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { footerLegalNav, footerNavSections } from '../../data/navigation';
import { MobileNavAccordion } from '../navigation/MobileNavAccordion';
import siteContent from '../../content/site.json';
import legalContent from '../../content/legal.json';

export const Footer: React.FC = () => {
  const [isOfferExpanded, setIsOfferExpanded] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Container */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-8 pb-12 border-b border-slate-800 space-y-6 lg:space-y-0">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4 pb-4 lg:pb-0 border-b border-slate-800/80 lg:border-0">
            <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="На главную">
              <img
                src="/images/victoria-logo.webp"
                alt={siteContent.brandName}
                className="h-9 sm:h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="font-heading font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                  {siteContent.brandName}
                </div>
                <div className="text-xs text-purple-300 font-medium">
                  {siteContent.role}
                </div>
              </div>
            </Link>

            {/* Mobile & Tablet (< lg): Compact expandable offer */}
            <div className="lg:hidden max-w-md sm:max-w-xl">
              <button
                type="button"
                onClick={() => setIsOfferExpanded(!isOfferExpanded)}
                aria-expanded={isOfferExpanded}
                className="w-full text-left py-1 flex items-start justify-between gap-2.5 group cursor-pointer select-none"
              >
                <span className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {siteContent.footer?.mobileShortDescription || "Онлайн-обучение английскому для детей, школьников и взрослых."}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-purple-400 shrink-0 mt-0.5 transition-transform duration-300 ${
                    isOfferExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Full description: strictly hidden when closed, rendered only when opened */}
              {isOfferExpanded && (
                <div className="pt-2 pb-1 border-t border-slate-800/80 mt-1.5 transition-all duration-200 animate-in fade-in">
                  <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                    {siteContent.shortDescription}
                  </p>
                </div>
              )}
            </div>

            {/* Desktop (lg: and above): Full static text */}
            <p className="hidden lg:block text-sm text-slate-400 leading-relaxed max-w-md">
              {siteContent.shortDescription}
            </p>
          </div>

          {/* Mobile & Tablet (< lg): Accordions for sections */}
          <div className="lg:hidden max-w-xl">
            <MobileNavAccordion sections={footerNavSections} theme="dark" />
          </div>

          {/* Desktop Static Columns (lg: and above, >= 1024px) */}
          {footerNavSections.map((sec) => (
            <div key={sec.id} className="hidden lg:block space-y-3">
              <h3 className="font-heading font-semibold text-white text-xs uppercase tracking-wider text-purple-300">
                {sec.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {sec.links.map((link) => (
                  <li key={link.path + link.title}>
                    <Link
                      to={link.path}
                      className={`hover:text-purple-300 transition-colors ${
                        link.highlight ? 'font-medium text-purple-200' : ''
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Legal Details & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            © 2026 {legalContent.executorName}
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-center">
            {footerLegalNav.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-purple-300 transition-colors">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
