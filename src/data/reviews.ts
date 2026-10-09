import reviewsContent from '../content/reviews.json';
import { ReviewItem } from '../types';

export const reviewsList: ReviewItem[] = (reviewsContent.items as any[])
  .filter((item: any) => item.published !== false);
