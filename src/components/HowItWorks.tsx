
import React from 'react';
import { Check, Lock, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'Sign Up & KYC',
      description: 'Complete our instant verification process that is fully GDPR and AML/KYC compliant.',
      icon: <Lock className="w-10 h-10" />,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'AI Trades 24/7',
      description: 'Our system uses adaptive allocation and strict drawdown controls to maximize your returns.',
      icon: <TrendingUp className="w-10 h-10" />,
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Receive 2% Daily',
      description: 'Choose to auto-compound your earnings or withdraw within 24 hours, it\'s entirely up to you.',
      icon: <Check className="w-10 h-10" />,
      color: 'from-primary to-accent',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black/30 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">How It Works</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our streamlined process makes earning passive income with AI trading simple and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Number indicator */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center bg-background border border-gray-700 z-10">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>

              {/* Card */}
              <div className="h-full glass-morphism rounded-lg p-8 card-hover">
                {/* Icon with gradient background */}
                <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r", step.color)}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {/* Connector line (only between cards) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
