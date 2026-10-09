import pricingContent from '../content/pricing.json';
import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = (pricingContent.plans as PricingPlan[])
  .filter((plan: any) => plan.published !== false);

export const pricingPageData = {
  headingTitle: pricingContent.headingTitle,
  headingSubtitle: pricingContent.headingSubtitle,
  pageContent: pricingContent.pageContent
};
