interface CardProps {
  variant?: 'default' | 'elegant' | 'feature' | 'testimonial';
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  className = '',
  hover = false,
  animate = false,
  delay = 0
}) => {
  const baseClasses = 'rounded-xl shadow-soft transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-card text-card-foreground p-6',
    elegant: 'bg-card text-card-foreground p-8 border border-border/20',
    feature: 'bg-background text-foreground p-8 border border-border hover:border-accent/30',
    testimonial: 'bg-muted/50 text-foreground p-6 border border-border/10'
  };
  
  const hoverClass = hover ? 'hover:shadow-lg hover:-translate-y-2 hover:scale-105' : '';
  const animateClass = animate ? 'animate-fade-in-up' : '';
  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';
  
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClass} ${animateClass} ${delayClass} ${className}`;
  
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;