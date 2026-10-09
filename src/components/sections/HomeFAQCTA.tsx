import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HomeFAQCTA: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-100 shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight">
            Остались вопросы?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Ответы на популярные вопросы об онлайн-формате, расписании, домашних заданиях и учебных материалах собраны в специальном разделе.
          </p>

          <div className="pt-2 flex justify-center">
            <Button
              to="/faq"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 text-purple-700" />}
            >
              Часто задаваемые вопросы
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
