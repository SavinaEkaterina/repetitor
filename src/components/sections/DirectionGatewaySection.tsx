import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, Users, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { HomeSectionAccordion } from '../ui/HomeSectionAccordion';
import homeContent from '../../content/home.json';
import { isPathPublished } from '../../data/navigation';

export const DirectionGatewaySection: React.FC = () => {
  const { directionsGateway } = homeContent;
  const { kidsCard, adultsCard } = directionsGateway;

  const isAdultsPublished = isPathPublished('/adults');

  const kidsHighlightRoutes = [
    '/school-preparation',
    '/school-english',
    '/oge'
  ];

  const adultsHighlightRoutes = [
    '/courses',
    '/adults',
    '/free-courses'
  ];

  return (
    <section id="directions-select" className="py-8 sm:py-12 md:py-16 bg-white border-b border-purple-100/60 h-auto overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 h-auto overflow-visible">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
            {directionsGateway.badge}
          </Badge>
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {directionsGateway.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-base md:text-lg leading-relaxed">
            {directionsGateway.subtitle}
          </p>
        </div>

        {/* ======================================================== */}
        {/* A. MOBILE ACCORDION VIEW (< md)                           */}
        {/* ======================================================== */}
        <div className="md:hidden space-y-3.5">
          
          {/* 1. Accordion: ДЛЯ ДЕТЕЙ */}
          <HomeSectionAccordion
            id="mobile-gateway-kids"
            icon={<GraduationCap className="w-5 h-5 text-purple-700" />}
            title={directionsGateway.kidsTitle || "ДЛЯ ДЕТЕЙ"}
            subtitle={directionsGateway.kidsSubtitle || "Подготовка к школе, 2–8 классы и ОГЭ"}
            badge={directionsGateway.kidsAccordionBadge || "Дети и подростки"}
          >
            <div className="space-y-4 pt-3">
              <div className="space-y-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-900 bg-purple-100/90 px-2.5 py-0.5 rounded-full border border-purple-200/70 inline-block">
                  {kidsCard.badge}
                </span>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                  {kidsCard.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {kidsCard.description}
                </p>
              </div>

              {/* Highlights with existing routes */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-bold text-slate-800">
                  {directionsGateway.kidsHighlightsTitle || "Направления подготовки:"}
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {kidsCard.highlights.filter((_, index) => isPathPublished(kidsHighlightRoutes[index] || kidsCard.href)).map((item, index) => {
                    const route = kidsHighlightRoutes[index] || kidsCard.href;
                    return (
                      <li key={index}>
                        <Link
                          to={route}
                          className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-purple-50/60 hover:bg-purple-100/70 border border-purple-100/80 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                            <span className="font-medium text-slate-800 group-hover/item:text-purple-900 transition-colors">
                              {item}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-purple-500 group-hover/item:translate-x-0.5 transition-transform shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Main Direction CTA Button */}
              <div className="pt-2">
                <Link
                  to={kidsCard.href}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm rounded-2xl shadow-sm transition-all cursor-pointer"
                >
                  <span>{kidsCard.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </HomeSectionAccordion>

          {/* 2. Accordion: ДЛЯ ВЗРОСЛЫХ */}
          <HomeSectionAccordion
            id="mobile-gateway-adults"
            icon={<Users className="w-5 h-5 text-purple-700" />}
            title={directionsGateway.adultsTitle || "ДЛЯ ВЗРОСЛЫХ"}
            subtitle={directionsGateway.adultsSubtitle || "Асинхронные курсы и разговорный английский"}
            badge={directionsGateway.adultsAccordionBadge || "Взрослые"}
          >
            <div className="space-y-4 pt-3">
              <div className="space-y-1.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-900 bg-purple-100/90 px-2.5 py-0.5 rounded-full border border-purple-200/70 inline-block">
                  {adultsCard.badge}
                </span>
                <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                  {adultsCard.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {adultsCard.description}
                </p>
              </div>

              {/* Highlights with existing routes */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-bold text-slate-800">
                  {directionsGateway.adultsHighlightsTitle || "Форматы и возможности:"}
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {adultsCard.highlights.filter((_, index) => isPathPublished(adultsHighlightRoutes[index] || adultsCard.href)).map((item, index) => {
                    const route = adultsHighlightRoutes[index] || adultsCard.href;
                    return (
                      <li key={index}>
                        <Link
                          to={route}
                          className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-purple-50/60 hover:bg-purple-100/70 border border-purple-100/80 transition-colors group/item"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                            <span className="font-medium text-slate-800 group-hover/item:text-purple-900 transition-colors">
                              {item}
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-purple-500 group-hover/item:translate-x-0.5 transition-transform shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Main Direction CTA Button */}
              <div className="pt-2">
                <Link
                  to={adultsCard.href}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm rounded-2xl shadow-sm transition-all cursor-pointer"
                >
                  <span>{adultsCard.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </HomeSectionAccordion>

        </div>

        {/* ======================================================== */}
        {/* B. DESKTOP VIEW (md: and above, 100% original cards)      */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-stretch h-auto overflow-visible">
          
          {/* Card 1: FOR KIDS */}
          <div className="bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 rounded-3xl p-6 sm:p-8 border-2 border-purple-200/90 shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden h-auto max-h-none">
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-900 bg-purple-100/90 px-3 py-1 rounded-full border border-purple-200/70">
                  {kidsCard.badge}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl group-hover:text-purple-700 transition-colors">
                  {kidsCard.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {kidsCard.description}
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {kidsCard.highlights.filter((_, index) => isPathPublished(kidsHighlightRoutes[index] || kidsCard.href)).map((item, index) => {
                  const route = kidsHighlightRoutes[index] || kidsCard.href;
                  return (
                    <li key={index}>
                      <Link to={route} className="flex items-center gap-2 hover:text-purple-900 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-purple-100/80 relative z-10">
              <Link
                to={kidsCard.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm rounded-2xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>{kidsCard.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* Card 2: FOR ADULTS */}
          <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-purple-800/80 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col justify-between group relative overflow-hidden h-auto max-h-none">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 bg-purple-800/80 px-3 py-1 rounded-full border border-purple-700">
                  {adultsCard.badge}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl group-hover:text-purple-200 transition-colors">
                  {adultsCard.title}
                </h3>
                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                  {adultsCard.description}
                </p>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-purple-100">
                {adultsCard.highlights.filter((_, index) => isPathPublished(adultsHighlightRoutes[index] || adultsCard.href)).map((item, index) => {
                  const route = adultsHighlightRoutes[index] || adultsCard.href;
                  return (
                    <li key={index}>
                      <Link to={route} className="flex items-center gap-2 hover:text-amber-200 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-purple-800/80 relative z-10">
              <Link
                to={adultsCard.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-purple-50 text-purple-950 font-bold text-sm rounded-2xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>{adultsCard.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
