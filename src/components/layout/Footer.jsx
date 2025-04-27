import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FOOTER_LINKS } from '../../constants/data';

const Footer = () => {
  const renderSocialIcon = (icon) => {
    switch (icon) {
      case 'facebook':
        return (
          <svg width="24" height="24" fill="currentColor" className="transform scale-110">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg width="24" height="24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg width="24" height="24" fill="currentColor">
            <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="24" height="24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Spring Boot Academy</h3>
            <p className="text-gray-400 max-w-sm">Đào tạo lập trình viên Java Spring Boot chuyên nghiệp từ cơ bản đến nâng cao.</p>
            <div className="flex space-x-4 mt-6">
              {FOOTER_LINKS.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Khóa học</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.courses.map((course, index) => (
                  <li key={index}>
                    <a href={course.href} className="text-gray-400 hover:text-white transition-colors">
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.support.map((support, index) => (
                  <li key={index}>
                    <a href={support.href} className="text-gray-400 hover:text-white transition-colors">
                      {support.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-primary-400" />
                  <a 
                    href={`mailto:${FOOTER_LINKS.contact.email}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {FOOTER_LINKS.contact.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-primary-400" />
                  <a 
                    href={`tel:${FOOTER_LINKS.contact.phone.replace(/\s/g, '')}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {FOOTER_LINKS.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Spring Boot Academy. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;