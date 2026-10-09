import React, { useState } from 'react';
import { GraduationCap, Camera, CheckCircle2 } from 'lucide-react';

interface TeacherAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadge?: boolean;
  imageUrl?: string;
  altText?: string;
}

export const TeacherAvatar: React.FC<TeacherAvatarProps> = ({
  className = '',
  size = 'lg',
  showBadge = true,
  imageUrl = '/images/victoria-slavoladova.webp',
  altText = 'Виктория Сергеевна Тетерядченко — Преподаватель английского языка'
}) => {
  const [imageError, setImageError] = useState(false);

  const containerSizes = {
    sm: "w-28 h-36 sm:w-32 sm:h-40",
    md: "w-44 h-56 sm:w-52 sm:h-64",
    lg: "w-full h-64 sm:h-72 md:h-80",
    xl: "w-full h-72 sm:h-88 md:h-[380px]"
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Soft ambient violet background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-500/20 via-purple-300/30 to-amber-200/30 rounded-3xl blur-md pointer-events-none" />

      {/* Main Image Container (Rectangle / Vertical aspect ratio, 45-55% of card) */}
      <div className={`relative w-full rounded-2xl sm:rounded-3xl bg-slate-100 border-2 border-purple-100/90 shadow-md overflow-hidden flex flex-col justify-end ${containerSizes[size]}`}>
        {!imageError && imageUrl ? (
          <img
            src={imageUrl}
            alt={altText}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          />
        ) : (
          /* Technical Portrait Placeholder Frame (When image is not yet uploaded) */
          <div className="w-full h-full bg-gradient-to-br from-purple-900/90 via-purple-800 to-slate-900 p-5 flex flex-col justify-between text-white relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,180,254,0.15),transparent_50%)] pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-medium text-purple-100">
                <Camera className="w-3.5 h-3.5 text-purple-300" />
                <span>Фотография преподавателя</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center pt-2">
              <div className="w-14 h-14 rounded-2xl bg-purple-700/60 border border-purple-400/30 flex items-center justify-center text-purple-200 shadow-inner">
                <GraduationCap className="w-7 h-7" />
              </div>
            </div>
          </div>
        )}

        {/* Subtle Bottom Scrim Gradient for Image Overlay */}
        {!imageError && (
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  );
};

