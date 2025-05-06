
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black z-0">
        <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-10"></div>
      </div>

      {/* Animated circles in the background */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
            Earn 2% Daily Returns<br />
            <span className="text-primary">Powered by AI</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Trade Forex, Commodities, Indices & Crypto 24/7 with our proprietary engine.
            Our AI-driven platform handles everything so you can focus on watching your wealth grow.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('signup')} 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-md"
            >
              Get Started
            </Button>
            <Button 
              onClick={() => scrollToSection('benefits')} 
              variant="outline" 
              size="lg" 
              className="text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-md flex items-center gap-2"
            >
              Learn More <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
