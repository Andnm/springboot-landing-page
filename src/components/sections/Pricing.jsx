import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { PRICING } from '../../constants/data';

const Pricing = () => {
  return (
    <AnimatedSection
      id="pricing"
      className="py-20"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title">Học phí đầu tư</h2>
            <p className="section-subtitle">
              Đầu tư hôm nay cho tương lai vững chắc trong ngành công nghệ
            </p>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="scale-in" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{PRICING.title}</h3>
                <p className="text-indigo-100">{PRICING.subtitle}</p>
              </div>
              
              <div className="p-8">
                <div className="flex justify-center mb-8">
                  <span className="text-5xl font-bold">{PRICING.price}</span>
                </div>
                
                <div className="space-y-4">
                  {PRICING.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={24} className="text-green-500 mr-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-center mb-2">{PRICING.installment.title}</h4>
                    <p className="text-gray-600 text-center">{PRICING.installment.description}</p>
                  </div>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    className="flex items-center justify-center"
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default Pricing;