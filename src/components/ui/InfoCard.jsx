import React from 'react';

const InfoCard = ({ 
  icon: Icon, 
  iconBg, 
  iconColor, 
  title, 
  description, 
  rotation = 0,
  className = ''
}) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-xl transform hover:rotate-0 transition-all duration-300 ${className}`}
      style={{ rotate: `${rotation}deg` }}
    >
      <div className={`${iconBg} p-2 rounded-lg mb-4`}>
        <Icon size={32} className={iconColor} />
      </div>
      <h3 className={`font-bold text-xl mb-2 ${title.color || 'text-gray-800'}`}>{title.text}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;