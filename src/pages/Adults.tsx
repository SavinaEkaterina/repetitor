import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Globe, Shield, MessageSquare, Compass, Sparkles, Clock } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/forms/ContactForm';
import { isPathPublished } from '../data/navigation';

import adultsContent from '../content/adults.json';

const goalIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />
};

export const Adults: React.FC = () => {
  const isPublished = isPathPublished('/adults');

  if (!isPublished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8" />
        </div>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl">
          {adultsContent.title}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
          Набор на это направление временно приостановлен.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button to="/pricing" variant="primary">Смотреть форматы и стоимость</Button>
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
            <Badge variant="amber" icon={<UserCheck className="w-4 h-4" />}>
              {adultsContent.badge}
            </Badge>
            <span className="text-xs font-semibold bg-purple-800/90 text-purple-200 px-3 py-1 rounded-full border border-purple-700/60">
              {adultsContent.badgeSubtitle}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight relative z-10">
            {adultsContent.title}
          </h1>

          <p className="text-purple-100 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed relative z-10">
            {adultsContent.description}
          </p>
        </div>
      </section>

      {/* Adult Learning Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
            {adultsContent.goalsBadge || "Цели и задачи"}
          </Badge>
          <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl">
            {adultsContent.goalsTitle || "Популярные цели взрослых учеников"}
          </h2>
          <p className="text-slate-600 text-sm">
            {adultsContent.goalsSubtitle || "Подстраиваем программу под вашу конкретную жизненную задачу."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(adultsContent.goals || []).map((goal: any) => (
            <Card key={goal.id} variant="white" className="space-y-3 border-purple-100/80 hover:border-purple-200 transition-colors p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                {goalIconMap[goal.iconName] || <Globe className="w-5 h-5" />}
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">
                {goal.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {goal.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CORE FORMAT SELECTION HUB BLOCK */}
      <section id="select-adult-format" className="bg-slate-50/80 py-16 border-y border-purple-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="purple">{adultsContent.formatsBadge || "Выберите формат обучения"}</Badge>
            <h2 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl">
              {adultsContent.formatsTitle || "Доступные форматы и программы"}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {adultsContent.formatsSubtitle || "Выберите подходящий формат взаимодействия — от самостоятельного прохождения спецкурсов до работы с индивидуальной обратной связью:"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(adultsContent.formats || []).map((fmt: any) => (
              <div key={fmt.id} className="bg-white rounded-3xl p-7 border border-purple-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200/60">
                    {fmt.badge}
                  </span>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-slate-900 text-xl group-hover:text-purple-700 transition-colors">
                      {fmt.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {fmt.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  {fmt.buttonHref.startsWith('#') ? (
                    <a
                      href={fmt.buttonHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-2xl transition-colors"
                    >
                      <span>{fmt.buttonText}</span>
                      <MessageSquare className="w-4 h-4 text-purple-200" />
                    </a>
                  ) : (
                    <Link
                      to={fmt.buttonHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm rounded-2xl transition-colors"
                    >
                      <span>{fmt.buttonText}</span>
                      {fmt.id === 'individual' ? (
                        <MessageSquare className="w-4 h-4 text-purple-200" />
                      ) : fmt.id === 'free-courses' ? (
                        <Shield className="w-4 h-4 text-purple-200" />
                      ) : (
                        <Globe className="w-4 h-4 text-purple-200" />
                      )}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Pricing and Schedule Notice */}
      <section className="bg-white py-16 border-y border-purple-100">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-center">
          <Badge variant="purple">{adultsContent.conditionsBadge || "Условия обучения"}</Badge>
          <h2 className="font-heading font-bold text-slate-900 text-3xl">
            {adultsContent.conditionsTitle || "Гибкий график и комфортные условия"}
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            {adultsContent.conditionsDescription || "Уроки проходят в удобное согласованное время. Используются современные аутентичные материалы, подкасты и статьи."}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4">
        <ContactForm defaultDirection="Английский для взрослых" />
      </section>

    </div>
  );
};
