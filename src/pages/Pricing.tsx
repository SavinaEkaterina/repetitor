import React from 'react';
import { pricingPlans, pricingPageData } from '../data/pricing';
import { Check, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';

export const Pricing: React.FC = () => {
  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="purple">{pricingPageData.pageContent.headingBadge}</Badge>
        <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl">
          {pricingPageData.headingTitle}
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {pricingPageData.headingSubtitle}
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan) => (
          <Card key={plan.id} variant="white" className="flex flex-col justify-between border-purple-200 relative shadow-sm">
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-700 text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-sm whitespace-nowrap">
                {plan.badge}
              </div>
            )}

            <div className="space-y-4 pt-2">
              <div>
                <h2 className="font-heading font-bold text-slate-900 text-xl">
                  {plan.title}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {plan.subtitle}
                </p>
              </div>

              {/* Price Block */}
              <div className="p-4 bg-purple-50/80 rounded-2xl border border-purple-100 text-center space-y-1">
                <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                  {pricingPageData.pageContent.priceLabel}
                </div>
                <div className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl">
                  {plan.pricePerLesson}
                </div>
                <div className="text-[11px] text-slate-500">
                  {pricingPageData.pageContent.formatLabel} {plan.format}
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="font-semibold text-slate-900">{pricingPageData.pageContent.featuresTitle}</div>
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <Button to="/contacts" variant="primary" size="sm" fullWidth>
                {plan.ctaText}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <CTASection />

    </div>
  );
};
