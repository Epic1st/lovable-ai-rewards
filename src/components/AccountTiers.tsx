
import React, { useEffect } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AccountTiers: React.FC = () => {
  useEffect(() => {
    // Manually trigger AOS animations on component mount
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);
  
  const tiers = [
    {
      name: 'Standard',
      minDeposit: 500,
      dailyReturn: '2%',
      leverage: '1:200',
      features: [
        'Basic AI trading strategies',
        'Standard market access',
        'Email support',
        'Mobile app access',
        'Weekly reports'
      ],
      isPopular: false,
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Premium',
      minDeposit: 5000,
      dailyReturn: '2%',
      leverage: '1:300',
      features: [
        'Advanced AI trading signals',
        'Priority support 24/5',
        'Enhanced risk management',
        'Market analysis reports',
        'Dedicated account manager'
      ],
      isPopular: true,
      color: 'from-purple-600 to-blue-500'
    },
    {
      name: 'VIP',
      minDeposit: 25000,
      dailyReturn: '2%',
      leverage: '1:500',
      features: [
        'Premium AI strategies',
        '24/7 dedicated manager',
        'Custom risk profiles',
        'Fee-free withdrawals',
        'Exclusive investment opportunities'
      ],
      isPopular: false,
      color: 'from-accent to-primary'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tiers" className="py-20 bg-black/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Account Tiers</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the account tier that matches your investment goals and trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-lg overflow-hidden transition-all duration-300",
                tier.isPopular ? "transform md:-translate-y-4" : ""
              )}
            >
              {/* Popular badge */}
              {tier.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card content */}
              <div className={cn(
                "flex flex-col h-full glass-morphism border",
                tier.isPopular ? "border-primary/30" : "border-gray-800"
              )}>
                {/* Header with gradient */}
                <div className={cn(
                  "p-6 bg-gradient-to-r",
                  tier.color
                )}>
                  <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">${tier.minDeposit}</span>
                    <span className="text-white/80 pb-1">minimum</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow">
                  <div className="mb-6">
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-400">Daily Return</span>
                      <span className="font-semibold text-white">{tier.dailyReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Max Leverage</span>
                      <span className="font-semibold text-white">{tier.leverage}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-gray-800">
                  <Button 
                    onClick={() => scrollToSection('signup')}
                    className={cn(
                      "w-full flex items-center justify-center",
                      tier.isPopular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"
                    )}
                  >
                    Get Started <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTiers;
