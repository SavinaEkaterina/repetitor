import React, { useState } from 'react';
import { Sparkles, BookOpen, ArrowRight, Gift, FileText, Video, X, Clock } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';
import { isPathPublished } from '../data/navigation';
import freeCoursesContent from '../content/free-courses.json';

interface FreeMaterialItem {
  id: string;
  category?: string;
  tag?: string;
  label?: string;
  type?: string;
  title: string;
  description: string;
  free?: boolean | string;
  downloadUrl?: string;
  buttonText?: string;
  iconName?: string;
  published?: boolean;
}

export const FreeCourses: React.FC = () => {
  const [noticeModal, setNoticeModal] = useState<string | null>(null);

  const isPublished = isPathPublished('/free-courses');

  if (!isPublished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <Clock className="w-8 h-8" />
        </div>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl">
          {freeCoursesContent.headingTitle}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
          Раздел бесплатных материалов временно закрыт.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button to="/pricing" variant="primary">Смотреть форматы и стоимость</Button>
          <Button to="/contacts" variant="outline">Обсудить обучение</Button>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-purple-700" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-purple-700" />;
      case 'Video':
        return <Video className="w-5 h-5 text-purple-700" />;
      default:
        return <FileText className="w-5 h-5 text-purple-700" />;
    }
  };

  const freeMaterials: FreeMaterialItem[] = freeCoursesContent.items.filter(
    (item: any) => item.published !== false
  );

  const noticeModalConfig = (freeCoursesContent as any).noticeModal || {
    title: "Материал подготавливается",
    missingUrlText: "Материал подготавливается к публикации и скоро будет доступен для скачивания.",
    fetchErrorText: "Файл подготавливается и появится для скачивания в ближайшее время.",
    confirmButtonText: "Понятно"
  };

  const handleAccessClick = async (e: React.MouseEvent, downloadUrl?: string) => {
    if (!downloadUrl) {
      e.preventDefault();
      setNoticeModal(noticeModalConfig.missingUrlText);
      return;
    }

    try {
      const res = await fetch(downloadUrl, { method: 'HEAD' });
      if (res.ok) {
        // File exists! Allow browser navigation / new tab
        window.open(downloadUrl, '_blank', 'noopener,noreferrer');
        e.preventDefault();
      } else {
        e.preventDefault();
        setNoticeModal(noticeModalConfig.fetchErrorText);
      }
    } catch {
      e.preventDefault();
      setNoticeModal(noticeModalConfig.fetchErrorText);
    }
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="amber" icon={<Gift className="w-4 h-4 text-amber-600" />}>
          {freeCoursesContent.headingBadge}
        </Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl">
          {freeCoursesContent.headingTitle}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {freeCoursesContent.headingSubtitle}
        </p>
      </div>

      {/* Free Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {freeMaterials.map((item) => (
          <Card key={item.id} hoverEffect={true} className="flex flex-col justify-between border-purple-100">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <Badge variant="purple" size="sm">{item.category || item.tag}</Badge>
                <span className="font-medium text-slate-500">{item.label || item.type}</span>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-purple-100/80 flex items-center justify-center shrink-0">
                {getIcon(item.iconName || 'FileText')}
              </div>

              <h2 className="font-heading font-bold text-slate-900 text-xl leading-snug">
                {item.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 shrink-0">
                {item.free === false ? 'Материал' : 'Бесплатно'}
              </span>
              <Button
                to={item.downloadUrl || '#'}
                isExternal={true}
                onClick={(e) => handleAccessClick(e, item.downloadUrl)}
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {item.buttonText || 'Скачать бесплатно'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Info Banner */}
      <div className="p-6 sm:p-8 bg-purple-50 rounded-3xl border border-purple-200/80 text-center max-w-4xl mx-auto space-y-4">
        <h3 className="font-heading font-bold text-purple-950 text-xl">
          {freeCoursesContent.infoBanner.title}
        </h3>
        <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto">
          {freeCoursesContent.infoBanner.subtitle}
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <Button to={freeCoursesContent.infoBanner.primaryButtonHref} variant="primary">
            {freeCoursesContent.infoBanner.primaryButtonText}
          </Button>
          <Button to={freeCoursesContent.infoBanner.secondaryButtonHref} variant="outline">
            {freeCoursesContent.infoBanner.secondaryButtonText}
          </Button>
        </div>
      </div>

      {/* Notice Modal when file is missing */}
      {noticeModal && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setNoticeModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-purple-100 shadow-2xl space-y-4 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setNoticeModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
              {noticeModalConfig.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {noticeModal}
            </p>

            <div className="pt-2">
              <Button variant="primary" size="sm" onClick={() => setNoticeModal(null)} fullWidth>
                {noticeModalConfig.confirmButtonText}
              </Button>
            </div>
          </div>
        </div>
      )}

      <CTASection />

    </div>
  );
};
