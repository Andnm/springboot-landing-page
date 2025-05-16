import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const FeatureCard3D = ({ 
  icon: Icon, 
  iconBg, 
  iconColor, 
  title, 
  description, 
  delay = 0,
  gradient = 'from-blue-500 to-indigo-600',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const rotateY = ((e.clientX - cardCenterX) / (rect.width / 2)) * 5; 
    const rotateX = -((e.clientY - cardCenterY) / (rect.height / 2)) * 5; 
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="perspective-1000 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <motion.div
        className="relative overflow-hidden bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? "none" : "transform 0.5s ease-out"
        }}
      >
        {/* Glass shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-0"
          animate={{ 
            opacity: isHovered ? 0.3 : 0,
            left: isHovered ? "100%" : "-100%",
            top: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
          <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${gradient} -mt-20 -mr-20`}></div>
        </div>
        
        {/* Decorative bottom pattern */}
        <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradient}`}></div>
        
        {/* Icon container with gradient */}
        <motion.div 
          className="relative rounded-2xl w-16 h-16 flex items-center justify-center mb-6"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-90`}></div>
          <div className="absolute inset-0 rounded-2xl bg-white opacity-90 scale-95"></div>
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-80 scale-90 flex items-center justify-center`}>
            <Icon size={28} className="text-white" />
          </div>
          
          {/* Light reflection */}
          <motion.div 
            className="absolute inset-0 rounded-2xl bg-white opacity-0"
            animate={{ 
              opacity: isHovered ? [0, 0.5, 0] : 0,
            }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
          />
        </motion.div>
        
        {/* Content */}
        <motion.h3 
          className={`text-xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${gradient}`}
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 leading-relaxed"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
        >
          {description}
        </motion.p>
        
        {/* Floating particles */}
        {isHovered && (
          <>
            <motion.div 
              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ 
                x: [0, 30, 20], 
                y: [0, -20, -40], 
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2 }}
            />
            <motion.div 
              className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`}
              initial={{ x: 20, y: 20, opacity: 0 }}
              animate={{ 
                x: [20, 40, 30], 
                y: [20, 0, -20], 
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard3D;