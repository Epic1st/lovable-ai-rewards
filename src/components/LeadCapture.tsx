
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Check } from 'lucide-react';

const LeadCapture: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gdprConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      gdprConsent: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon.",
        action: (
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-white" />
          </div>
        ),
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', gdprConsent: false });
    }, 1500);
  };

  return (
    <section id="signup" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-5"></div>
      
      {/* Animated gradient background */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl bottom-10 right-20 animate-pulse"></div>
        <div className="absolute w-64 h-64 rounded-full bg-accent/10 blur-3xl top-20 left-10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-morphism rounded-lg overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Now & Secure Your Spot</h2>
              <p className="text-gray-400 mb-8">
                Start earning 2% daily returns and building your multi-level marketing team today.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-gray-700"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox 
                      id="gdpr" 
                      checked={formData.gdprConsent}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <Label htmlFor="gdpr" className="text-sm text-gray-400">
                      I agree to receive communications and accept the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      <span className="flex items-center">Join Now <ArrowRight className="ml-2 h-5 w-5" /></span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Right side - Highlights */}
            <div className="bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-white">
              <h3 className="text-xl font-bold mb-6">Why Join Lovable?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>Earn 2% daily returns through AI-powered trading</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>10% direct referral bonus on all referrals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>Build a 20-level deep organization for passive income</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>Unlock lifetime royalty income at team milestones</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>Start with as little as $500 investment</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg font-semibold">Join our community of</p>
                <p className="text-3xl font-bold">10,000+ Successful Investors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
