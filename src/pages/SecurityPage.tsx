
import React, { useEffect } from 'react';
import Security from '@/components/Security';
import AOS from 'aos';

const SecurityPage: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gradient text-center">Security & Compliance</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Learn about our robust security measures and compliance standards.
          </p>
        </div>
      </div>
      <Security />
    </main>
  );
};

export default SecurityPage;
