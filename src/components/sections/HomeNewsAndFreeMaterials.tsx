import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, Gift, BookOpen, Clock } from 'lucide-react';
import { blogPostsList } from '../../data/blog';
import { Badge } from '../ui/Badge';
import { HomeSectionAccordion } from '../ui/HomeSectionAccordion';
import homeContent from '../../content/home.json';

export const HomeNewsAndFreeMaterials: React.FC = () => {
  const { newsAndFree } = homeContent;
  const latestCount = newsAndFree.latestNewsCount || 2;
  const latestPosts = blogPostsList.slice(0, latestCount);

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white border-b border-purple-100/60 h-auto overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto overflow-visible">
        
        {/* ======================================================== */}
        {/* A. MOBILE ACCORDION VIEW (< lg)                           */}
        {/* ======================================================== */}
        <div className="lg:hidden space-y-3.5">
          
          {/* 1. Accordion: НОВОСТИ И ПОЛЕЗНЫЕ МАТЕРИАЛЫ */}
          <HomeSectionAccordion
            id="mobile-home-news"
            icon={<Newspaper className="w-5 h-5 text-purple-700" />}
            title={newsAndFree.newsSectionTitle || "НОВОСТИ И ПОЛЕЗНЫЕ МАТЕРИАЛЫ"}
            subtitle={newsAndFree.newsSectionSubtitle || "Статьи, разборы правил и методические советы"}
            badge={newsAndFree.newsBadge || "Блог"}
          >
            <div className="space-y-4 pt-3">
              {/* Header with All News Link */}
              <div className="flex items-center justify-between gap-2 border-b border-purple-100 pb-2.5">
                <span className="text-xs font-bold text-slate-800">
                  {newsAndFree.recentPostsTitle || "Свежие публикации:"}
                </span>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                >
                  <span>{newsAndFree.allNewsText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Cards List */}
              <div className="space-y-3">
                {latestPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-slate-50/80 rounded-2xl p-3.5 border border-purple-100/70 space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500 gap-2">
                      <Badge variant="purple" size="sm">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug group-hover:text-purple-700 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.summary}
                    </p>

                    <div className="pt-1 flex justify-end">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                      >
                        <span>{newsAndFree.readMoreText || "Читать"}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HomeSectionAccordion>

          {/* 2. Accordion: БЕСПЛАТНЫЕ МАТЕРИАЛЫ */}
          <HomeSectionAccordion
            id="mobile-home-free"
            icon={<Gift className="w-5 h-5 text-amber-700" />}
            iconBgColor="bg-amber-100 text-amber-700"
            borderVariant="amber"
            title={newsAndFree.freeSectionTitle || "БЕСПЛАТНЫЕ МАТЕРИАЛЫ"}
            subtitle={newsAndFree.freeSectionSubtitle || "Гайды, памятки и вводные уроки для самообучения"}
            badge={newsAndFree.freeCoursesBadge}
          >
            <div className="space-y-4 pt-3">
              <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-purple-700 rounded-2xl p-4 text-white space-y-3 relative overflow-hidden shadow-sm">
                <div className="space-y-1.5 relative z-10">
                  <h3 className="font-heading font-extrabold text-lg text-white leading-tight">
                    {newsAndFree.freeCoursesTitle}
                  </h3>
                  <p className="text-amber-50 text-xs leading-relaxed">
                    {newsAndFree.freeCoursesDescription}
                  </p>
                </div>

                <div className="pt-1 relative z-10">
                  <Link
                    to={newsAndFree.freeCoursesHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-amber-50 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{newsAndFree.freeCoursesButtonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </HomeSectionAccordion>

        </div>

        {/* ======================================================== */}
        {/* B. DESKTOP VIEW (lg: and above, 100% original 2-column)   */}
        {/* ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch h-auto overflow-visible">
          
          {/* Left Column: News & Useful Materials (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-purple-100/80 flex flex-col justify-between space-y-5 h-auto max-h-none overflow-visible">
            
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-purple-100 pb-3.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                  <Newspaper className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-extrabold text-slate-900 text-xl sm:text-2xl tracking-tight">
                  {newsAndFree.newsTitle}
                </h2>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors shrink-0"
              >
                <span>{newsAndFree.allNewsText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Compact List of Latest Posts */}
            <div className="space-y-3.5 h-auto max-h-none overflow-visible">
              {latestPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-4 border border-purple-100/70 shadow-2xs hover:shadow-sm transition-all space-y-2 group h-auto max-h-none overflow-visible"
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-500 gap-2">
                    <Badge variant="purple" size="sm">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-purple-700 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="pt-1 flex justify-end">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                    >
                      <span>{newsAndFree.readMoreText || "Читать"}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Free Courses Banner (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-500 via-amber-600 to-purple-700 rounded-3xl p-6 sm:p-7 text-white shadow-lg relative overflow-hidden flex flex-col justify-between space-y-6 border border-amber-400/30 h-auto max-h-none">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3.5 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-amber-100 border border-white/30">
                <Gift className="w-3.5 h-3.5 text-amber-200" />
                <span>{newsAndFree.freeCoursesBadge}</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                {newsAndFree.freeCoursesTitle}
              </h2>

              <p className="text-amber-50 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                {newsAndFree.freeCoursesDescription}
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                to={newsAndFree.freeCoursesHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-amber-50 text-slate-900 font-extrabold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{newsAndFree.freeCoursesButtonText}</span>
                <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
