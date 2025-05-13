import React, { useState, useRef } from 'react';
import { ArrowRight, Mail, X, Check, Phone, MapPin, Calendar } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'ngonhattoan99@gmail.com';

const ContactForm = () => {
  return (
    <AnimatedSection
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
      animation="fade-in"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng để thay đổi sự nghiệp của bạn?</h2>
              <p className="text-xl opacity-90">Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt</p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-gray-800 font-bold text-2xl mb-6">Liên hệ trực tiếp</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <Phone className="text-indigo-600" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Điện thoại</p>
                        <a href="tel:0772589922" className="text-gray-800 text-lg font-medium hover:text-indigo-600 transition-colors">
                          077 258 9922
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <Mail className="text-indigo-600" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Email</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-800 text-lg font-medium hover:text-indigo-600 transition-colors">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <MapPin className="text-indigo-600" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Địa chỉ</p>
                        <p className="text-gray-800 text-lg font-medium">
                          78 Phạm Đình Hổ, Quận 6, TP.HCM
                        </p>
                      </div>
                    </div>
                    
                    {/* <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <Calendar className="text-indigo-600" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Khai giảng</p>
                        <p className="text-gray-800 text-lg font-medium">
                          15/06/2025 - Nhận ưu đãi 15%
                        </p>
                      </div>
                    </div> */}
                    
                    <Button 
                      variant="primary"
                      size="lg"
                      icon={<Mail />}
                      iconPosition="left"
                      onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}
                      className="mt-4"
                    >
                      Gửi email ngay
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-gray-800 font-bold text-xl mb-6">Quét mã để kết nối Zalo</h3>
                    <div className="bg-white p-3 rounded-lg shadow-lg mb-4 inline-block transform hover:scale-105 transition-transform duration-300">
                      <img
                        src="/assets/images/zalo-qr.jpg"
                        alt="Zalo QR Code"
                        className="w-56 h-56 object-cover"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mt-4">
                      Quét mã QR bằng ứng dụng Zalo<br />để được tư vấn nhanh chóng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;