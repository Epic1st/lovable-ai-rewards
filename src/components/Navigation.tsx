
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-white flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="url(#paint0_linear)"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="21.02" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
            Lovable
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white cursor-pointer">Benefits</a>
          <a onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white cursor-pointer">How It Works</a>
          <a onClick={() => scrollToSection('performance')} className="text-gray-300 hover:text-white cursor-pointer">Performance</a>
          <a onClick={() => scrollToSection('tiers')} className="text-gray-300 hover:text-white cursor-pointer">Account Tiers</a>
          <a onClick={() => scrollToSection('mlm')} className="text-gray-300 hover:text-white cursor-pointer">MLM Plan</a>
          <a onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white cursor-pointer">FAQ</a>
        </nav>

        <Button onClick={() => scrollToSection('signup')} className="hidden md:block bg-primary hover:bg-primary/90 text-white">
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span 
              className={cn(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "transform rotate-45 translate-y-2.5" : ""
              )}
            />
            <span 
              className={cn(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "w-full h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen ? "transform -rotate-45 -translate-y-2.5" : ""
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden bg-background/95 backdrop-blur-sm",
          isMobileMenuOpen ? "max-h-96 py-4 border-t border-gray-800" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a onClick={() => scrollToSection('benefits')} className="text-gray-300 hover:text-white py-2 cursor-pointer">Benefits</a>
          <a onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white py-2 cursor-pointer">How It Works</a>
          <a onClick={() => scrollToSection('performance')} className="text-gray-300 hover:text-white py-2 cursor-pointer">Performance</a>
          <a onClick={() => scrollToSection('tiers')} className="text-gray-300 hover:text-white py-2 cursor-pointer">Account Tiers</a>
          <a onClick={() => scrollToSection('mlm')} className="text-gray-300 hover:text-white py-2 cursor-pointer">MLM Plan</a>
          <a onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white py-2 cursor-pointer">FAQ</a>
          <Button onClick={() => scrollToSection('signup')} className="w-full bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
