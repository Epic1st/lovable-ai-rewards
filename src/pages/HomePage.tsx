
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import Performance from '@/components/Performance';
import MLMPlan from '@/components/MLMPlan';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadCapture from '@/components/LeadCapture';
import AccountTiers from '@/components/AccountTiers';
import AOS from 'aos';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when the page loads
    if (typeof AOS !== 'undefined' && AOS.refresh) {
      AOS.refresh();
    }
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Debug message to verify component loading
    console.log("HomePage component mounted");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Performance Dashboard */}
      <Performance />

      {/* Account Tiers */}
      <AccountTiers />

      {/* MLM Plan */}
      <MLMPlan />

      {/* Security & Compliance */}
      <Security />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* FAQs */}
      <FAQ />

      {/* Lead Capture */}
      <LeadCapture />
    </main>
  );
};

export default HomePage;
