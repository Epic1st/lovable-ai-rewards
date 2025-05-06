
import React, { useEffect } from 'react';
import ROICalculator from '@/components/ROICalculator';
import AOS from 'aos';

const ROICalculatorPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gradient text-center">ROI Calculator</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Calculate your potential earnings with our 2% daily returns.
          </p>
        </div>
      </div>
      <ROICalculator />
    </main>
  );
};

export default ROICalculatorPage;
