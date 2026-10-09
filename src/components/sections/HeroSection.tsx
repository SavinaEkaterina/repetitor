import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, Users, Laptop, Star, User, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { TeacherAvatar } from '../mascots/TeacherAvatar';
import homeContent from '../../content/home.json';
import siteContent from '../../content/site.json';

export const HeroSection: React.FC = () => {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden pt-2 sm:pt-3 lg:pt-4 pb-12 lg:pb-16 bg-gradient-to-b from-purple-50/90 via-white to-slate-50 h-auto">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-auto">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-auto">
          
          {/* Left Column: Victoria's Positioning & Statement */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-amber-500" />}>
                {hero.badge1}
              </Badge>
              <Badge variant="amber" icon={<Star className="w-3.5 h-3.5 text-amber-600" />}>
                {hero.badge2}
              </Badge>
            </div>

            {/* Headline H1 */}
            <h1 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] tracking-tight break-words">
              {hero.h1Line1} <br className="hidden sm:inline" />
              <span className="text-purple-700 underline decoration-purple-200 decoration-wavy decoration-2">
                {hero.h1Highlight}
              </span>{' '}
              <br className="hidden sm:inline" />
              <span>{hero.h1Line2}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

          </div>

          {/* Right Column: Teacher Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-full sm:max-w-md bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 border-2 border-purple-100 shadow-xl shadow-purple-100/40 relative overflow-hidden space-y-4 h-auto max-h-none">
              
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-200/50 rounded-full blur-2xl pointer-events-none" />

              {/* Tag Header */}
              <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 rounded-full border border-purple-100/80 text-xs font-bold text-purple-900 truncate">
                  <Laptop className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  <span className="truncate">{hero.cardTag1}</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-100 text-[11px] font-bold text-amber-800 shrink-0">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                  <span>{hero.cardTag2}</span>
                </div>
              </div>

              {/* Photo Avatar */}
              <div className="relative pt-1">
                <TeacherAvatar 
                  size="lg" 
                  showBadge={true} 
                 imageUrl={`${import.meta.env.BASE_URL}images/victoria-slavoladova.webp`}
                  altText={`${siteContent.fullName} — ${siteContent.role}`}
                />
              </div>

              {/* Name & Title */}
              <div className="text-center pt-1 space-y-1">
                <h2 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl leading-tight">
                  {siteContent.shortName} <br className="hidden sm:inline" />{siteContent.surname}
                </h2>
                <p className="text-purple-700 font-semibold text-xs sm:text-sm">
                  {siteContent.role}
                </p>
              </div>

              {/* Interactive Quick-Action Links */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-left">
                <Link
                  to="/about"
                  className="flex items-center justify-between gap-1.5 p-2.5 sm:p-3 bg-purple-50/80 hover:bg-purple-100/90 active:bg-purple-200 text-purple-950 rounded-2xl border border-purple-200/80 shadow-xs hover:shadow-md transition-all duration-200 group/btn cursor-pointer min-w-0"
                  aria-label="Страница Обо мне"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <User className="w-4 h-4 text-purple-700 shrink-0" />
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 group-hover/btn:text-purple-900 transition-colors truncate">
                      Обо мне
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600 group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
                </Link>

                <Link
                  to="/reviews"
                  className="flex items-center justify-between gap-1.5 p-2.5 sm:p-3 bg-purple-50/80 hover:bg-purple-100/90 active:bg-purple-200 text-purple-950 rounded-2xl border border-purple-200/80 shadow-xs hover:shadow-md transition-all duration-200 group/btn cursor-pointer min-w-0"
                  aria-label="Страница отзывов учеников"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 group-hover/btn:text-purple-900 transition-colors truncate">
                      Отзывы учеников
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600 group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
