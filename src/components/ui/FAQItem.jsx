import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ 
  question, 
  answer, 
  isOpen: initialOpen = false,
  delay = 0
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div 
      className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{question}</h3>
          {isOpen ? (
            <ChevronUp className="text-primary-600" />
          ) : (
            <ChevronDown className="text-primary-600" />
          )}
        </div>
        
        <div 
          className={`mt-4 text-gray-600 transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;