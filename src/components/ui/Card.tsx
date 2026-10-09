import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'white' | 'slate' | 'purple' | 'amber';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  variant = 'white'
}) => {
  const bgStyles = {
    white: "bg-white border-slate-200/80 shadow-sm",
    slate: "bg-slate-900 border-slate-800 text-white shadow-md",
    purple: "bg-purple-50/70 border-purple-200 shadow-sm",
    amber: "bg-amber-50/70 border-amber-200 shadow-sm"
  };

  const hoverClass = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-300"
    : "";

  return (
    <div className={`rounded-3xl border p-6 sm:p-8 ${bgStyles[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
