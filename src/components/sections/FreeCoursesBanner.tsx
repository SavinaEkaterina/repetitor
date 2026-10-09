import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const FreeCoursesBanner: React.FC = () => {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-purple-700 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Text Info */}
          <div className="space-y-2 text-center md:text-left max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-amber-100 border border-white/30">
              <Gift className="w-3.5 h-3.5 text-amber-200" />
              <span>Бесплатные материалы</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Учи английский бесплатно
            </h2>

            <p className="text-amber-50 text-sm sm:text-base font-medium leading-relaxed">
              Попробуйте бесплатные памятки, полезные гайды и вводные уроки от Виктории Славоладовой перед началом основного обучения.
            </p>
          </div>

          {/* Action Button */}
          <div className="shrink-0 relative z-10">
            <Link
              to="/free-courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-amber-50 text-slate-900 font-extrabold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-amber-600" />
              <span>Перейти к бесплатным курсам</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
