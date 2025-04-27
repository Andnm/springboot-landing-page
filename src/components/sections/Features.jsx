import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import FeatureCard from '../ui/FeatureCard';
import { FEATURES } from '../../constants/data';

const Features = () => {
  return (
    <AnimatedSection
      id="features"
      className="py-20 bg-gray-50"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title">Tại sao chọn khóa học của chúng tôi?</h2>
            <p className="section-subtitle">
              Chúng tôi cung cấp trải nghiệm học tập đặc biệt với chương trình được thiết kế bởi các chuyên gia hàng đầu
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                iconBg={feature.iconBg}
                iconColor={feature.iconColor}
                title={feature.title}
                description={feature.description}
                delay={100}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default Features;