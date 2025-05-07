
import React, { useEffect } from 'react';
import AccountTiers from '@/components/AccountTiers';
import AOS from 'aos';

const AccountsPage: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when the page loads
    console.log("AccountsPage mounted - refreshing AOS");
    AOS.refresh();
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Set a timeout to ensure all elements are rendered
    const timeoutId = setTimeout(() => {
      console.log("AccountsPage timeout - refreshing AOS again");
      AOS.refresh();
    }, 200);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="pt-24">
      <div className="py-10 bg-black/30">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gradient text-center">Account Tiers & Pricing</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Compare our account options and choose the best fit for your investment goals.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AccountTiers />
      </div>
    </main>
  );
};

export default AccountsPage;
