
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with XAUUSD chart overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black z-0">
        <div className="absolute inset-0 bg-[url('./assets/xauusd-chart.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Animated circles in the background */}
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center">
              <Star className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
            Earn 2% Daily Returns<br />
            <span className="text-primary">on Gold</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powered by six AI engines—Gemini 2.5, GPT-4 mini, Claude Sonnet, et al.—trading XAUUSD 
            with 4/6 consensus entry logic.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-md"
              >
                Get Started
              </Button>
            </Link>
            <Link to="/ai-engine">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-md flex items-center gap-2"
              >
                Learn More <ArrowDown className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          {/* Stats bar */}
          <div className="mt-16 py-4 px-6 glass-morphism rounded-lg max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-center">
              <div className="flex flex-col">
                <span className="font-bold text-white">2%</span>
                <span className="text-gray-400">Daily ROI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">20</span>
                <span className="text-gray-400">Trading Days/Month</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">10%</span>
                <span className="text-gray-400">Referral Bonus</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">20</span>
                <span className="text-gray-400">Levels Deep</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">$20K</span>
                <span className="text-gray-400">→ $100/mo Royalty</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">$50K</span>
                <span className="text-gray-400">→ Lifetime Royalty</span>
              </div>
            </div>
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
