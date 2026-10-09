import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Sparkles, Check, Clock } from 'lucide-react';
import { authorCoursesList, coursesPageContent } from '../data/courses';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { isPathPublished } from '../data/navigation';

export const Courses: React.FC = () => {
  const isPublished = isPathPublished('/courses');

  if (!isPublished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8" />
        </div>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl">
          {coursesPageContent.headingTitle}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
          Раздел авторских курсов временно закрыт.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button to="/pricing" variant="primary">Смотреть форматы и стоимость</Button>
          <Button to="/contacts" variant="outline">Обсудить обучение</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="rose" icon={<Sparkles className="w-4 h-4" />}>
          {coursesPageContent.headingBadge}
        </Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl">
          {coursesPageContent.headingTitle}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {coursesPageContent.headingSubtitle}
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authorCoursesList.map((course) => (
          <Card key={course.id} hoverEffect={true} className="flex flex-col justify-between border-purple-100">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="purple">{course.badge}</Badge>
              </div>

              <h2 className="font-heading font-bold text-slate-900 text-xl">
                {course.title}
              </h2>

              <p className="text-xs font-semibold text-purple-700">
                {course.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="font-bold text-slate-900 mb-1">{coursesPageContent.objectivesTitle}</div>
                {course.objectives.slice(0, 3).map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                {course.duration}
              </span>
              <Button to={`/courses/${course.slug}`} variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Подробнее
              </Button>
            </div>
          </Card>
        ))}
      </div>

    </div>
  );
};
