import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import CurriculumTab, { CurriculumContent } from '../ui/CurriculumTab';
import { CURRICULUM } from '../../constants/data';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <AnimatedSection
      id="curriculum"
      className="py-20"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title">Lộ trình học 6 tháng</h2>
            <p className="section-subtitle">
              Chương trình học được thiết kế theo trình tự từ cơ bản đến nâng cao, giúp bạn tiến bộ từng bước một cách vững chắc
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
              {CURRICULUM.map((item) => (
                <CurriculumTab
                  key={item.id}
                  title={item.title}
                  isActive={activeTab === item.id}
                  onClick={() => setActiveTab(item.id)}
                />
              ))}
            </div>
            
            <div className="w-full md:w-2/3">
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