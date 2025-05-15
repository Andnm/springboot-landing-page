// src/components/sections/Pricing.jsx
import React from 'react';
import { CheckCircle, Star, Clock, Award, PenTool, Users, CreditCard, Gift, Calendar, Zap } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { PRICING } from '../../constants/data';

const Pricing = () => {
  return (
    <AnimatedSection
      id="pricing"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
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
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 p-8 text-white relative">
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <div className="bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full text-sm transform rotate-2 shadow-lg flex items-center">
                    <Star size={16} className="mr-1" />
                    Cam kết chất lượng
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{PRICING.title}</h3>
                <p className="text-primary-100 text-lg max-w-2xl">{PRICING.subtitle}</p>
              </div>
              
              {/* Content */}
              <div className="p-8 md:flex">
                {/* Left - Price & Features */}
                <div className="md:w-2/3 md:pr-12">
                  {/* Price - with animation and color */}
                  <div className="flex items-end mb-8">
                    <div className="relative">
                      <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                        {PRICING.price}
                      </div>
                      <div className="absolute -top-5 -right-8 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold transform rotate-12 shadow-md">
                        <Gift size={12} className="inline mr-1" /> Ưu đãi 15%
                      </div>
                    </div>
                    <span className="text-gray-500 ml-2 mb-3">trọn khóa</span>
                  </div>
                  
                  {/* Special promo card */}
                  <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 mb-8 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 bg-indigo-100 rounded-full w-24 h-24 opacity-50"></div>
                    <div className="flex items-start relative z-10">
                      <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                        <CreditCard className="text-indigo-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-indigo-900 mb-1">{PRICING.installment.title}</h4>
                        <p className="text-indigo-700">{PRICING.installment.description}</p>
                        <p className="text-indigo-600 text-sm mt-1 font-medium">
                          Không lãi suất, không phí ẩn
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* What's included */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg mr-2">
                        <Award className="text-green-600" size={20} />
                      </div>
                      Bao gồm những gì?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PRICING.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-3 text-white bg-gradient-to-br from-green-500 to-green-600 rounded-full p-1 shadow-sm">
                            <CheckCircle size={16} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Schedule info */}
                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 mb-8 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <div className="p-1.5 bg-blue-100 rounded-lg mr-2">
                        <Clock className="text-blue-600" size={18} />
                      </div>
                      Lịch học linh hoạt
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                        <Zap size={18} className="text-amber-500 mr-2" />
                        <div>
                          <p className="text-gray-700 font-medium">Toàn thời gian</p>
                          <p className="text-gray-500 text-sm">15 tuần (4 tháng)</p>
                        </div>
                      </div>
                      <div className="flex items-center bg-white p-3 rounded-lg border border-gray-100">
                        <Calendar size={18} className="text-purple-500 mr-2" />
                        <div>
                          <p className="text-gray-700 font-medium">Bán thời gian</p>
                          <p className="text-gray-500 text-sm">24 tuần (6 tháng)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right - CTA */}
                <div className="md:w-1/3 md:border-l border-gray-100 md:pl-12 mt-8 md:mt-0">
                  {/* Enrollment */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 mb-8 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="p-1.5 bg-indigo-100 rounded-lg mr-2">
                        <PenTool className="text-indigo-600" size={18} />
                      </div>
                      Đăng ký ngay
                    </h4>
                    <div className="bg-white p-4 rounded-lg mb-6 border border-indigo-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">Ngày khai giảng:</span>
                        <span className="font-semibold text-indigo-700">15/06/2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Slots còn lại:</span>
                        <span className="font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">10</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Đăng ký tư vấn
                    </Button>
                    
                    <Button
                      variant="secondary"
                      size="lg"
                      fullWidth
                      className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                    >
                      Tải brochure khóa học
                    </Button>
                  </div>
                  
                  {/* Job support */}
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm mr-3 border border-amber-100">
                        <Users className="text-amber-600" size={18} />
                      </div>
                      <h4 className="font-bold text-gray-800">Hỗ trợ tìm việc</h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Học viên được hỗ trợ tìm việc sau khi hoàn thành khóa học với tỷ lệ thành công trên 85%.
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-amber-100 text-center">
                      <span className="text-amber-800 font-medium text-sm">Mức lương trung bình:</span>
                      <div className="text-amber-600 font-bold text-lg">15-25 triệu/tháng</div>
                    </div>
                  </div>
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