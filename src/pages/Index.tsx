
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Performance from '@/components/Performance';
import AccountTiers from '@/components/AccountTiers';
import MLMPlan from '@/components/MLMPlan';
import Security from '@/components/Security';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadCapture from '@/components/LeadCapture';
import Footer from '@/components/Footer';

// Define AOS animation initialization
interface AOS {
  init: () => void;
  refresh: () => void;
}

declare global {
  interface Window {
    AOS?: AOS;
  }
}

const Index = () => {
  useEffect(() => {
    // Refresh AOS animations when the component mounts
    if (window.AOS) {
      window.AOS.refresh();
    }
    
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Simulating AOS initialization
    const simulateAOS = () => {
      const elements = document.querySelectorAll('[data-aos]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(element => {
        observer.observe(element);
      });
    };

    // Run the AOS simulation once the component is mounted
    simulateAOS();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
    </div>
  );
};

export default Index;
