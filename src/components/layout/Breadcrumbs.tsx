import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const pathNameMap: Record<string, string> = {
  'about': 'Обо мне',
  'children': 'Английский для детей',
  'school-preparation': 'Подготовка к школе',
  'school-english': 'Школьный английский',
  'oge': 'Подготовка к ОГЭ',
  'adults': 'Английский для взрослых',
  'courses': 'Авторские курсы',
  'lessons': 'Как проходят занятия',
  'reviews': 'Отзывы',
  'pricing': 'Стоимость',
  'faq': 'Частые вопросы',
  'blog': 'Новости',
  'contacts': 'Контакты',
  'free-courses': 'Бесплатные курсы',
  'privacy': 'Политика конфиденциальности',
  'offer': 'Договор оферты',
  'personal-data': 'Обработка персональных данных'
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100/60 border-b border-slate-200/60 text-xs sm:text-sm text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-purple-700 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Главная</span>
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = pathNameMap[name] || name;

          return (
            <React.Fragment key={routeTo}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-purple-900 truncate max-w-[200px] sm:max-w-none">
                  {displayName}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-purple-700 transition-colors truncate max-w-[150px] sm:max-w-none">
                  {displayName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
