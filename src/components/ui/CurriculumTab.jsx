import React from 'react';
import { CheckCircle, Clock, Calendar, BookOpen, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CurriculumTab = ({ 
  title, 
  isActive, 
  onClick,
  index
}) => {
  // Trích xuất số module và tên module
  const moduleMatch = title.match(/([IVX]+)\.\s(.+?)\s\(/);
  const moduleNumber = moduleMatch ? moduleMatch[1] : '';
  const moduleName = moduleMatch ? moduleMatch[2] : title;
  
  // Trích xuất thời gian
  const durationMatch = title.match(/\(([^)]+)\)/);
  const duration = durationMatch ? durationMatch[1] : '';

  // Gradient backgrounds
  const gradients = [
    'from-blue-600 to-indigo-700',
    'from-purple-600 to-indigo-700',
    'from-emerald-600 to-teal-700',
    'from-amber-600 to-orange-700',
    'from-red-600 to-rose-700',
    'from-cyan-600 to-blue-700',
    'from-violet-600 to-purple-700',
    'from-fuchsia-600 to-pink-700',
    'from-green-600 to-emerald-700',
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`p-4 mb-4 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden relative ${
        isActive 
          ? `bg-gradient-to-r ${gradient} text-white shadow-lg transform scale-102` 
          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
      onClick={onClick}
      whileHover={{ 
        scale: isActive ? 1.02 : 1.01,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Decorative elements */}
      {isActive && (
        <>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full -mt-10 -mr-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-5 rounded-full -mb-8 -ml-8"></div>
        </>
      )}
      
      <div className="flex items-center">
        {/* Module number circle */}
        <motion.div 
          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all ${
            isActive 
              ? 'bg-white bg-opacity-20 text-white border-2 border-white border-opacity-30' 
              : `bg-gradient-to-br ${gradient} bg-opacity-10 text-gray-700`
          }`}
          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-bold text-sm">{moduleNumber}</span>
        </motion.div>
        
        <div className="flex-1">
          <h3 className={`font-bold text-sm md:text-base transition-all ${isActive ? 'text-white' : 'text-gray-800'}`}>
            {moduleName}
          </h3>
          
          {duration && (
            <div className="flex items-center mt-1.5">
              <Clock size={14} className={isActive ? "text-white text-opacity-70" : "text-gray-400"} />
              <span className={`text-xs ml-1.5 ${isActive ? "text-white text-opacity-80" : "text-gray-500"}`}>
                {duration}
              </span>
            </div>
          )}
        </div>
        
        {/* Arrow indicator */}
        <motion.div 
          animate={{ x: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-6 h-6 flex items-center justify-center ${isActive ? 'visible' : 'invisible'}`}
        >
          <ArrowRight size={16} className="text-white" />
        </motion.div>
      </div>
      
      {/* Progress indicator - only visible when active */}
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-30"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

export const CurriculumContent = ({ 
  title, 
  content, 
  image, 
  details,
  isActive,
  index
}) => {
  // Trích xuất module number, name và duration
  const moduleMatch = title.match(/([IVX]+)\.\s(.+?)\s\(/);
  const moduleNumber = moduleMatch ? moduleMatch[1] : '';
  const moduleName = moduleMatch ? moduleMatch[2] : title;
  
  const durationMatch = title.match(/\(([^)]+)\)/);
  const duration = durationMatch ? durationMatch[1] : '';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };
  
  // Gradient backgrounds
  const gradients = [
    'from-blue-600 to-indigo-700',
    'from-purple-600 to-indigo-700',
    'from-emerald-600 to-teal-700',
    'from-amber-600 to-orange-700',
    'from-red-600 to-rose-700',
    'from-cyan-600 to-blue-700',
    'from-violet-600 to-purple-700',
    'from-fuchsia-600 to-pink-700',
    'from-green-600 to-emerald-700',
  ];
  
  const gradient = gradients[index % gradients.length];
  
  if (!isActive) {
    return null; // Don't render if not active
  }
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-xl overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      key={title}
      layoutId={`curriculum-content-${index}`}
    >
      <div className="relative">
        {/* Header with gradient overlay */}
        <motion.div className="h-52 md:h-72 relative overflow-hidden" variants={itemVariants}>
          <img 
            src={image || "/api/placeholder/800/400"} 
            alt={moduleName} 
            className="h-full w-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex flex-wrap items-center mb-3 gap-2">
                <motion.span 
                  className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Module {moduleNumber}
                </motion.span>
                <motion.span 
                  className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Clock size={12} className="mr-1.5" />
                  {duration}
                </motion.span>
              </div>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {moduleName}
              </motion.h2>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -mb-12 -ml-12"></div>
        </motion.div>
        
        {/* Content section */}
        <div className="p-6 md:p-8 md:h-[560px]">
          {/* Overview */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center mb-5">
              <div className={`bg-gradient-to-br ${gradient} p-2.5 rounded-lg text-white mr-4 shadow-sm`}>
                <BookOpen size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Tổng quan</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">{content}</p>
          </motion.div>
          
          {/* Content details */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center mb-5">
              <div className="bg-green-600 p-2.5 rounded-lg text-white mr-4 shadow-sm">
                <Award size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Nội dung bạn sẽ học</h3>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <ul className="space-y-4">
                {details.map((detail, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Project preview */}
         
        </div>
      </div>
    </motion.div>
  );
};

export default CurriculumTab;