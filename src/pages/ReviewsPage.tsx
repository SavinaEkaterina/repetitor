import React from 'react';
import { reviewsList } from '../data/reviews';
import { Star, Quote } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/sections/CTASection';
import reviewsContent from '../content/reviews.json';

export const ReviewsPage: React.FC = () => {
  const pageContent = reviewsContent.pageContent || {
    badge: "Честные отзывы",
    title: "Отзывы учеников и родителей",
    subtitle: "Отзывы моих учеников и родителей о наших занятиях и результатах."
  };

  return (
    <div className="space-y-12 py-10">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="purple">{pageContent.badge}</Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl">
          {pageContent.title}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {pageContent.subtitle}
        </p>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev, index) => {
            const isLavender = index % 2 === 1;
            return (
              <Card
                key={rev.id}
                variant="white"
                className={`flex flex-col justify-between relative transition-all duration-200 hover:shadow-md p-6 sm:p-7 overflow-hidden ${
                  isLavender
                    ? 'bg-purple-50/80 border-purple-200/90 hover:border-purple-300'
                    : 'bg-white border-purple-100 hover:border-purple-200'
                }`}
              >
                {/* Large Decorative Quote Icon */}
                <Quote className={`w-20 h-20 absolute -top-1 -right-1 pointer-events-none stroke-[1] ${
                  isLavender ? 'text-purple-300/40' : 'text-purple-200/50'
                }`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="purple" size="sm">{rev.roleOrCategory}</Badge>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>5.0</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    «{rev.text}»
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-purple-200/50 flex items-center justify-between text-xs text-slate-500 relative z-10">
                  <span className="font-heading font-bold text-slate-900 text-sm">
                    {rev.authorName}
                  </span>
                  <span className="bg-slate-100/90 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                    {rev.source || 'Отзыв'}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <CTASection />

    </div>
  );
};
