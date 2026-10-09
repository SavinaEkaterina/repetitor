import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/forms/ContactForm';
import { isPathPublished } from '../data/navigation';

import programsContent from '../content/programs.json';

const programData = (programsContent.items as any[]).find((p) => p.id === 'school-english') || {
  badge: "2–8 классы (8–14 лет)",
  badgeSubtitle: "Школьная программа и уверенность",
  title: "Английский язык для школьников",
  description: "Уверенность у школьной доски, понятное объяснение сложных правил, устранение пробелов и рост успеваемости без зубрёжки.",
  targetTitle: "Какие задачи мы решаем",
  targetSubtitle: "Помогаем школьнику перестать бояться английских уроков.",
  tasks: [],
  formatBadge: "Формат и стоимость",
  formatTitle: "Организация учебного процесса",
  formats: []
};

export const SchoolEnglish: React.FC = () => {
  const isPublished = isPathPublished('/school-english');

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
        <div className="bg-purple-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="amber" icon={<BookOpen className="w-4 h-4" />}>
              {programData.badge}
            </Badge>
            <span className="text-xs font-semibold bg-purple-800 text-purple-200 px-3 py-1 rounded-full">
              {programData.badgeSubtitle}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
            {programData.title}
          </h1>

          <p className="text-purple-200 text-lg sm:text-xl font-medium max-w-3xl">
            {programData.description}
          </p>
        </div>
      </section>

      {/* Main Problems Solved */}
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
          {(programData.tasks || []).map((task: any, idx: number) => (
            <Card key={idx} variant="white" className="space-y-2">
              <h3 className="font-heading font-bold text-purple-900 text-base">
                {task.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {task.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Formats & Price Notice */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="purple">{programData.formatBadge}</Badge>
            <h2 className="font-heading font-bold text-slate-900 text-3xl mt-2">
              {programData.formatTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {(programData.formats || []).map((fmt: any, idx: number) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  {fmt.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {fmt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4">
        <ContactForm defaultDirection="Школьный английский" />
      </section>

    </div>
  );
};
