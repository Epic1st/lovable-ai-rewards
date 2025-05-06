
import React, { useEffect } from 'react';
import MLMPlan from '@/components/MLMPlan';
import AOS from 'aos';

const MLMPlanPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gradient text-center">MLM Compensation Plan</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Discover our generous 20-level deep MLM structure with significant income potential.
          </p>
        </div>
      </div>
      <MLMPlan />
    </main>
  );
};

export default MLMPlanPage;
