import React from 'react';
import { CheckCircle2, Smile, ShieldCheck } from 'lucide-react';

export const OutcomesSection: React.FC = () => {
  const childOutcomes = [
    'Уверенность при ответе у доски и на школьных уроках',
    'Понимание грамматических правил вместо заучивания',
    'Снятие языкового барьера и страха сделать ошибку',
    'Интерес к изучению языка через наглядные материалы',
  ];

  const parentOutcomes = [
    'Спокойствие за выполнение домашних заданий и оценки',
    'Прозрачность обучения и регулярные отклики о прогрессе',
    'Экономия вечернего времени на объяснение школьных тем',
    'Понятные рекомендации от квалифицированного преподавателя',
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Что получают ребёнок и родитель
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Результат работы — это не только оценки, но и спокойствие в семье и уверенность в знаниях.
          </p>
        </div>

        {/* 2 Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Для ребёнка */}
          <div className="bg-gradient-to-br from-purple-50/80 via-white to-purple-50/40 rounded-3xl p-6 sm:p-8 border border-purple-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl">
                  Для ребёнка
                </h3>
                <p className="text-xs text-purple-700 font-semibold mt-0.5">
                  Уверенность и интерес к учёбе
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
              {childOutcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Для родителя */}
          <div className="bg-gradient-to-br from-indigo-50/80 via-white to-indigo-50/40 rounded-3xl p-6 sm:p-8 border border-indigo-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl">
                  Для родителя
                </h3>
                <p className="text-xs text-indigo-700 font-semibold mt-0.5">
                  Спокойствие и обратная связь
                </p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
              {parentOutcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
