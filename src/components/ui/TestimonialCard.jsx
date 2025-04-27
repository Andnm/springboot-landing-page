import React from 'react';

const TestimonialCard = ({ 
  name, 
  role, 
  image, 
  content, 
  delay = 0,
  ...props 
}) => {
  return (
    <div 
      className={`bg-gray-800 rounded-lg p-8 transform transition-all duration-500 hover:scale-105`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      <div className="flex items-center mb-6">
        <img 
          src={image || "https://images.icon-icons.com/2643/PNG/512/male_man_person_people_avatar_white_tone_icon_159365.png"} 
          alt={name} 
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-indigo-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;