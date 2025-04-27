import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import TestimonialCard from '../ui/TestimonialCard';
import { TESTIMONIALS } from '../../constants/data';

const Testimonials = () => {
  return (
    <AnimatedSection
      id="testimonials"
      className="py-20 bg-gray-900 text-white"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Học viên nói gì về chúng tôi?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hàng trăm học viên đã thành công và sẵn sàng chia sẻ trải nghiệm của họ
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                content={testimonial.content}
                delay={index * 200}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;