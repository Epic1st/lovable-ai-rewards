
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="url(#paint0_linear)"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="21.02" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-white">Barter Bloom</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering AI-driven trading with 2% daily returns and a revolutionary MLM structure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Platform Benefits</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#tiers" className="text-gray-400 hover:text-white transition-colors">Account Tiers</a>
              </li>
              <li>
                <a href="#mlm" className="text-gray-400 hover:text-white transition-colors">MLM Plan</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">AML Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                support@lovable.ai
              </li>
              <li className="text-gray-400">
                1-800-LOVABLE
              </li>
              <li className="text-gray-400">
                123 AI Street, Crypto City
              </li>
              <li className="mt-6">
                <div className="flex space-x-4">
                  {/* Twitter */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  {/* Telegram */}
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.07-.2-.04-.28-.03-.12.02-1.92 1.22-5.41 3.58-.51.35-.97.52-1.38.51-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.38-.88.02-.22.33-.45.91-.68 3.54-1.54 5.91-2.56 7.1-3.06 3.38-1.42 4.08-1.67 4.54-1.67.1 0 .32.02.47.12.12.08.19.2.21.33.02.14-.01.54-.01.54z"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {currentYear} Lovable. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <img src="./assets/mcafee-secure.svg" alt="McAfee Secure" className="h-10" />
              <img src="./assets/bbb-accredited.svg" alt="BBB Accredited" className="h-10" />
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">Trustpilot</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm p-4 border-t border-gray-800 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 mb-4 md:mb-0 md:mr-8">
            This website uses cookies to ensure you get the best experience. By continuing to browse, you accept our <a href="#" className="text-primary hover:underline">cookie policy</a>.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition-colors">
              Decline
            </button>
            <button className="px-4 py-2 bg-primary rounded-md text-white hover:bg-primary/90 transition-colors">
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
