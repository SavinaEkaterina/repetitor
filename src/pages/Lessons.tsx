import React, { useState } from 'react';
import { lessonSteps, lessonToolkits, LessonStep } from '../data/lessons';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { LessonGallery } from '../components/sections/LessonGallery';
import { Check, UserCheck, FileText, Monitor, CheckSquare, MessageCircle, TrendingUp, LayoutGrid, Gamepad2, Sparkles, Volume2, ChevronDown } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';
import lessonsContent from '../content/lessons.json';

const pageContent = (lessonsContent as any).pageContent || {
  badge: "Наглядный процесс обучения",
  title: "Как проходят онлайн-занятия",
  subtitle: "Подробный ответ на главный вопрос родителей и взрослых учеников: что конкретно происходит до, во время и после каждого урока.",
  stepsTitle: "Путь ученика от первого знакомства до результата",
  toolkitsTitle: "Инструменты и платформы уроков"
};

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />,
  FileText: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />,
  Monitor: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />,
  CheckSquare: <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />,
  MessageCircle: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />,
  TrendingUp: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
  Gamepad2: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
  Sparkles: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
  Volume2: <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
};

interface MobileStepAccordionItemProps {
  step: LessonStep;
  icon: React.ReactNode;
}

const MobileStepAccordionItem: React.FC<MobileStepAccordionItemProps> = ({ step, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border-2 border-purple-100/90 shadow-2xs hover:border-purple-200 transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full min-h-[52px] p-3 sm:p-4 flex items-center justify-between gap-3 text-left cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-purple-700">
            {icon}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-extrabold text-[11px] text-purple-600 tracking-wider uppercase leading-none mb-1">
              0{step.stepNumber}
            </span>
            <span className="font-heading font-bold text-slate-900 text-sm leading-snug group-hover:text-purple-700 transition-colors">
              {step.title}
            </span>
          </div>
        </div>

        <div className="w-7 h-7 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 text-purple-700 group-hover:bg-purple-100 transition-colors">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ease-in-out shrink-0 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Expandable Content with smooth grid transition and zero scrollbars */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-3.5 pb-4 pt-1 space-y-3 border-t border-purple-100/70 text-slate-700">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {step.description}
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-700">
              {step.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Lessons: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-16 py-6 sm:py-8 md:py-10">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2 sm:space-y-3 md:space-y-4">
        <Badge variant="purple">{pageContent.badge}</Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-4xl lg:text-5xl leading-tight">
          {pageContent.title}
        </h1>
        <p className="text-slate-600 text-xs sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {pageContent.subtitle}
        </p>
      </section>

      {/* Steps Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 md:space-y-10">
        <div className="text-center">
          <h2 className="font-heading font-bold text-slate-900 text-xl sm:text-2xl md:text-3xl">
            {pageContent.stepsTitle}
          </h2>
        </div>

        {/* 1. Mobile Accordion (< md) */}
        <div className="md:hidden space-y-2.5">
          {lessonSteps.map((s) => (
            <MobileStepAccordionItem
              key={s.stepNumber}
              step={s}
              icon={iconMap[s.iconName] || <Monitor className="w-5 h-5 text-purple-700" />}
            />
          ))}
        </div>

        {/* 2. Desktop Cards Grid (md: and above, 100% original cards) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonSteps.map((s) => (
            <Card key={s.stepNumber} variant="white" className="space-y-4 border-purple-100 relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                  {iconMap[s.iconName] || <Monitor className="w-6 h-6 text-purple-700" />}
                </div>
                <span className="font-heading font-extrabold text-2xl text-purple-300">
                  0{s.stepNumber}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                {s.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <LessonGallery />

      {/* Toolkit */}
      <section className="bg-white py-10 sm:py-12 md:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl">
              {pageContent.toolkitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessonToolkits.map((t, idx) => (
              <Card key={idx} variant="white" className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  {iconMap[t.icon] || <Sparkles className="w-5 h-5 text-amber-700" />}
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-base">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
};
