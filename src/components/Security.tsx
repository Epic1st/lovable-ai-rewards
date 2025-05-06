
import React from 'react';
import { Shield, ShieldCheck, Lock, Database } from 'lucide-react';

const Security: React.FC = () => {
  const securityFeatures = [
    {
      title: 'SOC 2 Type II & ISO 27001',
      description: 'Enterprise-grade security standards with regular third-party security audits.',
      icon: <Shield className="w-10 h-10 text-primary" />,
    },
    {
      title: 'GDPR & AML/KYC Compliant',
      description: 'Fully compliant with global data protection and anti-money laundering regulations.',
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    },
    {
      title: 'Segregated Client Funds',
      description: 'Your funds are kept in segregated accounts at top-tier financial institutions.',
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous monitoring systems with real-time reporting and alerts.',
      icon: <Lock className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="security" className="py-20 bg-black/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Security & Compliance</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We prioritize your security with industry-leading protection measures and compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-morphism rounded-lg p-6 card-hover transform transition-all duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 p-3 rounded-full bg-accent/10 w-fit">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Security Badge/Shield */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block p-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20">
            <ShieldCheck className="w-20 h-20 text-primary" />
          </div>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Your security is our top priority. We employ bank-level encryption and security protocols to ensure 
            your data and investments remain safe at all times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
