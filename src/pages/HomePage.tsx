
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
    // Explicitly refresh AOS animations when HomePage mounts
    console.log("HomePage component mounted");
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Ensure AOS is initialized
    if (!AOS.instance) {
      console.log("Initializing AOS from HomePage");
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: false,
        offset: 120,
      });
    }

    // Refresh AOS to detect new elements
    AOS.refresh();
    
    // Set additional timeouts to ensure all elements are rendered and animations work
    const timeoutId = setTimeout(() => {
      console.log("HomePage timeout - refreshing AOS again");
      AOS.refresh();
    }, 100);
    
    const secondTimeoutId = setTimeout(() => {
      console.log("HomePage second timeout - refreshing AOS once more");
      AOS.refresh();
    }, 500);
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(secondTimeoutId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <div data-aos="fade-in" data-aos-duration="1000">
        <Hero />
      </div>

      {/* Benefits Section */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Benefits />
      </div>

      {/* How It Works Section */}
      <div data-aos="fade-up" data-aos-delay="100">
        <HowItWorks />
      </div>

      {/* Performance Dashboard */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Performance />
      </div>

      {/* Account Tiers */}
      <div data-aos="fade-up" data-aos-delay="100">
        <AccountTiers />
      </div>

      {/* MLM Plan */}
      <div data-aos="fade-up" data-aos-delay="100">
        <MLMPlan />
      </div>

      {/* Security & Compliance */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Security />
      </div>

      {/* Testimonials Carousel */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Testimonials />
      </div>

      {/* FAQs */}
      <div data-aos="fade-up" data-aos-delay="100">
        <FAQ />
      </div>

      {/* Lead Capture */}
      <div data-aos="fade-up" data-aos-delay="100">
        <LeadCapture />
      </div>
    </main>
  );
};

export default HomePage;
