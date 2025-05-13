// src/components/ui/CurriculumTab.jsx
import React from 'react';
import { CheckCircle, Clock, BookOpen } from 'lucide-react';

const CurriculumTab = ({ 
  title, 
  isActive, 
  onClick 
}) => {
  // Trích xuất số module từ title (ví dụ: "I. Java Core" => "I")
  const moduleNumber = title.split('.')[0];
  
  return (
    <div 
      className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
          isActive ? 'bg-white text-primary-600' : 'bg-primary-100 text-primary-600'
        }`}>
          <span className="font-bold text-sm">{moduleNumber}</span>
        </div>
        <h3 className="font-bold text-sm md:text-base">{title.split('. ')[1]}</h3>
      </div>
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
  // Trích xuất thời gian từ title (ví dụ: "I. Java Core (1 tuần)" => "1 tuần")
  const durationMatch = title.match(/\(([^)]+)\)/);
  const duration = durationMatch ? durationMatch[1] : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${
        isActive ? 'opacity-100 transform scale-100' : 'opacity-0 absolute h-0'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Ảnh bên trái - chiếm toàn bộ chiều cao ở desktop */}
        <div className="h-full md:h-full bg-gray-100 relative overflow-hidden">
          <img 
            src={image || "/api/placeholder/600/600"} 
            alt={title.split('. ')[1]} 
            className="h-full w-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{title.split('. ')[1]}</h3>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">{duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nội dung bên phải - chiều cao cố định với scrolling */}
        <div className="p-6 md:p-8 md:overflow-y-auto md:h-[600px]">
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 text-lg mb-3 flex items-center">
              <BookOpen size={20} className="mr-2 text-primary-600" />
              Tổng quan
            </h4>
            <p className="text-gray-600">{content}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 text-lg mb-3">Nội dung học:</h4>
            <ul className="space-y-3">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
        
        </div>
      </div>
    </div>
  );
};

export default CurriculumTab;