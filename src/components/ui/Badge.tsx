import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'amber' | 'rose' | 'emerald' | 'indigo' | 'gray';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  icon,
  className = ''
}) => {
  const variantStyles = {
    purple: "bg-purple-100 text-purple-900 border-purple-200",
    amber: "bg-amber-100 text-amber-900 border-amber-200",
    rose: "bg-rose-100 text-rose-900 border-rose-200",
    emerald: "bg-emerald-100 text-emerald-900 border-emerald-200",
    indigo: "bg-indigo-100 text-indigo-900 border-indigo-200",
    gray: "bg-slate-100 text-slate-700 border-slate-200"
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-semibold rounded-full border",
    md: "px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-full border"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 max-w-full text-balance leading-normal sm:whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
