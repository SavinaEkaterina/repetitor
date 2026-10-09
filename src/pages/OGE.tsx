import React from 'react';
import { GraduationCap, Users, Clock, ShieldCheck } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/forms/ContactForm';
import { isPathPublished } from '../data/navigation';

import programsContent from '../content/programs.json';

const microFactIcons: Record<string, React.ReactNode> = {
  Users: <Users className="w-4 h-4 text-purple-300 shrink-0" />,
  Clock: <Clock className="w-4 h-4 text-purple-300 shrink-0" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-purple-300 shrink-0" />
};

const programData = (programsContent.items as any[]).find((p) => p.id === 'oge') || {
  badge: "Подготовка к ОГЭ (9 класс)",
  badgeSubtitle: "Мини-группы строго 4–6 человек",
  title: "Комплексная подготовка к ОГЭ по английскому",
  description: "Системная отработка всех блоков экзамена без паники и стресса. Индивидуальная проверка письменных и устных работ каждого ученика.",
  microFacts: [
    { label: "Группы: 4–6 человек (макс. 6)", iconName: "Users" },
    { label: "Длительность: 60 минут", iconName: "Clock" },
    { label: "Формат: Онлайн-занятия", iconName: "ShieldCheck" }
  ],
  structureBadge: "Структура подготовки",
  structureTitle: "Разбор всех 6 блоков экзамена ОГЭ",
  structureSubtitle: "Каждому разделу уделяется систематическое внимание с подробным разбором критериев ФИПИ.",
  blocks: []
};

export const OGE: React.FC = () => {
  const isPublished = isPathPublished('/oge');

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
            <Badge variant="amber" icon={<GraduationCap className="w-4 h-4" />}>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-purple-100 font-medium relative z-10">
            {(programData.microFacts || []).map((fact: any, idx: number) => (
              <div key={idx} className="flex items-center gap-2 bg-purple-800/70 p-3 rounded-2xl border border-purple-700/60">
                {microFactIcons[fact.iconName] || <Users className="w-4 h-4 text-purple-300 shrink-0" />}
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Examination Blocks Covered */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <Badge variant="purple">{programData.structureBadge}</Badge>
          <h2 className="font-heading font-bold text-slate-900 text-3xl">
            {programData.structureTitle}
          </h2>
          <p className="text-slate-600 text-sm">
            {programData.structureSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(programData.blocks || []).map((block: any) => (
            <Card key={block.id} variant="white" className="space-y-2 border-purple-100">
              <h3 className="font-heading font-bold text-purple-900 text-lg">{block.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {block.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4">
        <ContactForm defaultDirection="Подготовка к ОГЭ" />
      </section>

    </div>
  );
};
