import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import siteContent from '../../content/site.json';

export const CTASection: React.FC = () => {
  const cta = siteContent.ctaSection || {
    title: "Давайте обсудим обучение",
    subtitle: "Расскажите мне о ваших задачах и целях — вместе разберёмся, какой формат обучения вам подойдёт.",
    buttonText: "Обсудить обучение",
    buttonHref: "/contacts"
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Purple Card Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-850 to-indigo-950 text-white rounded-[2.25rem] p-8 sm:p-12 md:p-16 text-center space-y-5 shadow-xl relative overflow-hidden border border-purple-800/50">
          
          {/* Subtle Background Glow Decorative element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Headline H2 */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight max-w-3xl mx-auto leading-tight relative z-10">
            {cta.title}
          </h2>

          {/* Subtitle */}
          <p className="text-purple-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed relative z-10 font-medium">
            {cta.subtitle}
          </p>

          {/* Action Button */}
          <div className="pt-3 flex justify-center relative z-10">
            <Link
              to={cta.buttonHref || "/contacts"}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-white hover:bg-purple-50 active:bg-purple-100 text-purple-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-purple-700" />
              <span>{cta.buttonText}</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
