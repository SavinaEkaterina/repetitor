import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Newspaper, BookOpen } from 'lucide-react';
import { blogPostsList } from '../../data/blog';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const HomeLatestNews: React.FC = () => {
  // Take the 3 latest blog posts
  const latestPosts = blogPostsList.slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-purple-100 pb-5">
          <div className="space-y-2">
            <Badge variant="purple" icon={<Newspaper className="w-3.5 h-3.5 text-purple-700" />}>
              Блог и полезные материалы
            </Badge>
            <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight">
              Новости и полезные материалы
            </h2>
          </div>

          <Button to="/blog" variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
            Все новости
          </Button>
        </div>

        {/* 3 Latest Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {latestPosts.map((post) => (
            <Card key={post.id} hoverEffect={true} className="flex flex-col justify-between border-purple-100">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <Badge variant="purple" size="sm">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-lg hover:text-purple-700 transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{post.date}</span>
                <Button to={`/blog/${post.slug}`} variant="ghost" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Читать
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
