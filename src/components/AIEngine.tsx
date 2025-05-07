
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Star, 
  Brain, 
  BarChart, 
  Shield, 
  ArrowRightLeft, 
  Network 
} from 'lucide-react';

const AIEngine: React.FC = () => {
  useEffect(() => {
    // Manually trigger AOS animations on component mount
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const aiModels = [
    { name: "Gemini 2.5", color: "from-blue-500 to-blue-700" },
    { name: "GPT-4 mini", color: "from-green-500 to-green-700" },
    { name: "Claude Sonnet", color: "from-purple-500 to-purple-700" },
    { name: "Anthropic Claude 2", color: "from-orange-500 to-orange-700" },
    { name: "Cohere Command", color: "from-pink-500 to-pink-700" },
    { name: "Meta LLaMA", color: "from-yellow-500 to-yellow-700" },
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Real-time ML",
      description: "Continuous learning from market data to identify emerging patterns."
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Ensemble Decision-Making",
      description: "4/6 AI consensus required for trade execution, minimizing false signals."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Custom Risk Controls",
      description: "Proprietary drawdown limits and position sizing algorithms."
    },
    {
      icon: <ArrowRightLeft className="w-12 h-12" />,
      title: "API-First Architecture",
      description: "Direct integration with top-tier brokers for instant execution."
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Six-AI Consensus Trading</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our engine monitors XAUUSD 24/7 via APIs to six leading AI models. A trade executes only when <span className="text-white font-semibold">4 out of 6 AIs</span> confirm entry signals—maximizing accuracy and reducing false signals.
          </p>
        </div>

        {/* AI Models Network Visualization */}
        <div className="relative mb-20 h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Node */}
            <div className="z-10 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl border border-primary flex items-center justify-center text-center p-4 shadow-lg shadow-primary/20">
              <div>
                <Network className="mx-auto w-8 h-8 mb-1 text-white" />
                <span className="text-sm font-bold">4/6 Consensus</span>
              </div>
            </div>
            
            {/* Connecting Lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                {/* Connecting lines from AI models to center */}
                <line x1="70" y1="100" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="70" y1="300" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="330" y1="100" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="330" y1="300" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="70" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="330" x2="200" y2="200" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Arrow to Trade Execution */}
                <line x1="250" y1="200" x2="350" y2="200" stroke="url(#line-gradient)" strokeWidth="3" />
                <polygon points="350,200 340,195 340,205" fill="url(#line-gradient)" />
              </svg>
            </div>
            
            {/* AI Model Nodes */}
            {aiModels.map((model, index) => {
              // Calculate position for nodes in a circle around center
              const angle = (index * (360 / aiModels.length)) * (Math.PI / 180);
              const radius = 150; // Distance from center
              const x = Math.cos(angle) * radius + 50; // +50 to center within the svg viewBox
              const y = Math.sin(angle) * radius + 50;
              
              let style = {};
              
              // Position each node around the circle
              if (index === 0) style = { top: '10%', left: '15%' }; // Top left
              if (index === 1) style = { top: '10%', right: '15%' }; // Top right
              if (index === 2) style = { top: '40%', left: '5%' }; // Middle left
              if (index === 3) style = { top: '40%', right: '5%' }; // Middle right
              if (index === 4) style = { bottom: '10%', left: '15%' }; // Bottom left
              if (index === 5) style = { bottom: '10%', right: '15%' }; // Bottom right
              
              return (
                <div 
                  key={model.name}
                  className={cn(
                    "absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center p-2 shadow-lg", 
                    `animate-pulse`
                  )}
                  style={{
                    ...style,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="text-center">
                    <div className={cn("w-10 h-10 mx-auto rounded-full mb-1 flex items-center justify-center bg-gradient-to-r", model.color)}>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-medium">{model.name}</span>
                  </div>
                </div>
              );
            })}
            
            {/* Trade Execution Node */}
            <div 
              className="absolute right-10 w-28 h-28 rounded-full bg-green-500/20 backdrop-blur-xl border border-green-500 flex items-center justify-center p-3 shadow-lg shadow-green-500/20"
              style={{ right: '10%' }}
            >
              <div className="text-center">
                <BarChart className="w-8 h-8 mx-auto mb-1 text-green-500" />
                <span className="text-sm font-bold">Trade<br />Execution</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-morphism rounded-lg p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="p-3 rounded-full bg-accent/10 w-fit mb-4">
                {React.cloneElement(feature.icon, { className: "text-primary" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Our engine operates 24/7, continuously analyzing the XAUUSD (Gold) market through state-of-the-art 
            AI models. By requiring a 4/6 consensus, we achieve a balance between capturing opportunities and 
            avoiding costly false signals.
          </p>
          <div className="inline-block">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Technical Specifications</h3>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• Fully automated API trading via multi-broker connections</li>
                <li>• Real-time market data feeds with microsecond latency</li>
                <li>• Secure AWS cloud infrastructure with 99.99% uptime</li>
                <li>• Proprietary algorithmic risk management framework</li>
                <li>• Daily AI model retraining on fresh market data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngine;
