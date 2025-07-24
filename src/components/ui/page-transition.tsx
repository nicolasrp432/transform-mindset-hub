import React, { useEffect, useState } from 'react';
import { useNavigation } from '@/hooks/use-navigation';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className = '' }) => {
  const { navigationState } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [navigationState.currentPath]);

  // Reset visibility on path change
  useEffect(() => {
    setIsVisible(false);
  }, [navigationState.currentPath]);

  return (
    <div 
      className={`
        transition-all duration-500 ease-out transform
        ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-4 opacity-0'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default PageTransition;