
import React, { useEffect } from 'react';
import AccountTiers from '@/components/AccountTiers';
import AOS from 'aos';

const AccountsPage: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when the page loads
    if (typeof AOS !== 'undefined' && AOS.refresh) {
      AOS.refresh();
    }
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    console.log("AccountsPage component mounted");
  }, []);

  return (
    <main className="pt-24">
      <div className="py-10 bg-black/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gradient text-center">Account Tiers & Pricing</h1>
          <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
            Compare our account options and choose the best fit for your investment goals.
          </p>
        </div>
      </div>
      <AccountTiers />
    </main>
  );
};

export default AccountsPage;
