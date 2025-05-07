
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AIEnginePage from "@/pages/AIEnginePage";
import ROICalculatorPage from "@/pages/ROICalculatorPage";
import MLMPlanPage from "@/pages/MLMPlanPage";
import AccountsPage from "@/pages/AccountsPage";
import SecurityPage from "@/pages/SecurityPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import AOS from 'aos';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize or refresh AOS when App mounts
    console.log("App mounted - refreshing AOS");
    AOS.refresh();
    
    // Make sure all content is properly displayed
    const handleContentReady = () => {
      console.log("Content ready - refreshing AOS again");
      AOS.refresh();
    };
    
    // Refresh AOS after a short delay to ensure all content is mounted
    const timeoutId = setTimeout(handleContentReady, 500);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-background">
            <Navigation />
            <div className="flex-grow"> {/* Removed pt-16 to avoid double padding */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ai-engine" element={<AIEnginePage />} />
                <Route path="/roi-calculator" element={<ROICalculatorPage />} />
                <Route path="/mlm-plan" element={<MLMPlanPage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
