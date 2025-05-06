
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Star, ChevronDown, Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <Star className="w-8 h-8 mr-2 text-primary" />
            Barter Bloom
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/" && "bg-accent/50"
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/ai-engine">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/ai-engine" && "bg-accent/50"
                  )}>
                    AI Engine
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/roi-calculator">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/roi-calculator" && "bg-accent/50"
                  )}>
                    ROI Calculator
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/mlm-plan">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/mlm-plan" && "bg-accent/50"
                  )}>
                    MLM Plan
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  location.pathname === "/accounts" || location.pathname === "/security" && "bg-accent/50"
                )}>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link to="/accounts">
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          location.pathname === "/accounts" && "bg-accent/50"
                        )}>
                          <div className="text-sm font-medium leading-none">Accounts</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our account tiers and pricing structure
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/security">
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          location.pathname === "/security" && "bg-accent/50"
                        )}>
                          <div className="text-sm font-medium leading-none">Security</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our security measures and compliance standards
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonials">
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          location.pathname === "/testimonials" && "bg-accent/50"
                        )}>
                          <div className="text-sm font-medium leading-none">Testimonials</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Success stories from our community
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <NavigationMenuLink className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          location.pathname === "/faq" && "bg-accent/50"
                        )}>
                          <div className="text-sm font-medium leading-none">FAQ</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Frequently asked questions
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/contact" && "bg-accent/50"
                  )}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden bg-background/95 backdrop-blur-sm border-t border-gray-800",
          isMobileMenuOpen ? "max-h-[80vh] py-4" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/ai-engine" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>AI Engine</Link>
          <Link to="/roi-calculator" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>ROI Calculator</Link>
          <Link to="/mlm-plan" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>MLM Plan</Link>
          <Link to="/accounts" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Accounts</Link>
          <Link to="/security" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Security</Link>
          <Link to="/testimonials" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
          <Link to="/faq" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-800">
            <Button variant="outline" className="w-full">Login</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
