import React from 'react';
import { Sparkles } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      number: '1',
      title: 'Понятное объяснение',
      description: 'Без сложной академической терминологии. Объяснение через логику, наглядные карточки и живые примеры.',
    },
    {
      number: '2',
      title: 'Пошаговая практика',
      description: 'Закрепление полученного знания через интерактивные упражнения и диалоги. От простого к самостоятельному навыку.',
    },
    {
      number: '3',
      title: 'Поддержка и связь',
      description: 'Позитивная обратная связь. Ребёнок не боится совершить ошибку, а видит свой реальный регулярный прогресс.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Outer Container Container matching Reference 1 structure */}
        <div className="bg-slate-50/90 border border-purple-100/90 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10 shadow-xs">
          
          {/* Header inside container */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
              Принципы обучения
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Три кита, на которых строится каждый урок Виктории Славоладовой
            </p>
          </div>

          {/* 3 Principles Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-purple-100/90 shadow-2xs hover:shadow-sm transition-all duration-200 space-y-4"
              >
                {/* Number Badge Pill */}
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 font-heading font-extrabold text-lg flex items-center justify-center">
                  {p.number}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
