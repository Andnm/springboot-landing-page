import React from 'react';
import { ArrowRight, ChevronDown, Star, Users, Award, Code, Database, Server } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import InfoCard from '../ui/InfoCard';
import { HERO_INFO_CARDS, HERO_CTA_CARD, TECHNOLOGIES } from '../../constants/data';

const Hero = () => {
  return (
    <AnimatedSection
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white overflow-hidden"
      animation="fade-in"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" opacity="0.05">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-white opacity-10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10 py-16">
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            {/* Badge */}
            <AnimatedSection animation="fade-down" delay={100}>
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-300 mr-2" />
                  <span className="text-white text-sm font-medium">Khóa học đáng học nhất 2025</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Trở thành <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">Spring Boot Developer</span> chuyên nghiệp trong 6 tháng
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl mb-8 text-indigo-100">
                Khóa học Spring Boot toàn diện với những kiến thức thực tế và project thực chiến giúp bạn sẵn sàng cho công việc Java Backend Developer lương cao.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight />}
                  iconPosition="right"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold shadow-lg transform hover:scale-105 transition-all"
                >
                  Đăng ký ngay
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                  className="border-white hover:bg-indigo-500/30 hover:border-yellow-300 hover:text-yellow-300 transform hover:scale-105 transition-all backdrop-blur-sm"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation="fade-up" delay={700}>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg px-3 py-4">
                  <div className="text-3xl font-bold text-yellow-300">5+</div>
                  <div className="text-xs text-indigo-100 mt-1">Projects thực tế</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg px-3 py-4">
                  <div className="text-3xl font-bold text-yellow-300">180+</div>
                  <div className="text-xs text-indigo-100 mt-1">Giờ học thực hành</div>
                </div>
                <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg px-3 py-4">
                  <div className="text-3xl font-bold text-yellow-300">85%</div>
                  <div className="text-xs text-indigo-100 mt-1">Tỷ lệ có việc làm</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Scroll hint */}
            <AnimatedSection animation="fade-up" delay={900}>
              <div className="hidden lg:flex items-center mt-12 text-indigo-200 text-sm">
                <ChevronDown size={20} className="mr-2 animate-bounce" />
                Cuộn xuống để tìm hiểu thêm
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Cards */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <AnimatedSection animation="fade-left" delay={800}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Animated Info Cards */}
                {HERO_INFO_CARDS.map((card, index) => (
                  <div
                    key={card.id}
                    className="transform transition-all duration-500 hover:scale-105"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animationDuration: '1s',
                      animationFillMode: 'both',
                      animationName: 'fadeInUp'
                    }}
                  >
                    <InfoCard
                      icon={card.icon}
                      iconBg={card.iconBg}
                      iconColor={card.iconColor}
                      title={card.title}
                      description={card.description}
                      rotation={card.rotation}
                      className={`${card.className} shadow-xl`}
                    />
                  </div>
                ))}

                {/* CTA Card */}
                <div
                  className={`${HERO_CTA_CARD.className} shadow-xl transform transition-all duration-500 hover:scale-105 relative overflow-hidden`}
                  style={{
                    animationDelay: '600ms',
                    animationDuration: '1s',
                    animationFillMode: 'both',
                    animationName: 'fadeInUp'
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 rounded-full filter blur-xl opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-500 rounded-full filter blur-xl opacity-20"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <Award size={20} className="text-yellow-300 mr-2" />
                      <h3 className="font-bold text-xl">{HERO_CTA_CARD.title}</h3>
                    </div>
                    <p className="mb-4">{HERO_CTA_CARD.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-indigo-200">Còn lại</span>
                        <span className="text-xl font-bold">{HERO_CTA_CARD.slots} slots</span>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        -{HERO_CTA_CARD.discount} ưu đãi
                      </div>
                    </div>

                    <button
                      className="w-full mt-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-300"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Technology bar */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <div className="mt-16 lg:mt-24 backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
            <div className="text-center mb-4">
              <p className="text-indigo-200 text-sm font-medium">Công nghệ bạn sẽ được học</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.id} className="flex flex-col items-center">
                  <div className="w-14 h-14 flex items-center justify-center p-2 bg-white/10 rounded-lg mb-2 transition-all duration-300 hover:bg-white/20 hover:scale-110">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-indigo-100">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default Hero;