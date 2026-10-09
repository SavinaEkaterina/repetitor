import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageSquare, ArrowRight, Quote } from 'lucide-react';
import { reviewsList } from '../../data/reviews';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="purple">Отзывы учеников и родителей</Badge>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">
              Впечатления от занятий с Викторией Славоладовой
            </h2>
            <p className="text-slate-600 text-base">
              Все отзывы собираются с согласия учеников и их родителей.
            </p>
          </div>

          <Button to="/reviews" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
            Все отзывы ({reviewsList.length})
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.slice(0, 4).map((rev) => (
            <Card key={rev.id} variant="white" className="flex flex-col justify-between border-purple-100 relative">
              <Quote className="w-10 h-10 text-purple-100 absolute top-4 right-4 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="purple" size="sm">{rev.roleOrCategory}</Badge>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>5.0</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-heading font-bold text-slate-900 text-sm">
                  {rev.authorName}
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-full">
                  {rev.source || 'Отзыв'}
                </span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
