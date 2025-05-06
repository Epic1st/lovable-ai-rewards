
import React from 'react';
import { Badge, BadgeDollarSign, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const MLMPlan: React.FC = () => {
  const mlmFeatures = [
    {
      title: "2% per Day",
      description: "Every participant's deposit instantly earns 2% daily returns without exception.",
      icon: <BadgeDollarSign className="w-8 h-8 text-primary" />,
    },
    {
      title: "10% Direct Referral Bonus",
      description: "Earn 10% of each personally referred deposit, credited immediately upon deposit.",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: "20 Levels Deep",
      description: "Build your downline 20 levels deep for substantial residual commissions.",
      icon: <Badge className="w-8 h-8 text-primary" />,
    },
    {
      title: "Royalty Income",
      description: "Kickstarts with your first deposit, providing lifetime ongoing residuals.",
      icon: <Award className="w-8 h-8 text-primary" />,
    }
  ];

  const milestones = [
    {
      volume: "$20,000 Group Volume",
      reward: "Unlock $100/month royalty",
      color: "from-blue-500 to-cyan-400"
    },
    {
      volume: "$50,000 Balanced Volume",
      reward: "Lifetime royalty upgrade",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="mlm" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute w-96 h-96 rounded-full bg-purple-900/10 blur-3xl -top-20 right-20 animate-pulse"></div>
      <div className="absolute w-64 h-64 rounded-full bg-blue-900/10 blur-3xl bottom-10 left-10" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">MLM Compensation Plan</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Build your team and earn passive income through our generous multi-level marketing structure.
          </p>
        </div>

        {/* Main MLM Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mlmFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-morphism rounded-lg p-6 card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-accent/10">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Team Volume Milestones */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-8">Team Volume Milestones</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-lg p-8 text-center bg-gradient-to-r",
                  milestone.color
                )}
                data-aos="scale-in"
                data-aos-delay={index * 200}
              >
                <h4 className="text-2xl font-bold mb-3">{milestone.volume}</h4>
                <div className="w-12 h-1 bg-white mx-auto mb-3"></div>
                <p className="text-lg">{milestone.reward}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MLM Structure Visualization */}
        <div className="glass-morphism rounded-lg p-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-center mb-6">MLM Structure Visualization</h3>
          
          {/* Simple MLM Tree Structure */}
          <div className="relative max-w-3xl mx-auto h-64 md:h-96">
            {/* Level 1 - You */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
              YOU
            </div>
            
            {/* Connecting Lines */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-primary"></div>
            <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-60 md:w-96 h-0.5 bg-primary"></div>
            
            {/* Level 2 - Direct Referrals */}
            <div className="absolute top-32 left-1/4 transform -translate-x-1/2 w-16 h-16 bg-purple-500/80 rounded-full flex items-center justify-center text-white font-bold">
              10%
            </div>
            <div className="absolute top-32 left-3/4 transform -translate-x-1/2 w-16 h-16 bg-purple-500/80 rounded-full flex items-center justify-center text-white font-bold">
              10%
            </div>
            
            {/* More connecting lines */}
            <div className="absolute top-48 left-1/4 transform -translate-x-1/2 w-0.5 h-8 bg-blue-500/80"></div>
            <div className="absolute top-48 left-3/4 transform -translate-x-1/2 w-0.5 h-8 bg-blue-500/80"></div>
            
            {/* Level 3 - Deeper levels indication */}
            <div className="absolute top-56 left-[12.5%] transform -translate-x-1/2 w-12 h-12 bg-blue-500/60 rounded-full flex items-center justify-center text-white font-bold text-xs">
              L3
            </div>
            <div className="absolute top-56 left-[37.5%] transform -translate-x-1/2 w-12 h-12 bg-blue-500/60 rounded-full flex items-center justify-center text-white font-bold text-xs">
              L3
            </div>
            <div className="absolute top-56 left-[62.5%] transform -translate-x-1/2 w-12 h-12 bg-blue-500/60 rounded-full flex items-center justify-center text-white font-bold text-xs">
              L3
            </div>
            <div className="absolute top-56 left-[87.5%] transform -translate-x-1/2 w-12 h-12 bg-blue-500/60 rounded-full flex items-center justify-center text-white font-bold text-xs">
              L3
            </div>
            
            {/* Depth indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-gray-400">Structure continues up to <span className="text-white font-bold">20 Levels Deep</span></p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Our binary compensation plan allows for balanced team growth with volume carry-forward, 
              ensuring you maximize your earnings potential through width and depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLMPlan;
