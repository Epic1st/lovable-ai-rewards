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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import AOS from "aos";

// AOS route change handler
const AOSInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    if (!AOS.instance) {
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: false,
        offset: 120,
      });
    }
    AOS.refresh();
    const timeoutId = setTimeout(() => AOS.refresh(), 200);
    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

// Wrapper to control layout visibility
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {!hideLayout && <Navigation />}
      <AOSInitializer />
      <div className="flex-grow">{children}</div>
      {!hideLayout && <Footer />}
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (!AOS.instance) {
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: false,
        offset: 120,
      });
    }
    AOS.refresh();
    const timeoutIds = [300, 600, 1000].map((delay) =>
      setTimeout(() => AOS.refresh(), delay)
    );
    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LayoutWrapper>
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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LayoutWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
