// src/components/sections/Curriculum.jsx
import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import CurriculumTab, { CurriculumContent } from '../ui/CurriculumTab';
import { CURRICULUM } from '../../constants/data';
import { BookOpen } from 'lucide-react';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  // Tính tổng số tuần
  const totalWeeks = CURRICULUM.reduce((sum, item) => {
    const durationMatch = item.title.match(/\((\d+)\s+tuần\)/);
    return sum + (durationMatch ? parseInt(durationMatch[1]) : 0);
  }, 0);

  return (
    <AnimatedSection
      id="curriculum"
      className="py-20 bg-gray-50"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title">Lộ trình học {totalWeeks} tuần</h2>
            <p className="section-subtitle">
              Chương trình học được thiết kế theo trình tự từ cơ bản đến nâng cao, giúp bạn tiến bộ từng bước một cách vững chắc
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <BookOpen className="text-primary-600" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Giáo trình chi tiết</h3>
            </div>
            <p className="text-gray-600">
              Giáo trình được biên soạn bởi các chuyên gia với nhiều năm kinh nghiệm trong ngành, bám sát nhu cầu thực tế của doanh nghiệp. 
              Mỗi module được thiết kế tỉ mỉ, giúp bạn nắm vững cả lý thuyết lẫn thực hành.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="w-full lg:w-1/3 overflow-hidden lg:overflow-y-auto lg:max-h-[600px] lg:pr-4 bg-gray-50 p-4 rounded-xl">
              <div className="space-y-3">
                {CURRICULUM.map((item) => (
                  <CurriculumTab
                    key={item.id}
                    title={item.title}
                    isActive={activeTab === item.id}
                    onClick={() => setActiveTab(item.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-2/3">
              {CURRICULUM.map((item) => (
                <CurriculumContent
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  image={item.image}
                  details={item.details}
                  isActive={activeTab === item.id}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default Curriculum;