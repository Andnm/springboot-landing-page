import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import FAQItem from '../ui/FAQItem';
import { FAQS } from '../../constants/data';

const FAQ = () => {
  return (
    <AnimatedSection
      id="faq"
      className="py-20 bg-gray-50"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title">Câu hỏi thường gặp</h2>
            <p className="section-subtitle">
              Giải đáp những thắc mắc phổ biến về khóa học Spring Boot
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="max-w-3xl mx-auto">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0}
                delay={index * 100}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;