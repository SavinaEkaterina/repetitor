import React from 'react';
import { Link } from 'react-router-dom';
import { blogPostsList } from '../data/blog';
import { BookOpen, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Blog: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-10 py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
        <Badge variant="purple" icon={<BookOpen className="w-4 h-4" />}>
          Новости и полезные статьи
        </Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Мои полезные <br className="hidden sm:inline" />
          статьи и новости
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Практические советы родителям школьников, материалы по ОГЭ и рекомендации взрослым ученикам.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {blogPostsList.map((post, index) => {
          const isFeatured = index === 0;

          return (
            <Card
              key={post.id}
              hoverEffect={true}
              className={`flex flex-col justify-between transition-all duration-200 p-6 sm:p-7 relative overflow-hidden ${
                isFeatured
                  ? 'bg-purple-50/70 border-purple-200/90 shadow-sm hover:border-purple-300'
                  : 'bg-white border-purple-100/90 shadow-xs hover:border-purple-200'
              }`}
            >
              <div className="space-y-4 relative z-10">
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Badge variant="purple" size="sm">{post.category}</Badge>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-full border border-purple-200/60">
                        <Sparkles className="w-3 h-3 text-purple-600" />
                        <span>Новое</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title with Hierarchy */}
                <h2 className={`font-heading font-bold text-slate-900 leading-snug transition-colors hover:text-purple-700 ${
                  isFeatured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                }`}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                {/* Summary Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Bottom Footer Bar */}
              <div className="pt-5 mt-6 border-t border-purple-100/80 flex items-center justify-between text-xs relative z-10">
                <span className="text-slate-400 font-medium">{post.date}</span>
                <Button
                  to={`/blog/${post.slug}`}
                  variant="ghost"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4 text-purple-700" />}
                  className="text-purple-700 font-semibold hover:text-purple-800 hover:bg-purple-100/70"
                >
                  Читать
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

    </div>
  );
};
