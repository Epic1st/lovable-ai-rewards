
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
import AOS from 'aos';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Refresh AOS animations when the page loads
    AOS.refresh();
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Performance />
      <Security />
      <MLMPlan />
      <Testimonials />
      <FAQ />
      <LeadCapture />
    </main>
  );
};

export default HomePage;
