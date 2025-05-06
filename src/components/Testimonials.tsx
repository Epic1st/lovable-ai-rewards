
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "I've been making 2% daily returns for over 5 months now. The AI trading system has completely changed my financial outlook.",
    name: "Michael T.",
    location: "London, UK",
    image: "./assets/testimonial1.jpg"
  },
  {
    quote: "The MLM structure is fantastic. Not only am I earning from my own investments, but I've built a team that's generating substantial passive income.",
    name: "Sarah J.",
    location: "Toronto, Canada",
    image: "./assets/testimonial2.jpg"
  },
  {
    quote: "At first I was skeptical, but after consistently receiving my 2% daily returns and watching my team grow, I'm completely convinced.",
    name: "David W.",
    location: "Sydney, Australia",
    image: "./assets/testimonial3.jpg"
  },
  {
    quote: "The platform is incredibly user-friendly and the support team is responsive. My royalty income has allowed me to quit my day job.",
    name: "Emma R.",
    location: "Berlin, Germany",
    image: "./assets/testimonial4.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="py-20 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('./assets/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Hear from our community of investors who are experiencing the benefits of our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-secondary/80 p-2 rounded-full hover:bg-primary/80 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-12"
                >
                  <div className="glass-morphism rounded-lg p-8 md:p-10 text-center">
                    {/* Quote icon */}
                    <div className="mb-6 flex justify-center">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H6V21C6 24.3137 8.68629 27 12 27C12 31.9706 7.97062 36 3 36V33C6.31371 33 9 30.3137 9 27H3V9H15V12ZM33 12H24V21C24 24.3137 26.6863 27 30 27C30 31.9706 25.9706 36 21 36V33C24.3137 33 27 30.3137 27 27H21V9H33V12Z" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient id="paint0_linear" x1="3" y1="9" x2="33" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8B5CF6" />
                            <stop offset="1" stopColor="#3B82F6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-xl md:text-2xl mb-8">"{testimonial.quote}"</blockquote>

                    {/* Avatar and info */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-0.5 mb-4">
                        <div className="w-full h-full rounded-full bg-gray-700">
                          {/* Placeholder for user photo */}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-gray-400">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-secondary/80 p-2 rounded-full hover:bg-primary/80 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={cn(
                  "w-3 h-3 mx-1 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-primary scale-125" : "bg-gray-600 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
