
import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard3D from '../ui/FeatureCard';
import { FEATURES } from '../../constants/data';
import { Link } from 'react-router-dom';

// Gradient variants for different cards
const GRADIENTS = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-pink-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-red-600',
  'from-cyan-500 to-sky-600'
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 opacity-60"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-50 to-pink-100 opacity-60"></div>
      
      {/* Floating shapes */}
      <motion.div 
        className="absolute top-40 right-20 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-300 to-indigo-300 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-300 to-teal-300 opacity-20"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tại sao chọn khóa học của chúng tôi?
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cung cấp trải nghiệm học tập đặc biệt với chương trình được thiết kế bởi các chuyên gia hàng đầu
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard3D
              key={feature.id}
              icon={feature.icon}
              iconBg={feature.iconBg}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              delay={index}
              gradient={GRADIENTS[index % GRADIENTS.length]}
            />
          ))}
        </motion.div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full inline-block hover:shadow-lg transform transition hover:-translate-y-1"
          >
            Đăng ký ngay hôm nay
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;