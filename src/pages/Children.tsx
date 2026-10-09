import React from 'react';
import { Sparkles, BookOpen, GraduationCap, CheckCircle2, ArrowRight, HeartHandshake, Smile, Monitor } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/forms/ContactForm';

import childrenContent from '../content/children.json';
import programsContent from '../content/programs.json';

const overviewIconMap: Record<string, React.ReactNode> = {
  Smile: <Smile className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />
};

export const Children: React.FC = () => {
  const kidsPrograms = (programsContent.items as any[]).filter(
    (p) => (p.isKidsFriendly || ['school-preparation', 'school-english', 'oge'].includes(p.id)) && p.published !== false && p.visible !== false
  );

  return (
    <div className="space-y-16 py-10">
      
      {/* 1. Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden shadow-md">
          {/* Subtle Glow Background Accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <Badge variant="amber" icon={<GraduationCap className="w-4 h-4" />}>
              {childrenContent.badge}
            </Badge>
            <span className="text-xs font-semibold bg-purple-800/90 text-purple-200 px-3 py-1 rounded-full border border-purple-700/60">
              {childrenContent.badgeSubtitle}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight relative z-10">
            {childrenContent.title}
          </h1>

          <p className="text-purple-100 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed relative z-10">
            {childrenContent.description}
          </p>
        </div>
      </section>

      {/* 2. Overview: Who It's For & Key Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
            {childrenContent.tasksBadge}
          </Badge>
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl lg:text-4xl">
            {childrenContent.tasksTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {childrenContent.tasksDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(childrenContent.overviewCards || []).map((card: any) => (
            <Card key={card.id} variant="white" className="space-y-3 border-purple-100">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                {overviewIconMap[card.iconName] || <Smile className="w-5 h-5" />}
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. CORE PROGRAM SELECTION HUB BLOCK */}
      <section id="select-program" className="bg-purple-50/60 py-16 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="purple">{childrenContent.programsHub?.badge || childrenContent.subprogramsTitle || "Выберите программу"}</Badge>
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
              {childrenContent.programsHub?.title || childrenContent.subprogramsTitle || "Программы детского направления"}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {childrenContent.programsHub?.subtitle || childrenContent.subprogramsSubtitle || "Выберите нужную программу, чтобы перейти к подробному описанию формата, целей и результатов обучения:"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kidsPrograms.map((prog: any) => (
              <div
                key={prog.id}
                className="bg-white rounded-3xl p-7 border-2 border-purple-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                    {prog.badge}
                  </span>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl group-hover:text-purple-700 transition-colors">
                      {prog.shortTitle || prog.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {prog.shortDesc || prog.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
                    {(prog.highlights || []).slice(0, 3).map((item: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-purple-100">
                  <Button
                    to={prog.path}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  >
                    {prog.buttonText || "Подробнее"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Contact Form Section */}
      <section className="max-w-3xl mx-auto px-4">
        <ContactForm defaultDirection="Английский для детей" />
      </section>

    </div>
  );
};
