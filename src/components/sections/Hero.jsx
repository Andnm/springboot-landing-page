import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import InfoCard from '../ui/InfoCard';
import { HERO_INFO_CARDS, HERO_CTA_CARD } from '../../constants/data';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <AnimatedSection
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white"
      animation="fade-in"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-pulse">
                Trở thành Spring Boot Developer chuyên nghiệp trong 6 tháng
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl mb-8">
                Khóa học Spring Boot toàn diện với những kiến thức thực tế và project thực chiến giúp bạn sẵn sàng cho công việc Java Backend Developer lương cao.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                >
                  Đăng ký ngay
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/features')}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <AnimatedSection animation="fade-left" delay={800}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {HERO_INFO_CARDS.map(card => (
                  <InfoCard
                    key={card.id}
                    icon={card.icon}
                    iconBg={card.iconBg}
                    iconColor={card.iconColor}
                    title={card.title}
                    description={card.description}
                    rotation={card.rotation}
                    className={card.className}
                  />
                ))}

                <div className={HERO_CTA_CARD.className}>
                  <h3 className="font-bold text-xl mb-3">{HERO_CTA_CARD.title}</h3>
                  <p className="mb-4">{HERO_CTA_CARD.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Còn {HERO_CTA_CARD.slots} slots</span>
                    <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">-{HERO_CTA_CARD.discount} ưu đãi</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;