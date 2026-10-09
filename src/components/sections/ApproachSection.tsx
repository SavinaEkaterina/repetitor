import React from 'react';
import { HeartHandshake, Compass, Sparkles, Target, MessageSquare, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ApproachSection: React.FC = () => {
  const principles = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-600" />,
      title: "Спокойствие и поддержка",
      description: "Никаких криков и публичного стыда. Ошибка — это нормальный элемент учебы, который помогает понять, что именно нужно повторить."
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      title: "Понятная система правил",
      description: "Вместо хаотичной зубрежки — наглядные схемы. Ребенок понимает 'почему именно так', а не заучивает механически."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      title: "Интерактивная наглядность",
      description: "Интерактивная онлайн-доска, авторские наглядные карточки и игровые задания поддерживают высокую вовлеченность с первой минуты."
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Реальная цель каждого урока",
      description: "Каждое занятие решает конкретную задачу: научиться задавать вопросы, убрать ошибку в временах или уверенно прочитать текст."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      title: "Регулярная обратная связь",
      description: "Родители всегда в курсе успехов и точек роста ребенка благодаря развернутым отчетам после уроков."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="purple">Методический подход</Badge>
          <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">
            Как строится процесс обучения
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Обучение строится на принципах системности, наглядности и доброжелательной дисциплины.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <Card key={idx} variant="white" className="space-y-3 border-purple-100">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg">
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {p.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
