import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Sparkles, 
  Phone,
  ChevronDown
} from 'lucide-react';
import { footerNavSections } from '../../data/navigation';
import { MobileNavAccordion } from './MobileNavAccordion';
import siteContent from '../../content/site.json';
import legalContent from '../../content/legal.json';

interface FullNavigatorProps {
  buttonClassName?: string;
}

export const FullNavigator: React.FC<FullNavigatorProps> = ({
  buttonClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopOpenSections, setDesktopOpenSections] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close full navigator overlay on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle ESC key press & lock body scroll without layout shift
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      window.addEventListener('keydown', handleKeyDown);
      // Auto focus close button when opened for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Check if route is active
  const isPathActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const toggleDesktopSection = (id: string) => {
    setDesktopOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {/* 1. TOP RIGHT TRIGGER BUTTON */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Закрыть навигатор по сайту" : "Открыть полный навигатор по сайту"}
        aria-expanded={isOpen}
        aria-controls="fullscreen-site-navigator"
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white hover:bg-purple-50 active:bg-purple-100 text-purple-900 border border-purple-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 z-[90] ${buttonClassName}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-purple-900 transition-transform duration-200 rotate-90" />
        ) : (
          <div className="flex flex-col gap-1.5 items-center justify-center w-5 h-5" title="Меню навигации">
            <span className="w-5 h-0.5 bg-purple-900 rounded-full transition-all duration-200" />
            <span className="w-5 h-0.5 bg-purple-900 rounded-full transition-all duration-200" />
            <span className="w-5 h-0.5 bg-purple-900 rounded-full transition-all duration-200" />
          </div>
        )}
      </button>

      {/* 2. RIGHT SLIDE-OVER DRAWER NAVIGATION */}
      {isOpen && (
        <div
          id="fullscreen-site-navigator"
          className="fixed inset-0 z-[9999] pointer-events-none"
        >
          {/* A. Dark Backdrop Overlay (Left ~34% on Desktop) */}
          <div
            className="fixed inset-0 z-[9999] bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in pointer-events-auto cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* B. Drawer Side Panel (Compact ~450px / ~28vw on Desktop) */}
          <div className="fixed top-0 right-0 bottom-0 z-[10000] w-full sm:w-[440px] lg:w-[450px] xl:w-[480px] h-screen bg-white text-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto pointer-events-auto transition-transform duration-300 animate-in slide-in-from-right">
            
            {/* Top Navigation Bar inside Drawer */}
            <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-purple-100 px-4 sm:px-6 py-4 flex items-center justify-between gap-3 shrink-0">
              
              {/* Left Brand Lockup */}
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 group cursor-pointer min-w-0"
                aria-label="На главную"
              >
                <img
                  src="/images/victoria-logo.webp"
                  alt={siteContent.brandName}
                  className="h-9 sm:h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-bold text-slate-900 text-sm leading-tight group-hover:text-purple-700 transition-colors truncate">
                    {siteContent.brandName}
                  </span>
                  <span className="text-[11px] text-purple-700 font-semibold leading-none mt-0.5 truncate">
                    {siteContent.role}
                  </span>
                </div>
              </Link>

              {/* Right Prominent Close Button */}
              <button
                ref={closeButtonRef}
                onClick={() => setIsOpen(false)}
                aria-label="Закрыть меню"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 active:bg-purple-200 text-purple-950 font-bold text-xs sm:text-sm border border-purple-200 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 shrink-0"
              >
                <span>Закрыть</span>
                <X className="w-4 h-4 text-purple-900" />
              </button>
            </header>

            {/* Drawer Body Content */}
            <main className="flex-1 p-4 sm:p-6 space-y-5">
              
              {/* Header Badge & Description */}
              <div className="space-y-1.5 border-b border-purple-100 pb-3.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-purple-100 text-purple-900 text-xs font-bold rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  <span>Навигация по сайту</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {siteContent.shortDescription}
                </p>

                {/* Quick Action Buttons inside drawer body */}
                <div className="pt-2 flex items-center gap-2">
                  <Link
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-2 px-3 bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs rounded-xl border border-purple-200/80 transition-colors"
                  >
                    Подобрать программу
                  </Link>
                  <Link
                    to="/contacts"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-2 px-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    Обсудить обучение
                  </Link>
                </div>
              </div>

              {/* Mobile View: Accordion Navigation (< lg) */}
              <div className="lg:hidden space-y-4">
                <MobileNavAccordion
                  sections={footerNavSections}
                  theme="light"
                  onLinkClick={() => setIsOpen(false)}
                />

                <div className="pt-2">
                  <Link
                    to="/contacts"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-2xl shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-purple-200" />
                    <span>Обсудить обучение / Контакты</span>
                  </Link>
                </div>
              </div>

              {/* Desktop View: 4 Compact Accordion Groups in Vertical Stack (lg and above) */}
              <div className="hidden lg:block space-y-4">
                <div className="space-y-3">
                  {footerNavSections.map((sec) => {
                    const isOpenSection = !!desktopOpenSections[sec.id];

                    return (
                      <div
                        key={sec.id}
                        className="rounded-2xl border border-purple-200/80 bg-white hover:border-purple-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
                      >
                        {/* Group Header Button */}
                        <button
                          type="button"
                          onClick={() => toggleDesktopSection(sec.id)}
                          className="w-full flex items-center justify-between p-3.5 text-left font-heading font-extrabold text-xs uppercase tracking-wider text-purple-950 hover:text-purple-700 bg-purple-50/60 hover:bg-purple-100/60 transition-colors cursor-pointer select-none group"
                          aria-expanded={isOpenSection}
                          aria-controls={`desktop-nav-sec-${sec.id}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            <span>{sec.title}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-purple-700 transition-transform duration-300 shrink-0 ${
                              isOpenSection ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Collapsible Content */}
                        {isOpenSection && (
                          <div
                            id={`desktop-nav-sec-${sec.id}`}
                            className="p-3 pt-1.5 border-t border-purple-100 animate-in fade-in duration-200"
                          >
                            <ul className="space-y-1 text-xs sm:text-sm">
                              {sec.links.map((link) => {
                                const active = isPathActive(link.path);
                                return (
                                  <li key={link.path + link.title}>
                                    <Link
                                      to={link.path}
                                      onClick={() => setIsOpen(false)}
                                      className={`block py-1.5 px-2.5 rounded-xl transition-all duration-150 ${
                                        active
                                          ? 'font-bold text-purple-950 bg-purple-100/90'
                                          : link.highlight
                                          ? 'font-bold text-purple-800 bg-purple-50/80 hover:bg-purple-100/80'
                                          : 'text-slate-700 hover:text-purple-900 hover:bg-purple-50/60'
                                      }`}
                                    >
                                      {link.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Action inside Drawer Body */}
                <div className="pt-3 border-t border-purple-100">
                  <Link
                    to="/contacts"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-extrabold text-sm rounded-2xl shadow-md transition-colors"
                  >
                    <Phone className="w-4 h-4 text-purple-200" />
                    <span>Обсудить обучение / Контакты</span>
                  </Link>
                </div>
              </div>

            </main>

            {/* Drawer Bottom Bar */}
            <footer className="bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 py-4 shrink-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <div className="text-center sm:text-left">
                  © 2026 {legalContent.executorName}
                </div>
                <div className="flex items-center gap-4 font-medium">
                  <Link to="/privacy" onClick={() => setIsOpen(false)} className="hover:text-purple-700 transition-colors">
                    Конфиденциальность
                  </Link>
                  <Link to="/offer" onClick={() => setIsOpen(false)} className="hover:text-purple-700 transition-colors">
                    Оферта
                  </Link>
                </div>
              </div>
            </footer>

          </div>
        </div>
      )}
    </>
  );
};
