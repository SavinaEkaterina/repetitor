```tsx
import React, { useState } from 'react';
import { Send, MessageCircle, Sparkles, ArrowUpRight, Copy, Check, MessageSquare, Info, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import contactsContent from '../../content/contacts.json';

interface ContactFormProps {
  defaultDirection?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultDirection = "Школьный английский",
  className = ""
}) => {
  const [selectedDirection, setSelectedDirection] = useState(defaultDirection);

  // Directions list for quick selection
  const directions: string[] = contactsContent.directions || [
    "Подготовка к школе (1–2 класс)",
    "Школьный английский (2–8 класс)",
    "Подготовка к ОГЭ (9 класс)",
    "Английский для взрослых (18+)",
    "Авторские курсы и интенсивы"
  ];

  return (
<div className={`bg-white rounded-2xl p-5 sm:p-6 border border-purple-100 shadow-md relative overflow-hidden ${className}`}>
      {/* Subtle Background Accent */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-purple-100/60 rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10 space-y-4">

        {/* Header Title */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-purple-700 font-semibold text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{contactsContent.formBadge || "Прямая связь с преподавателем"}</span>
          </div>

          <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
            {contactsContent.formTitle || "Записаться на ознакомительное занятие"}
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-snug">
            {contactsContent.formSubtitle || "Выберите направление и напишите мне напрямую в удобном мессенджере."}
          </p>
        </div>

        {/* Direction Selector Chips */}
        <div className="space-y-1.5">
          <span className="text-xs font-semibold text-slate-700">
            {contactsContent.directionLabel || "Направление обучения:"}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {directions.map((dir) => {
              const isSelected = selectedDirection === dir;
              return (
                <button
                  key={dir}
                  type="button"
                  onClick={() => setSelectedDirection(dir)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-800 text-white shadow-xs ring-1 ring-purple-400'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-purple-50 hover:text-purple-900 border border-slate-200/80'
                  }`}
                >
                  {dir}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet (< lg): Messenger Action Buttons Grid */}
        <div className="lg:hidden space-y-1.5">
          <span className="text-xs font-semibold text-slate-700">
            {contactsContent.writeDirectlyLabel || "Написать напрямую:"}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

            {/* Telegram Button */}
            <a
              href={contactsContent.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-between shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-white" />
                <span>Telegram</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-sky-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* ВКонтакте Button */}
            <a
              href={contactsContent.vkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-between shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-white" />
                <span>ВКонтакте</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-blue-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* MAX Messenger Button */}
            <a
              href={contactsContent.maxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2.5 px-3 rounded-xl bg-purple-800 hover:bg-purple-900 text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-between shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Мессенджер MAX</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </div>
        </div>

        {/* Desktop (>= 1024px): 3 QR Cards in one row */}
        <div className="hidden lg:block space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-800">
              {contactsContent.writeDirectlyLabel || "Написать напрямую:"}
            </span>
            <span className="text-xs text-slate-500">
              {contactsContent.qrInstruction || "Наведите камеру смартфона на QR-код или нажмите для перехода"}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-stretch">

            {/* 1. Telegram Card */}
            <div className="flex flex-col justify-between bg-white rounded-2xl p-4 border border-purple-100/90 shadow-xs hover:shadow-md transition-all duration-200 text-center">
              <div className="space-y-3">
                <a
                  href={contactsContent.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-slate-900 hover:text-sky-600 transition-colors text-base"
                >
                  <Send className="w-4 h-4 text-sky-500" />
                  <span>Telegram</span>
                </a>

                {/* Clickable QR Code */}
                <a
                  href={contactsContent.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-slate-50/60 p-2.5 rounded-xl border border-slate-100 hover:border-sky-300 transition-colors cursor-pointer"
                  title="Открыть Telegram"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/qr-telegram.svg`}
                    alt="QR-код Telegram Виктории Славоладовой"
                    className="w-44 h-44 mx-auto object-contain select-none"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="mt-3">
                <a
                  href={contactsContent.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-heading font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <span>{contactsContent.telegramButtonText || "Написать в Telegram"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. ВКонтакте Card */}
            <div className="flex flex-col justify-between bg-white rounded-2xl p-4 border border-purple-100/90 shadow-xs hover:shadow-md transition-all duration-200 text-center">
              <div className="space-y-3">
                <a
                  href={contactsContent.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-slate-900 hover:text-blue-600 transition-colors text-base"
                >
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <span>ВКонтакте</span>
                </a>

                {/* Clickable QR Code */}
                <a
                  href={contactsContent.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-slate-50/60 p-2.5 rounded-xl border border-slate-100 hover:border-blue-300 transition-colors cursor-pointer"
                  title="Открыть ВКонтакте"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/qr-vk.svg`}
                    alt="QR-код ВКонтакте Виктории Славоладовой"
                    className="w-44 h-44 mx-auto object-contain select-none"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="mt-3">
                <a
                  href={contactsContent.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <span>{contactsContent.vkButtonText || "Написать в ВКонтакте"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3. MAX Card */}
            <div className="flex flex-col justify-between bg-white rounded-2xl p-4 border border-purple-100/90 shadow-xs hover:shadow-md transition-all duration-200 text-center">
              <div className="space-y-3">
                <a
                  href={contactsContent.maxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-slate-900 hover:text-purple-700 transition-colors text-base"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>MAX</span>
                </a>

                {/* Clickable QR Code */}
                <a
                  href={contactsContent.maxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-slate-50/60 p-2.5 rounded-xl border border-slate-100 hover:border-purple-300 transition-colors cursor-pointer"
                  title="Открыть MAX"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/qr-max.svg`}
                    alt="QR-код MAX Виктории Славоладовой"
                    className="w-44 h-44 mx-auto object-contain select-none"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="mt-3">
                <a
                  href={contactsContent.maxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-purple-800 hover:bg-purple-900 text-white font-heading font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <span>{contactsContent.maxButtonText || "Написать в MAX"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer info line */}
        <div className="pt-2 border-t border-purple-100 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>{contactsContent.workingHours}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>{contactsContent.locationNote}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
```
