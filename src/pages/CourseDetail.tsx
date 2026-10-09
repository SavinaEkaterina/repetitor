import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, Users, BookOpen, Sparkles } from 'lucide-react';
import { authorCoursesList, coursesPageContent } from '../data/courses';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ContactForm } from '../components/forms/ContactForm';

export const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = authorCoursesList.find(c => c.slug === slug) || authorCoursesList[0];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back link */}
      <div>
        <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Все авторские курсы</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="bg-purple-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="amber">{course.badge}</Badge>
          <span className="text-xs bg-purple-800 text-purple-200 px-3 py-1 rounded-full font-semibold">
            Аудитория: {course.ageGroup}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl">
          {course.title}
        </h1>

        <p className="text-purple-200 text-lg sm:text-xl font-medium max-w-3xl">
          {course.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-800/80 text-xs sm:text-sm text-purple-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Длительность: {course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Формат: {course.format}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Расписание: {course.schedule}</span>
          </div>
        </div>
      </div>

      {/* Program Modules */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl">
            {coursesPageContent.programTitle}
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            {coursesPageContent.programSubtitle}
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {course.program.map((mod, idx) => (
            <Card key={idx} variant="white" className="space-y-3 border-purple-100">
              <h3 className="font-heading font-bold text-slate-900 text-lg text-purple-900">
                {mod.moduleTitle}
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {mod.topics.map((t, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        <ContactForm defaultDirection={`Авторский курс: ${course.title}`} />
      </div>

    </div>
  );
};
