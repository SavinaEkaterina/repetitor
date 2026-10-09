import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="py-20 max-w-xl mx-auto text-center px-4 space-y-6">
      <div className="w-20 h-20 bg-purple-100 text-purple-700 rounded-3xl flex items-center justify-center mx-auto shadow-sm">
        <Search className="w-10 h-10" />
      </div>

      <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl">
        Страница не найдена (404)
      </h1>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
        Запрошенная страница не существует или была перемещена. Перейдите на главную страницу, чтобы выбрать нужное направление обучения.
      </p>

      <div>
        <Button to="/" variant="primary" icon={<Home className="w-4 h-4" />}>
          На главную страницу
        </Button>
      </div>
    </div>
  );
};
