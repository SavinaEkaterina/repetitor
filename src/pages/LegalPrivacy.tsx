import React from 'react';
import { Badge } from '../components/ui/Badge';
import { PlaceholderBanner } from '../components/ui/PlaceholderBanner';

export const LegalPrivacy: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <Badge variant="gray">Правовая информация</Badge>
      <h1 className="font-heading font-extrabold text-slate-900 text-3xl">
        Политика конфиденциальности
      </h1>

      <PlaceholderBanner message="Здесь будет размещён утверждённый текст политики конфиденциальности Виктории Сергеевны Тетерядченко." />

      <div className="bg-white p-6 rounded-2xl border border-slate-200 text-slate-700 text-sm space-y-4">
        <p>[Раздел в процессе заполнения юридическими реквизитами и текстом]</p>
        <p>Обработка персональных данных осуществляется исключительно в целях организации учебного процесса и связи с заявителями.</p>
      </div>
    </div>
  );
};
