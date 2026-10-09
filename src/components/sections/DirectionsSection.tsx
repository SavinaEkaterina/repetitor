import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Award, Users, Layers } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const DirectionsSection: React.FC = () => {
  const directions = [
    {
      id: 'school-prep',
      badge1: 'Легкий старт',
      badge2: 'Дошкольники и 1–2 классы',
      title: 'Подготовка к английскому в школе',
      desc: 'Формируем базовое чтение, словарный запас и уверенность до того, как появится школьная программа и оценки.',
      path: '/school-preparation',
    },
    {
      id: 'school-eng',
      badge1: 'Восполнение пробелов',
      badge2: 'Ученики 3–8 классов',
      title: 'Школьный английский / восполнение пробелов',
      desc: 'Находим точечные «дыры» в знаниях, восстанавливаем логику тем, убираем страх перед ответом у доски и ДЗ.',
      path: '/school-english',
    },
    {
      id: 'oge-prep',
      badge1: 'Формат ФИПИ',
      badge2: 'Ученики 8–9 классов',
      title: 'Подготовка к ОГЭ',
      desc: 'Пошаговая подготовка ко всем 5 блокам экзамена: аудирование, чтение, грамматика, письмо и устная часть.',
      path: '/oge',
    },
  ];

  return (
    <section id="directions" className="py-16 sm:py-20 bg-white border-b border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
            Какая задача стоит перед вами?
          </Badge>
          <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-4xl tracking-tight">
            Выберите подходящее направление обучения
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Посмотрите, с какими задачами я помогаю детям, школьникам, подросткам и взрослым.
          </p>
        </div>

        {/* 3 Main Directions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {directions.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-purple-200/90 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-extrabold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                    {item.badge1}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.badge2}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-slate-900 text-xl group-hover:text-purple-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-6 border-t border-purple-100/80">
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm text-purple-700 group-hover:text-purple-900 transition-colors"
                >
                  <span>Перейти к направлению</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Directions Bar for Adults & Courses */}
        <div className="p-4 sm:p-5 bg-purple-50/70 rounded-2xl border border-purple-100/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                Также доступны направления для взрослых и спецкурсы
              </div>
              <p className="text-xs text-slate-600">
                Разговорный английский с любого уровня и авторские тематические интенсивы.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/adults"
              className="px-3.5 py-2 bg-white hover:bg-purple-100 text-purple-900 font-bold text-xs rounded-xl border border-purple-200 transition-colors"
            >
              Взрослые
            </Link>
            <Link
              to="/courses"
              className="px-3.5 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Авторские курсы
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
