import React from 'react';
import { Sparkles, Check, BookOpen, Clock } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/forms/ContactForm';
import { isPathPublished } from '../data/navigation';

import programsContent from '../content/programs.json';

const programData = (programsContent.items as any[]).find((p) => p.id === 'school-preparation') || {
  badge: "1–2 классы (6–8 лет)",
  badgeSubtitle: "Детское направление",
  title: "Подготовка к английскому в школе",
  description: "Спокойный и бережный старт без школьного стресса, слез и путаницы в алфавите. Готовим ребенка к школьному предмету заранее.",
  targetTitle: "Кому подходят эти занятия",
  targetSubtitle: "Сценарии, когда подготовка до второго класса спасает от школьных проблем.",
  targetSituations: [],
  programBadge: "Что изучаем на занятиях",
  programTitle: "Программа дошкольной и школьной подготовки",
  programModules: []
};

export const SchoolPreparation: React.FC = () => {
  const isPublished = isPathPublished('/school-preparation');

  if (!isPublished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8" />
        </div>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl">
          {programData.title}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
          Набор на это направление временно приостановлен.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button to="/children" variant="primary">Смотреть доступные программы</Button>
          <Button to="/contacts" variant="outline">Обсудить обучение</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-10">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden shadow-md">
          {/* Subtle Glow Background Accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <Badge variant="amber" icon={<Sparkles className="w-4 h-4" />}>
              {programData.badge}
            </Badge>
            <span className="text-xs font-semibold bg-purple-800/90 text-purple-200 px-3 py-1 rounded-full border border-purple-700/60">
              {programData.badgeSubtitle}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight relative z-10">
            {programData.title}
          </h1>

          <p className="text-purple-100 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed relative z-10">
            {programData.description}
          </p>
        </div>
      </section>

      {/* Target Situations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl">
            {programData.targetTitle}
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            {programData.targetSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(programData.targetSituations || []).map((sit: any, idx: number) => (
            <Card key={idx} variant="white" className="space-y-2">
              <h3 className="font-heading font-bold text-amber-900 text-base">
                {sit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {sit.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="purple">{programData.programBadge}</Badge>
            <h2 className="font-heading font-bold text-slate-900 text-3xl">
              {programData.programTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(programData.programModules || []).map((mod: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-heading font-bold text-slate-900 text-lg flex items-center gap-2">
                  {mod.iconName === 'BookOpen' ? <BookOpen className="w-5 h-5 text-purple-600" /> : <Sparkles className="w-5 h-5 text-amber-600" />}
                  <span>{mod.title}</span>
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {(mod.items || []).map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4">
        <ContactForm defaultDirection="Подготовка к школе" />
      </section>

    </div>
  );
};
