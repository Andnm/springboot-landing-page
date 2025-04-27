import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AnimatedSection = ({ 
  children, 
  id, 
  className = '', 
  animation = 'fade-in', 
  delay = 0, 
  threshold = 0.1, 
  once = true,
  ...props 
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({ 
    threshold, 
    once 
  });

  const animations = {
    'fade-in': `transition-opacity duration-1000 delay-${delay} ${isIntersecting ? 'opacity-100' : 'opacity-0'}`,
    'fade-up': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`,
    'fade-down': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`,
    'fade-left': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`,
    'fade-right': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`,
    'scale-in': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`,
    'zoom-in': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`,
    'zoom-out': `transition-all duration-1000 delay-${delay} transform ${isIntersecting ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`,
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${animations[animation]}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;