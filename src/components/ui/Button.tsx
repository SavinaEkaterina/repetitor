import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  isExternal = false,
  children,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-purple-700 hover:bg-purple-800 text-white shadow-md hover:shadow-lg shadow-purple-200 active:scale-[0.98]",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm active:scale-[0.98]",
    outline: "border-2 border-purple-200 hover:border-purple-600 bg-white hover:bg-purple-50 text-purple-900 font-medium active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-purple-100/60 text-purple-900 active:scale-[0.98]",
    accent: "bg-rose-500 hover:bg-rose-600 text-white shadow-md hover:shadow-lg shadow-rose-200 active:scale-[0.98]"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5 font-bold"
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    if (isExternal) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
          {icon && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClass}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
