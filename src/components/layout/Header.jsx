import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Spring Academy
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              to={`/${link.href.replace('#', '')}`}
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button
              variant={isScrolled ? 'primary' : 'outline'}
              size="sm"
              onClick={() => navigate('/contact')}

            >
              Đăng ký ngay
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                to={`/${link.href.replace('#', '')}`}
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button
                variant="primary"
                fullWidth
                onClick={() => navigate('/contact')}
              >
                Đăng ký ngay
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;