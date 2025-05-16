import React, { useState, useRef } from 'react';
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, ExternalLink, Clock, Award, Users } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

const CONTACT_EMAIL = 'ngonhattoan99@gmail.com';

const ContactForm = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white relative overflow-hidden"
      animation="fade-in"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Còn chờ gì nữa?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Bắt đầu hành trình <br className="hidden md:block" /><span className="text-yellow-300">Spring Boot Developer</span> ngay!</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt dành riêng cho bạn
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-indigo-100">
              <div className="md:flex">
                {/* Left column - Contact info */}
                <div className="md:w-1/2 p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-indigo-100 rounded-xl mr-3">
                      <MessageCircle className="text-indigo-600" size={24} />
                    </div>
                    <h3 className="text-gray-800 font-bold text-2xl">Liên hệ trực tiếp</h3>
                  </div>

                  <div className="space-y-7">
                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl mr-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Điện thoại</p>
                        <a href="tel:0772589922" className="text-gray-800 text-lg font-medium group-hover:text-indigo-600 transition-colors block">
                          094 951 1560
                        </a>
                        <p className="text-gray-500 text-xs">Hỗ trợ 24/7, kể cả cuối tuần</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl mr-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Email</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-800 text-lg font-medium group-hover:text-indigo-600 transition-colors block">
                          {CONTACT_EMAIL}
                        </a>
                        <p className="text-gray-500 text-xs">Phản hồi trong vòng 24 giờ</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl mr-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Địa chỉ</p>
                        <p className="text-gray-800 text-lg font-medium">
                          78 Phạm Đình Hổ, Quận 6, TP.HCM
                        </p>
                        <a href="https://maps.google.com/?q=78+Phạm+Đình+Hổ+Quận+6+TP+HCM" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs flex items-center mt-1 hover:text-indigo-800">
                          Xem trên Google Maps <ExternalLink size={12} className="ml-1" />
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                        <div className="flex items-center mb-2">
                          <Clock size={18} className="text-indigo-600 mr-2" />
                          <h5 className="font-medium text-gray-800">Giờ làm việc</h5>
                        </div>
                        <p className="text-gray-600 text-sm">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                        <p className="text-gray-600 text-sm">Thứ 7: 8:00 - 12:00</p>
                      </div>

                      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                        <div className="flex items-center mb-2">
                          <Users size={18} className="text-indigo-600 mr-2" />
                          <h5 className="font-medium text-gray-800">Tư vấn</h5>
                        </div>
                        <p className="text-gray-600 text-sm">Miễn phí tư vấn lộ trình học</p>
                        <p className="text-gray-600 text-sm">Hỗ trợ 1-1 với giảng viên</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={<Mail />}
                      iconPosition="left"
                      onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                    >
                      Gửi email ngay
                    </Button>
                  </div>
                </div>

                {/* Right column - QR code */}
                <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-8 md:p-10 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-30"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full opacity-30"></div>

                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-2 shadow-md">
                        <Phone className="text-white" size={24} />
                      </div>
                      <h3 className="text-gray-800 font-bold text-xl">Quét mã để kết nối Zalo</h3>
                    </div>

                    <div
                      className="relative"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl opacity-0 ${isHovered ? 'animate-pulse opacity-30' : ''}`}></div>
                      <div className={`bg-white p-4 rounded-xl shadow-lg mb-4 inline-block transform transition-all duration-300 ${isHovered ? 'scale-105 shadow-xl' : ''}`}>
                        <img
                          src="/assets/images/zalo-qr.jpg"
                          alt="Zalo QR Code"
                          className="w-56 h-56 object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-md">
                        <p className="text-gray-700 font-medium mb-1">Quét mã QR bằng ứng dụng Zalo</p>
                        <p className="text-gray-600 text-sm">
                          Tư vấn nhanh chóng ⚡ Nhận ưu đãi độc quyền 🎁
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 py-3 text-center">
                      <div className="inline-block bg-indigo-600/10 backdrop-blur-sm rounded-full px-4 py-1">
                        <p className="text-indigo-700 text-xs font-medium">Phản hồi trong vòng 5 phút</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 text-center">
                <p className="flex items-center justify-center">
                  <Award size={16} className="mr-2" />
                  <span className="font-medium">Học viên đăng ký ngay hôm nay sẽ được tặng kèm khóa học Git & GitHub</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm; 