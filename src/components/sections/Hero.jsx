import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Star, Users, Award, Code, Database, Server } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import InfoCard from '../ui/InfoCard';
import { HERO_INFO_CARDS, HERO_CTA_CARD, TECHNOLOGIES } from '../../constants/data';
import { motion } from 'framer-motion';

const Hero = () => {

  const [counts, setCounts] = useState({ projects: 0, hours: 0, employment: 0 });
  const targetCounts = { projects: 5, hours: 180, employment: 85 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const techIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  useEffect(() => {
    const duration = 2000; 
    const interval = 20; 
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.ceil(progress * targetCounts.projects),
        hours: Math.ceil(progress * targetCounts.hours),
        employment: Math.ceil(progress * targetCounts.employment)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white overflow-hidden"
      animation="fade-in"
    >
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
          <div className="w-full lg:w-1/2 lg:pr-12">
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
                Trở thành <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-300 to-cyan-500">Fullstack Developer</span> chuyên nghiệp trong 6 tháng
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl mb-8 text-indigo-100">
                Khóa học Fullstack toàn diện với những kiến thức thực tế và project thực chiến giúp bạn sẵn sàng cho công việc Fullstack Developer lương cao.
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

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              {[
                { value: counts.projects, label: "Projects thực tế", suffix: "+" },
                { value: counts.hours, label: "Giờ học thực hành", suffix: "+" },
                { value: counts.employment, label: "Tỷ lệ có việc làm", suffix: "%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-lg px-3 py-4 border border-white/10 shadow-xl hover:shadow-indigo-500/20"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs text-indigo-100 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <AnimatedSection animation="fade-up" delay={900}>
              <div className="hidden lg:flex items-center mt-12 text-indigo-200 text-sm">
                <ChevronDown size={20} className="mr-2 animate-bounce" />
                Cuộn xuống để tìm hiểu thêm
              </div>
            </AnimatedSection>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
            <AnimatedSection animation="fade-left" delay={800} className="w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto"
              >
                <img
                  src="/assets/svg/tech_circle.svg"
                  alt="Spring Boot Technology Circle"
                  className="w-full h-auto animate-float filter drop-shadow-2xl"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
              </motion.div>
            </AnimatedSection>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 lg:mt-24 backdrop-blur-md bg-gradient-to-r from-white/10 to-indigo-500/10 rounded-xl p-6 border border-white/10 shadow-xl"
        >
          <div className="text-center mb-6">
            <h3 className="text-white text-lg font-medium">Công nghệ bạn sẽ được học</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {TECHNOLOGIES && TECHNOLOGIES.map((tech) => (
              <motion.div
                key={tech.id}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <motion.div
                  className="w-16 h-16 flex items-center justify-center p-3 bg-gradient-to-br from-white/20 to-white/5 rounded-xl mb-2 border border-white/10 shadow-lg"
                  variants={techIconVariants}
                  whileHover="hover"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </motion.div>
                <span className="text-sm text-indigo-100 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;