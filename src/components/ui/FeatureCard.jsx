import React from 'react';

const FeatureCard = ({ 
  icon: Icon, 
  iconBg, 
  iconColor, 
  title, 
  description, 
  delay = 0,
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-xl`} 
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      <div className={`${iconBg} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        <Icon size={32} className={iconColor} />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;