import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import homeContent from '../../content/home.json';

export const BottomCTASection: React.FC = () => {
  const { bottomCTA } = homeContent;

  return (
    <section className="py-12 sm:py-16 bg-slate-50 h-auto overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-stretch h-auto overflow-visible">
          
          {/* Left Block: FAQ Card */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-purple-100 shadow-sm text-center flex flex-col justify-start lg:justify-between space-y-6 h-auto max-h-none">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <HelpCircle className="w-6 h-6" />
              </div>

              <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight">
                {bottomCTA.faqTitle}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                {bottomCTA.faqDescription}
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <Button
                to={bottomCTA.faqHref}
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 text-purple-700" />}
              >
                {bottomCTA.faqButtonText}
              </Button>
            </div>
          </div>

          {/* Right Block: Discuss Training CTA Card */}
          <div className="bg-gradient-to-br from-purple-900 via-purple-850 to-indigo-950 text-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl text-center flex flex-col justify-start lg:justify-between space-y-6 relative overflow-hidden border border-purple-800/50 h-auto max-h-none">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-purple-200 flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6" />
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                {bottomCTA.discussTitle}
              </h2>

              <p className="text-purple-100 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium">
                {bottomCTA.discussDescription}
              </p>
            </div>

            <div className="pt-2 flex justify-center relative z-10">
              <Link
                to={bottomCTA.discussHref}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-white hover:bg-purple-50 active:bg-purple-100 text-purple-950 font-extrabold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-purple-700" />
                <span>{bottomCTA.discussButtonText}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
