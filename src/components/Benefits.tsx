
import React from 'react';
import { BarChart, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: '24/7 Global Markets',
      description: 'Access Forex, Metals, Indices, and Crypto with continuous liquidity across all major markets.',
      icon: <BarChart className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Proprietary AI Strategies',
      description: 'Machine learning models scanning millions of ticks per second for optimal trading opportunities.',
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Raw Spreads from 0.0 pips',
      description: 'Direct liquidity provider feeds with zero markups for the most competitive trading conditions.',
      icon: <Users className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Up to 1:500 Leverage',
      description: 'Customize risk profiles from conservative to aggressive based on your trading experience.',
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Key Platform Benefits</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our AI-powered trading platform combines cutting-edge technology with financial expertise to deliver consistent returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-lg p-6 glass-morphism card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 p-3 rounded-full bg-accent/10 w-fit">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
