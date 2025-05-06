
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How is 2% daily calculated?",
      answer: "The 2% daily return is calculated based on your principal investment amount through our AI trading system operating across XAUUSD markets. Returns are credited to your account every 24 hours on trading days (Monday-Friday). Our AI consensus model ensures consistent performance through algorithmic gold trading strategies."
    },
    {
      question: "Which assets do you trade?",
      answer: "We exclusively focus on XAUUSD (Gold) trading. By specializing in a single highly liquid asset, our AI models have developed deep expertise and pattern recognition capabilities specific to gold price movements, allowing us to maximize performance and minimize risk through specialization."
    },
    {
      question: "What if fewer than 4 AIs agree?",
      answer: "No trade is executed. Our system requires at least 4 out of 6 AI models (Gemini 2.5, GPT-4 mini, Claude Sonnet, Anthropic Claude 2, Cohere Command, and Meta LLaMA) to agree on a trading signal before placing any trade. This consensus approach significantly reduces false signals and protects your capital from unnecessary risk."
    },
    {
      question: "How do I qualify for royalties?",
      answer: "You can qualify for royalties in two ways: 1) Reach $20,000 in group volume to earn $100/month royalty income; or 2) Achieve $50,000 balanced volume (across your left and right legs) to unlock our lifetime royalty upgrade. These royalties are paid monthly in addition to your daily 2% returns and referral commissions."
    },
    {
      question: "How fast are withdrawals?",
      answer: "Standard accounts: processed within 24-48 hours. Premium accounts enjoy expedited processing times of 12 hours, while VIP accounts benefit from 6-hour processing. All withdrawals are subject to standard KYC/AML verification procedures, and there are no hidden fees for withdrawals (VIP accounts receive fee-free withdrawals)."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes. We maintain SOC 2 Type II and ISO 27001 certifications, implement strict GDPR and AML/KYC protocols, store client funds in segregated accounts at top-tier financial institutions, and employ 24/7 monitoring systems. Our infrastructure uses military-grade encryption and multi-signature authorization for all transactions."
    },
    {
      question: "How deep is the MLM structure?",
      answer: "Our MLM structure extends 20 levels deep, providing substantial earning potential as your organization grows. You earn direct referral bonuses of 10% on personally referred deposits plus residual commissions across your entire organization, with volume carry-forward to maximize your compensation."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about our platform, returns, and compensation plan.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-left py-5 text-white hover:text-primary text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
