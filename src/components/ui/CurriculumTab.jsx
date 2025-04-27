import React from 'react';
import { CheckCircle } from 'lucide-react';

const CurriculumTab = ({
  title,
  isActive,
  onClick
}) => {
  return (
    <div
      className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${isActive ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'
        }`}
      onClick={onClick}
    >
      <h3 className="font-bold">{title}</h3>
    </div>
  );
};

export const CurriculumContent = ({
  title,
  content,
  image,
  details,
  isActive
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${isActive ? 'opacity-100 transform scale-100' : 'opacity-0 absolute h-0'
        }`}
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={image || "https://ant.ncc.asia/wp-content/uploads/2024/08/image-214.png"}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{content}</p>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle size={20} className="text-green-500 mr-2" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurriculumTab;