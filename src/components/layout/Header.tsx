import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  MessageCircle, 
  Phone,
  BookOpen, 
  Award, 
  Users, 
  GraduationCap 
} from 'lucide-react';
import { mainNavigation } from '../../data/navigation';
import { FullNavigator } from '../navigation/FullNavigator';
import siteContent from '../../content/site.json';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDirectionsOpen, setMobileDirectionsOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll shadow/background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Handle clicks outside the desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Direction icon helper
  const getDirectionIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-purple-700" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-purple-700" />;
      case 'Award':
        return <Award className="w-4 h-4 text-purple-700" />;
      case 'Users':
        return <Users className="w-4 h-4 text-purple-700" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-purple-700" />;
      default:
        return <BookOpen className="w-4 h-4 text-purple-700" />;
    }
  };

  // Check if current route matches any directions route
  const isDirectionsActive = [
    '/children',
    '/school-preparation',
    '/school-english',
    '/oge',
    '/adults',
    '/courses',
    '/free-courses'
  ].some(path => location.pathname === path || location.pathname.startsWith(path));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-purple-100'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* 1. Left Zone: Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0" aria-label="На главную">
          <img
            src="/images/victoria-logo.webp"
            alt={siteContent.brandName}
            className="h-9 sm:h-10 md:h-11 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-bold text-slate-900 text-sm sm:text-base md:text-lg leading-tight group-hover:text-purple-700 transition-colors whitespace-nowrap">
              {siteContent.brandName}
            </span>
            <span className="text-[11px] sm:text-xs text-purple-700 font-semibold leading-none mt-0.5 whitespace-nowrap">
              <span className="sm:hidden">
                {siteContent.header?.roleMobile || "Преподаватель английского языка"}
              </span>
              <span className="hidden sm:inline">
                {siteContent.role}
              </span>
            </span>
          </div>
        </Link>

        {/* 2. Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {mainNavigation.map((item) => {
            // Dropdown Item ("Направления обучения")
            if (item.children) {
              return (
                <div
                  key={item.title}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div
                    className={`flex items-center rounded-xl transition-colors ${
                      isDirectionsActive || dropdownOpen
                        ? 'bg-purple-100/90 text-purple-900 border border-purple-200/60 shadow-2xs'
                        : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50/70 border border-transparent'
                    }`}
                  >
                    <Link
                      to="/pricing"
                      onClick={() => setDropdownOpen(false)}
                      className="pl-3.5 pr-1 py-2 text-sm font-bold hover:text-purple-900 transition-colors"
                    >
                      {item.title}
                    </Link>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(!dropdownOpen);
                      }}
                      aria-label="Раскрыть программы обучения"
                      className="pr-2.5 pl-1 py-2 rounded-r-xl hover:text-purple-900 transition-colors cursor-pointer flex items-center justify-center"
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-purple-700 transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown Card */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-96 sm:w-[420px] transition-all duration-200 ${
                      dropdownOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white/98 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-100 p-3 space-y-1">
                      
                      {/* Dropdown Title Header */}
                      <div className="px-3 py-1.5 mb-1 flex items-center justify-between border-b border-purple-50">
                        <span className="text-[11px] font-extrabold text-purple-900 uppercase tracking-wider">
                          {siteContent.header?.programsTitle || "Программы обучения"}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {siteContent.header?.directionsCount || "6 направлений"}
                        </span>
                      </div>

                      {/* Dropdown Menu Items */}
                      {item.children.map((child) => {
                        const isChildActive = location.pathname === child.path;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group/item ${
                              isChildActive
                                ? 'bg-purple-100/80 border border-purple-200/80'
                                : 'hover:bg-purple-50/80 border border-transparent'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                              {getDirectionIcon(child.iconName)}
                            </div>
                            <div className="space-y-0.5">
                              <div className="font-heading font-bold text-slate-900 text-sm leading-tight group-hover/item:text-purple-700 transition-colors">
                                {child.title}
                              </div>
                              <p className="text-xs text-slate-500 leading-snug">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}

                    </div>
                  </div>
                </div>
              );
            }

            // Regular Nav Item (Главная, Обо мне, Новости)
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname === item.path || location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-colors ${
                  isActive
                    ? 'bg-purple-100/90 text-purple-900 border border-purple-200/60 shadow-2xs'
                    : 'text-slate-700 hover:text-purple-700 hover:bg-purple-50/70'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right Zone: Action Button & Full Navigator Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Desktop CTA Button */}
          <Link
            to="/contacts"
            className="hidden sm:inline-flex items-center gap-2 py-2.5 px-4 sm:px-5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm rounded-2xl shadow-sm hover:shadow transition-all duration-200 shrink-0"
          >
            <Phone className="w-4 h-4 text-purple-200" />
            <span>{siteContent.header?.contactsButton || "Контакты"}</span>
          </Link>

          {/* Quick Full Navigator ☰ Button */}
          <FullNavigator />
        </div>

      </div>

      {/* 4. Mobile Drawer / Modal Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-slate-900/40 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl p-5 overflow-y-auto flex flex-col justify-between border-l border-purple-100">
            
            <div className="space-y-5">
              
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                <span className="font-heading font-bold text-slate-900 text-base">
                  {siteContent.brandName}
                </span>
                <span className="text-[11px] bg-purple-100 text-purple-900 px-2.5 py-0.5 rounded-full font-bold">
                  {siteContent.header?.menuTitle || "Меню сайта"}
                </span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                
                {/* 1. Главная */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    location.pathname === '/'
                      ? 'bg-purple-100 text-purple-900'
                      : 'text-slate-800 hover:bg-purple-50'
                  }`}
                >
                  Главная
                </Link>

                {/* 2. Направления обучения (Accordion) */}
                <div className="rounded-2xl border border-purple-100 bg-purple-50/50 overflow-hidden space-y-1">
                  <div className="w-full flex items-center justify-between px-4 py-3 font-bold text-sm text-purple-950 hover:bg-purple-100/60 transition-colors">
                    <Link
                      to="/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-purple-700 transition-colors flex-1"
                    >
                      Программы обучения
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileDirectionsOpen(!mobileDirectionsOpen)}
                      className="p-1 -mr-1 rounded-lg hover:bg-purple-200/50 text-purple-700 transition-colors flex items-center justify-center"
                      aria-label="Раскрыть программы обучения"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDirectionsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {mobileDirectionsOpen && (
                    <div className="px-2 pb-2 space-y-1 bg-white pt-1">
                      {mainNavigation.find(n => n.children)?.children?.map((child) => {
                        const isChildActive = location.pathname === child.path;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-start gap-2.5 p-2.5 rounded-xl transition-colors ${
                              isChildActive
                                ? 'bg-purple-100 text-purple-900 font-bold'
                                : 'text-slate-800 hover:bg-purple-50'
                            }`}
                          >
                            <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                              {getDirectionIcon(child.iconName)}
                            </div>
                            <div>
                              <div className="font-bold text-xs text-slate-900">
                                {child.title}
                              </div>
                              <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Обо мне */}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    location.pathname === '/about'
                      ? 'bg-purple-100 text-purple-900'
                      : 'text-slate-800 hover:bg-purple-50'
                  }`}
                >
                  Обо мне
                </Link>

                {/* 4. Частые вопросы */}
                <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    location.pathname === '/faq'
                      ? 'bg-purple-100 text-purple-900'
                      : 'text-slate-800 hover:bg-purple-50'
                  }`}
                >
                  Частые вопросы
                </Link>

                {/* 5. Новости */}
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    location.pathname.startsWith('/blog')
                      ? 'bg-purple-100 text-purple-900'
                      : 'text-slate-800 hover:bg-purple-50'
                  }`}
                >
                  Новости
                </Link>

              </div>

            </div>

            {/* Mobile Bottom Action Button */}
            <div className="pt-5 border-t border-purple-100 space-y-3">
              <Link
                to="/contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-purple-700 text-white font-bold text-sm rounded-2xl shadow-sm"
              >
                <Phone className="w-4 h-4 text-purple-200" />
                <span>Контакты</span>
              </Link>
              <p className="text-center text-xs text-slate-500">
                {siteContent.fullName}
              </p>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
