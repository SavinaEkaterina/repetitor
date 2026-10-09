export interface TeacherProfile {
  fullName: string;
  shortName: string;
  brandName: string;
  role: string;
  experienceYears: number;
  tagline: string;
  bio: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
    isPlaceholder?: boolean;
  }[];
  certificates: {
    title: string;
    issuer: string;
    year: string;
    isPlaceholder?: boolean;
  }[];
  principles: {
    title: string;
    description: string;
    iconName: string;
  }[];
  stats: {
    label: string;
    value: string;
    isPlaceholder?: boolean;
  }[];
}

export interface Direction {
  id: string;
  title: string;
  path: string;
  shortDesc: string;
  badge: string;
  targetAudience: string;
  ageGroup: string;
  isKidsFriendly: boolean;
  highlights: string[];
  iconName: string;
  colorTheme: 'purple' | 'rose' | 'amber' | 'emerald' | 'indigo';
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  targetAudience: string;
  ageGroup: string;
  format: string;
  duration: string;
  schedule: string;
  price: string;
  isPricePending: boolean;
  description: string;
  objectives: string[];
  program: {
    moduleTitle: string;
    topics: string[];
  }[];
  materialsIncluded: string[];
  hasAuthorTheme: boolean;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  roleOrCategory: 'Родитель школьника' | 'Родитель дошкольника' | 'Подготовка к ОГЭ' | 'Взрослый ученик' | 'Курсы';
  directionTitle: string;
  date: string;
  text: string;
  isPlaceholder: boolean;
  rating: number;
  source?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  format: string;
  groupSize: string;
  lessonDuration: string;
  pricePerLesson: string;
  priceMonthly: string;
  isPricePending: boolean;
  features: string[];
  badge?: string;
  recommendedFor: string;
  ctaText: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'school' | 'oge' | 'adults' | 'payment' | 'technical';
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Для родителей' | 'ОГЭ' | 'Взрослым' | 'Лайфхаки' | 'Методика' | string;
  readTime: string;
  date: string;
  formattedDate?: string;
  content: string[];
  tags: string[];
  isDemoPost: boolean;
  published?: boolean;
  image?: string;
}

export interface ContactInfo {
  vkUrl: string;
  isVkPending: boolean;
  telegramUrl: string;
  isTelegramPending: boolean;
  maxUrl: string;
  isMaxPending: boolean;
  whatsappUrl?: string;
  email: string;
  isEmailPending: boolean;
  workingHours: string;
  locationNote: string;
}
