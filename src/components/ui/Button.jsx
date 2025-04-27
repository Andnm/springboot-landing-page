import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  type = 'button',
  fullWidth = false,
  icon = null,
  iconPosition = 'right',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform';
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow hover:shadow-lg',
    secondary: 'bg-white border-2 border-primary-600 hover:bg-primary-50 text-primary-600',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-700',
    ghost: 'text-primary-600 hover:bg-primary-50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  

  const iconElement = icon ? React.cloneElement(icon, { 
    className: `${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`,
    size: size === 'sm' ? 16 : size === 'md' ? 20 : 24
  }) : null;
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} hover:scale-105 ${className}`}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  );
};

export default Button;