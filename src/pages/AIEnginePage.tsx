
import React, { useEffect } from 'react';
import AIEngine from '@/components/AIEngine';
import AOS from 'aos';

const AIEnginePage: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when the page loads
    console.log("AIEnginePage mounted - refreshing AOS");
    AOS.refresh();
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Set a timeout to ensure all elements are rendered
    const timeoutId = setTimeout(() => {
      console.log("AIEnginePage timeout - refreshing AOS again");
      AOS.refresh();
    }, 200);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="pt-24">
      <div className="py-10 bg-black/30">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gradient text-center">AI Trading Engine</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Learn how our advanced AI consensus system delivers consistent 2% daily returns.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AIEngine />
      </div>
    </main>
  );
};

export default AIEnginePage;
