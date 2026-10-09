import React from 'react';
import { LessonGallery } from './LessonGallery';

export const LessonPreviewSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80">
      <LessonGallery />
    </section>
  );
};
