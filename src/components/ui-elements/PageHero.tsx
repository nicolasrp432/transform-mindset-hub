interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundVariant?: 'primary' | 'accent' | 'secondary';
  icon?: string;
  animate?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundVariant = 'primary',
  icon,
  animate = true
}) => {
  const backgroundClasses = {
    primary: 'bg-gradient-primary',
    accent: 'bg-gradient-accent',
    secondary: 'bg-gradient-secondary'
  };
  
  return (
    <section className={`pt-32 pb-20 ${backgroundClasses[backgroundVariant]} text-primary-foreground`}>
      <div className="container-custom px-4">
        <div className="content-center mb-20 text-center-mobile">
          <h1 className={`title-hero text-gray-800 mb-10 title-gradient text-shadow-soft ${
            animate ? 'animate-fade-in-up' : ''
          }`}>
            {icon && <span className="mr-4">{icon}</span>}
            {title}
          </h1>
          <p className={`text-body-large leading-relaxed content-balanced text-gray-700 text-sophisticated text-shadow-soft ${
            animate ? 'animate-slide-in-right animate-delay-200' : ''
          }`}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;