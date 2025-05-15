import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CurriculumTab, { CurriculumContent } from '../ui/CurriculumTab';
import { CURRICULUM } from '../../constants/data';
import { BookOpen, Calendar, TrendingUp, Flag } from 'lucide-react';
import CurriculumProgress from '../ui/CurriculumProgress';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isInView, setIsInView] = useState(false);
  
  // Tính tổng số tuần
  const totalWeeks = CURRICULUM.reduce((sum, item) => {
    const durationMatch = item.title.match(/\((\d+)\s+tuần\)/);
    return sum + (durationMatch ? parseInt(durationMatch[1]) : 0);
  }, 0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  // Auto scroll to top of content when changing tabs
  useEffect(() => {
    if (window.innerWidth < 1024) { // Only scroll on mobile and tablet
      const contentElement = document.getElementById('curriculum-content');
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeTab]);
  
  return (
    <section
      id="curriculum"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-50 opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-50 opacity-60"></div>
      
      {/* Floating shapes */}
      <motion.div 
        className="absolute top-1/4 left-10 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-300 to-indigo-300 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-10 h-10 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-20"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsInView(true)}
        >
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Lộ trình học {totalWeeks} tuần
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chương trình học được thiết kế theo trình tự từ cơ bản đến nâng cao, giúp bạn tiến bộ từng bước một cách vững chắc
          </p>
        </motion.div>
        
        {/* Cards first */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
            {/* Learning Philosophy Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full -mt-16 -mr-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-lg shadow-md mr-4 text-white">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Giáo trình chất lượng cao</h3>
              </div>
              <p className="text-gray-600 relative z-10">
                Giáo trình được biên soạn bởi Senior với nhiều năm kinh nghiệm, bám sát nhu cầu thực tế của doanh nghiệp.
              </p>
            </div>
            
            {/* Practical Approach Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm border border-green-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 opacity-5 rounded-full -mt-16 -mr-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2.5 rounded-lg shadow-md mr-4 text-white">
                  <Calendar size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Học qua dự án thực tế</h3>
              </div>
              <p className="text-gray-600 relative z-10">
                Không chỉ lý thuyết, bạn sẽ được thực hành thông qua các dự án thực tế và xây dựng portfolio chuyên nghiệp.
              </p>
            </div>
            
            {/* Career Growth Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border border-purple-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full -mt-16 -mr-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-2.5 rounded-lg shadow-md mr-4 text-white">
                  <TrendingUp size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Phát triển sự nghiệp</h3>
              </div>
              <p className="text-gray-600 relative z-10">
                Hỗ trợ cải thiện CV, phỏng vấn giả lập và kết nối với các cơ hội việc làm phù hợp sau khi tốt nghiệp.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Progress timeline MOVED HERE (after cards) */}
        <motion.div 
          className="mb-16 bg-white rounded-xl shadow-md p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CurriculumProgress 
            items={CURRICULUM} 
            activeIndex={activeTab - 1}
            onSelectItem={(index) => setActiveTab(index + 1)}
            isInView={isInView}
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div id="curriculum-tabs" className="w-full lg:w-1/3 overflow-hidden lg:overflow-y-auto lg:max-h-[850px] lg:pr-4 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100">
              <div className="space-y-3">
                {CURRICULUM.map((item, index) => (
                  <CurriculumTab
                    key={item.id}
                    title={item.title}
                    isActive={activeTab === item.id}
                    onClick={() => setActiveTab(item.id)}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div id="curriculum-content" className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                {CURRICULUM.map((item, index) => (
                  <CurriculumContent
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    image={item.image}
                    details={item.details}
                    isActive={activeTab === item.id}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
        
        {/* Goal statement */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-px rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-8">
            <div className="bg-white px-8 py-3 rounded-full flex items-center gap-2">
              <Flag size={20} className="text-indigo-600" />
              <span className="text-lg font-medium text-gray-800">Mục tiêu khóa học</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Trở thành một <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Spring Boot Developer</span> chuyên nghiệp
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sau khi hoàn thành khóa học, bạn sẽ tự tin xây dựng ứng dụng Spring Boot hoàn chỉnh 
            và sẵn sàng cho vị trí Java Backend Developer tại các công ty phần mềm hàng đầu.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;