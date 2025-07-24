import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  href,
  animate = false
}) => {
  const baseClasses = 'inline-flex items-center gap-3 font-medium transition-all duration-300 rounded-xl shadow-soft hover:shadow-lg transform hover:-translate-y-1';
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    large: 'px-8 py-4 text-lg'
  };
  
  const animateClass = animate ? 'animate-fade-in-up' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animateClass} ${className}`;
  
  const content = children;
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

export default Button;