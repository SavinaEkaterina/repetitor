import React, { useState, useEffect } from 'react';
import { Award, GraduationCap, Sparkles, X, ArrowRight } from 'lucide-react';
import { teacherData } from '../data/teacher';
import { TeacherAvatar } from '../components/mascots/TeacherAvatar';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';

import aboutContent from '../content/about.json';

interface QualificationDoc {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  objectPosition?: string;
}

const higherEducationDocs: QualificationDoc[] = aboutContent.higherEducationDocs || [];
const qualificationDocs: QualificationDoc[] = aboutContent.qualificationDocs || [];

export const About: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<QualificationDoc | null>(null);

  // Lock body scroll and listen for Escape key when lightbox is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDoc(null);
      }
    };

    if (activeDoc) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDoc]);

  return (
    <div className="space-y-16 py-10">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <TeacherAvatar 
              size="xl" 
              showBadge={true} 
              imageUrl="/images/victoria-slavoladova.webp" 
              altText="Виктория Сергеевна Тетерядченко — Преподаватель английского языка" 
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
              {aboutContent.badge || "Личная страница преподавателя"}
            </Badge>

            <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {teacherData.fullName}
            </h1>

            <p className="text-xl font-semibold text-purple-700">
              {teacherData.role} • 6+ лет педагогической практики
            </p>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {teacherData.tagline}
            </p>

            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {teacherData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2">
              <Button to="/contacts" variant="primary" size="md">
                Связаться со мной
              </Button>
            </div>

          </div>

        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="purple">{aboutContent.educationBadge || "Образование и сертификаты"}</Badge>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">
              {aboutContent.educationTitle || "Профессиональная квалификация"}
            </h2>
            <p className="text-slate-600 text-base">
              {aboutContent.educationSubtitle || "Официальное педагогическое и лингвистическое образование, регулярное повышение квалификации."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Category 1: Higher Education (5 cols) */}
            <Card variant="white" className="lg:col-span-5 border-purple-200 space-y-5 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                      {aboutContent.higherEduCategory || "Высшее образование"}
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 text-lg leading-snug">
                      {aboutContent.higherEduTitle || "Высшее педагогическое / лингвистическое образование"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {teacherData.education[0].institution} — диплом по направлению лингвистики и методики преподавания.
                </p>
              </div>

              {/* Document Preview Box */}
              <div className="space-y-3 pt-2">
                {higherEducationDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setActiveDoc(doc)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Открыть документ ${doc.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveDoc(doc);
                      }
                    }}
                    className="group relative w-full rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col p-3 cursor-pointer"
                  >
                    {/* Crisp Fragment Thumbnail */}
                    <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-white border border-slate-200/80">
                      <img
                        src={doc.src}
                        alt={doc.title}
                        style={{ objectPosition: doc.objectPosition || 'center top' }}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="pt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base group-hover:text-purple-700 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {doc.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 group-hover:text-purple-900 shrink-0 pt-1 sm:pt-0">
                        <span>Посмотреть полностью</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <span className="text-xs text-slate-500 font-medium">
                    {aboutContent.higherEduDocNote || "Нажмите на документ для полноэкранного просмотра"}
                  </span>
                </div>
              </div>
            </Card>

            {/* Category 2: Qualifications & Certificates (7 cols) */}
            <Card variant="white" className="lg:col-span-7 border-purple-200 space-y-5 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      {aboutContent.qualificationsCategory || "Квалификация и сертификаты"}
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 text-lg leading-snug">
                      {aboutContent.qualificationsTitle || "Современные методики преподавания и подходы к обучению"}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {aboutContent.qualificationsSubtitle || "Курсы повышения квалификации, профессиональная переподготовка, международные сертификаты и официальные тесты Oxford."}
                </p>
              </div>

              {/* 2x2 Grid of Certificate Documents */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {qualificationDocs.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => setActiveDoc(doc)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Открыть документ ${doc.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveDoc(doc);
                        }
                      }}
                      className="group relative w-full rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between p-3 cursor-pointer"
                    >
                      {/* Crisp Fragment Thumbnail */}
                      <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-white border border-slate-200/80">
                        <img
                          src={doc.src}
                          alt={doc.title}
                          style={{ objectPosition: doc.objectPosition || 'center top' }}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="pt-2.5 flex flex-col justify-between gap-2 flex-1">
                        <p className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                          {doc.title}
                        </p>

                        <div className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 group-hover:text-purple-900 pt-1.5 border-t border-slate-200/70">
                          <span>Посмотреть полностью</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-1">
                  <span className="text-xs text-slate-500 font-medium">
                    {aboutContent.qualificationsDocNote || "Нажмите на любой документ для просмотра в высоком разрешении"}
                  </span>
                </div>
              </div>
            </Card>

          </div>

        </div>
      </section>

      {/* Lightbox / Modal for Document Viewing */}
      {activeDoc && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveDoc(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeDoc.title}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col border border-purple-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Title & Fixed Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 shrink-0 pr-12">
              <div className="space-y-0.5">
                <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider">
                  {activeDoc.category}
                </span>
                <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-snug">
                  {activeDoc.title}
                </h4>
              </div>

              {/* Close Button - Fixed in Header */}
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-2xl bg-slate-100 hover:bg-purple-100 active:bg-purple-200 text-slate-700 hover:text-purple-950 flex items-center justify-center transition-colors cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Закрыть модальное окно"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Document Viewing Area */}
            <div className="flex-1 w-full overflow-y-auto my-3 p-2 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center min-h-[300px]">
              <img
                src={activeDoc.src}
                alt={activeDoc.title}
                className="w-auto max-w-full h-auto rounded-lg shadow-sm mx-auto my-auto block"
              />
            </div>

            {/* Modal Footer Description */}
            {activeDoc.description && (
              <div className="text-center pt-2 border-t border-slate-100 shrink-0">
                <p className="text-xs sm:text-sm text-slate-600">
                  {activeDoc.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pedagogical Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="purple">{aboutContent.philosophyBadge || "Философия преподавания"}</Badge>
          <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">
            {aboutContent.philosophyTitle || "На чем строится каждый урок"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherData.principles.map((p, idx) => (
            <Card key={idx} variant="purple" className="space-y-3">
              <h3 className="font-heading font-bold text-purple-900 text-lg">
                {p.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {p.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />

    </div>
  );
};
