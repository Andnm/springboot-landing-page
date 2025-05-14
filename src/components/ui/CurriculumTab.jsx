// src/components/ui/CurriculumTab.jsx
import React from 'react';
import { CheckCircle, Clock, Calendar, BookOpen, Award } from 'lucide-react';

const CurriculumTab = ({ 
  title, 
  isActive, 
  onClick 
}) => {
  // Trích xuất số module và tên module
  const moduleMatch = title.match(/([IVX]+)\.\s(.+?)\s\(/);
  const moduleNumber = moduleMatch ? moduleMatch[1] : '';
  const moduleName = moduleMatch ? moduleMatch[2] : title;
  
  // Trích xuất thời gian
  const durationMatch = title.match(/\(([^)]+)\)/);
  const duration = durationMatch ? durationMatch[1] : '';
  
  return (
    <div 
      className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg' : 'bg-white hover:bg-gray-50 border border-gray-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
          isActive ? 'bg-white text-primary-600' : 'bg-primary-50 text-primary-600'
        }`}>
          <span className="font-bold text-sm">{moduleNumber}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-sm md:text-base">{moduleName}</h3>
          {duration && (
            <div className="flex items-center mt-1">
              <Clock size={12} className={isActive ? "text-primary-200" : "text-primary-400"} />
              <span className={`text-xs ml-1 ${isActive ? "text-primary-100" : "text-gray-500"}`}>{duration}</span>
            </div>
          )}
        </div>
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
  // Trích xuất module number, name và duration
  const moduleMatch = title.match(/([IVX]+)\.\s(.+?)\s\(/);
  const moduleNumber = moduleMatch ? moduleMatch[1] : '';
  const moduleName = moduleMatch ? moduleMatch[2] : title;
  
  const durationMatch = title.match(/\(([^)]+)\)/);
  const duration = durationMatch ? durationMatch[1] : '';
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 ${
        isActive ? 'opacity-100 transform scale-100' : 'opacity-0 absolute h-0'
      }`}
    >
      <div className="relative">
        {/* Header with gradient overlay */}
        <div className="h-48 md:h-64 relative overflow-hidden">
          <img 
            src={image || "/api/placeholder/800/400"} 
            alt={moduleName} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent">
            <div className="p-6 md:p-8 text-white">
              <div className="flex items-center mb-2">
                <span className="inline-block bg-primary-500 text-white text-xs px-2 py-1 rounded-md font-medium mr-2">
                  Module {moduleNumber}
                </span>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <Clock size={12} className="mr-1" />
                  {duration}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{moduleName}</h2>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6 md:p-8">
          {/* Overview */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-2 rounded-lg mr-4">
                <BookOpen className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Tổng quan</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{content}</p>
          </div>
          
          {/* Content details */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-4">
                <Award className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Nội dung bạn sẽ học</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <ul className="space-y-4">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Project preview */}
          {/* <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100">
            <div className="flex items-center mb-3">
              <Calendar className="text-primary-600 mr-2" size={20} />
              <h3 className="font-bold text-primary-700">Kết quả khi hoàn thành module này</h3>
            </div>
            <p className="text-gray-700">
              Sau khi hoàn thành module này, bạn sẽ nắm vững các khái niệm và có thể áp dụng vào dự án thực tế. 
              Bạn sẽ được thực hành thông qua các bài tập và mini-project để củng cố kiến thức.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CurriculumTab;