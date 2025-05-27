import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Star, Users, BarChart3, Calendar, Sparkles, Code, Database, Shield } from 'lucide-react';
import { COURSES } from '../../constants/data';
import { useNavigate } from 'react-router-dom';

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/10 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

const SkillsMarquee = ({ skills, direction = "left" }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -33.33 * skills.length * 8] : [-33.33 * skills.length * 8, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: skills.length * 8,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.span
            key={`${skill}-${index}`}
            className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:from-white/30 hover:to-white/20 hover:scale-105 flex-shrink-0"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const GlowingCard = ({ isActive, gradient, children, onClick }) => (
  <motion.div
    onClick={onClick}
    className="relative group cursor-pointer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
    <div className={`relative bg-gradient-to-r ${gradient} p-[1px] rounded-2xl ${isActive ? 'shadow-2xl shadow-cyan-500/25' : ''}`}>
      <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-4 h-full">
        {children}
      </div>
    </div>
  </motion.div>
);

const Courses = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    'Microservices Architecture',
    'Domain Driven Design',
    'Spring Security',
    'RESTful APIs',
    'Database Design',
    'System Programming'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentCourse = COURSES[activeCategory];

  return (
    <section id="courses" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <FloatingParticles />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Premium Courses</span>
          </motion.div>
          
          <motion.h1
            className="text-6xl font-bold pb-5 pt-5 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Khóa học đang tuyển sinh
          </motion.h1>
          
          <motion.div
            className="text-2xl text-gray-300 h-12 overflow-hidden relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute left-0 right-0 flex justify-center">
              <motion.div
                key={currentTextIndex}
                className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                initial={{ y: 30, opacity: 0, rotateX: 90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -30, opacity: 0, rotateX: -90 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {texts[currentTextIndex]}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Course Categories */}
          <motion.div 
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {COURSES.map((course, index) => (
              <GlowingCard
                key={course.id}
                isActive={activeCategory === index}
                gradient={course.gradient}
                onClick={() => setActiveCategory(index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${course.gradient}`} />
                  <div>
                    <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-2 mt-1">
                      <BarChart3 className="w-3 h-3" />
                      {course.level}
                    </div>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </motion.div>

          {/* Main Course Display */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              key={activeCategory}
              className="relative group"
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentCourse.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className={`relative bg-gradient-to-br ${currentCourse.gradient} p-[2px] rounded-3xl`}>
                <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-10">
                  {/* Course Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${currentCourse.gradient}`}>
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      Khoá học Premium
                    </span>
                  </div>

                  <motion.h2 
                    className="text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {currentCourse.title}
                  </motion.h2>

                  <motion.p 
                    className="text-xl mb-8 text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {currentCourse.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div 
                    className="flex items-center gap-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/20 rounded-full px-4 py-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xl font-bold text-yellow-400">
                        {currentCourse.rating}
                      </span>
                      <span className="text-sm text-gray-400">rating</span>
                    </div>

                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-xl font-bold text-blue-400">
                        {currentCourse.students}
                      </span>
                      <span className="text-sm text-gray-400">học viên</span>
                    </div>
                  </motion.div>

                  {/* Course Details */}
                  <motion.div 
                    className="flex items-center gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-400">
                        {currentCourse.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-sm font-medium text-purple-400">
                        {currentCourse.duration}
                      </span>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className={`group relative overflow-hidden bg-gradient-to-r ${currentCourse.gradient} text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25`}
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <span className="relative z-10 flex items-center gap-2" onClick={() => navigate('/contact')}>
                      Đăng ký ngay
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl blur-xl" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Nội dung giảng dạy
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <SkillsMarquee skills={currentCourse.skills.slice(0, Math.ceil(currentCourse.skills.length / 2))} direction="left" />
                  <SkillsMarquee skills={currentCourse.skills.slice(Math.ceil(currentCourse.skills.length / 2))} direction="right" />
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <h4 className="font-semibold text-emerald-400">Cam kết chất lượng</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Giảng viên kinh nghiệm 5+ năm
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Tài liệu cập nhật mới nhất
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Hỗ trợ 24/7 trong khóa học
                  </li>
                  
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;