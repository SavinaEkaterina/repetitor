import React from 'react';
import { Badge } from '../components/ui/Badge';
import { PlaceholderBanner } from '../components/ui/PlaceholderBanner';

export const LegalPersonalData: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <Badge variant="gray">Правовая информация</Badge>
      <h1 className="font-heading font-extrabold text-slate-900 text-3xl">
        Согласие на обработку персональных данных
      </h1>

      <PlaceholderBanner message="Здесь будет размещён утверждённый текст согласия на обработку персональных данных." />

      <div className="bg-white p-6 rounded-2xl border border-slate-200 text-slate-700 text-sm space-y-4">
        <p>[Текст согласия готов к публикации при получении финального документа]</p>
      </div>
    </div>
  );
};
