
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

// Create a component that refreshes AOS on route changes
const AOSInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize or refresh AOS when location changes
    console.log("Route changed - refreshing AOS");
    
    // Ensure AOS is initialized
    if (!AOS.instance) {
      console.log("Initializing AOS in route change");
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: false,
        offset: 120,
      });
    }
    
    // Force refresh AOS
    AOS.refresh();
    
    // Add a small delay to ensure all elements are ready
    const timeoutId = setTimeout(() => {
      console.log("Route change timeout - refreshing AOS again");
      AOS.refresh();
    }, 200);
    
    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize or refresh AOS when App mounts
    console.log("App mounted - refreshing AOS");
    
    // Ensure AOS is initialized
    if (!AOS.instance) {
      console.log("Initializing AOS from App");
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: false,
        offset: 120,
      });
    }
    
    // Force refresh AOS
    AOS.refresh();
    
    // Make sure all content is properly displayed with additional checks
    const timeoutIds = [300, 600, 1000].map(delay => 
      setTimeout(() => {
        console.log(`App timeout ${delay}ms - refreshing AOS again`);
        AOS.refresh();
      }, delay)
    );
    
    return () => timeoutIds.forEach(id => clearTimeout(id));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-background">
            <Navigation />
            <AOSInitializer />
            <div className="flex-grow">
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
