import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPostsList } from '../data/blog';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { PlaceholderBanner } from '../components/ui/PlaceholderBanner';
import { CTASection } from '../components/sections/CTASection';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsList.find(p => p.slug === slug) || blogPostsList[0];

  return (
    <div className="space-y-12 py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div>
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Вернуться к новостям</span>
        </Link>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <Badge variant="purple">{post.category}</Badge>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl leading-tight">
          {post.title}
        </h1>
      </div>

      {post.image && (
        <div className="rounded-3xl overflow-hidden border border-purple-100 shadow-sm max-h-96">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {post.isDemoPost && (
        <PlaceholderBanner message="Это демонстрационная статья-прототип. В будущем здесь будут размещены мои экспертные статьи." />
      )}

      <div className="prose prose-purple max-w-none text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
        {post.content.map((paragraph, idx) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={idx} className="font-heading font-bold text-slate-900 text-2xl pt-4 pb-1">
                {paragraph.replace(/^##\s+/, '')}
              </h2>
            );
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="font-heading font-bold text-slate-900 text-xl pt-3 pb-1">
                {paragraph.replace(/^###\s+/, '')}
              </h3>
            );
          }
          if (paragraph.startsWith('- ')) {
            const listItems = paragraph.split('\n').filter(Boolean);
            return (
              <ul key={idx} className="list-disc list-inside space-y-1.5 my-2">
                {listItems.map((item, i) => (
                  <li key={i}>{item.replace(/^-\s+/, '')}</li>
                ))}
              </ul>
            );
          }
          return <p key={idx}>{paragraph}</p>;
        })}
      </div>

      <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-2">
        {post.tags.map((tag, idx) => (
          <span key={idx} className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
            <Tag className="w-3 h-3 text-slate-400" />
            {tag}
          </span>
        ))}
      </div>

      <CTASection />

    </div>
  );
};
