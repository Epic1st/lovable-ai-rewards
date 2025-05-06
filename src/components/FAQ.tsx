
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
      question: "How is 2% calculated?",
      answer: "The 2% daily return is calculated based on your principal investment amount and is credited to your account every 24 hours. Our AI trading system operates continuously across multiple markets to generate these returns. You can choose to compound your earnings automatically or withdraw them as needed."
    },
    {
      question: "What are the risks?",
      answer: "While our AI trading systems employ strict risk controls and sophisticated algorithms to minimize risk, all trading activities involve some level of risk. Market volatility can affect performance. We mitigate risks through diversification, stop-loss mechanisms, and limiting maximum drawdown to protect your capital."
    },
    {
      question: "How do withdrawals work?",
      answer: "Withdrawals can be requested directly through your dashboard. Once requested, they are typically processed within 24 hours. There are no hidden fees for standard accounts, though Premium and VIP accounts enjoy additional benefits like expedited or free withdrawals."
    },
    {
      question: "What's lifetime income?",
      answer: "Lifetime income refers to the residual royalties paid indefinitely once qualified by meeting certain team volume milestones. These royalties are designed to provide ongoing passive income from your downline's activity without requiring additional work from you after you've built your organization."
    },
    {
      question: "How deep is the MLM structure?",
      answer: "Our MLM structure extends 20 levels deep, allowing you to earn commissions from a vast network. This depth provides substantial earning potential as your organization grows, with varying commission rates depending on the level and your achieved rank."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes. We maintain the highest security standards with SOC 2 Type II and ISO 27001 certifications. Client funds are kept in segregated accounts at top-tier banks, and all transactions are encrypted using bank-grade security protocols. Our platform undergoes regular security audits by independent firms."
    },
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
