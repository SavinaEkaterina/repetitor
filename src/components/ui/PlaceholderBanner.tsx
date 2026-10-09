import React from 'react';
import { Info } from 'lucide-react';

interface PlaceholderBannerProps {
  message?: string;
  className?: string;
  compact?: boolean;
}

export const PlaceholderBanner: React.FC<PlaceholderBannerProps> = ({
  message = "Информация уточняется и будет добавлена после согласования с Викторией Славоладовой.",
  className = '',
  compact = false
}) => {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200 rounded-lg ${className}`}>
        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
        <span>{message}</span>
      </span>
    );
  }

  return (
    <div className={`p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-amber-900 text-sm ${className}`}>
      <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
      <div className="leading-relaxed font-medium">
        {message}
      </div>
    </div>
  );
};
