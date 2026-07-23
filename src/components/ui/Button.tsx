import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-navy-700 to-navy-800 text-white shadow-lg shadow-navy-900/20 hover:shadow-xl hover:shadow-navy-900/30',
  secondary:
    'border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white',
  cta: 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40',
  ghost: 'text-navy-700 hover:bg-navy-50',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-xl
    transition-all duration-300 cursor-pointer
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
