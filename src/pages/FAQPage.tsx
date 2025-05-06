
import React, { useEffect } from 'react';
import FAQ from '@/components/FAQ';
import AOS from 'aos';

const FAQPage: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when the page loads
    AOS.refresh();
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <div className="py-10 bg-black/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gradient text-center">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Get answers to common questions about our platform, returns, and compensation plan.
          </p>
        </div>
      </div>
      <FAQ />
    </main>
  );
};

export default FAQPage;
