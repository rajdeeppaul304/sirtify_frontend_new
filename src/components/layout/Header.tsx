import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "../../constants/data";
import { Link } from "react-router-dom";

export const Header = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      // Use the global navigateTo function if available, otherwise fallback
      if ((window as any).navigateTo) {
        (window as any).navigateTo(href);
      } else {
        window.location.pathname = href;
      }
    } else if (href.startsWith('#')) {
      // Handle anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  return (
      <nav className="bg-background pl-[50px] pr-[60px] py-3 flex justify-between items-center">
        {/* Logo */}

        <img width={86} height={86} src="/assets/logo.png" alt="Sirtify Logo" />
        
        

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-open-sans text-[1rem] text-black font-normal">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = currentPath === item.href;
            
            return (
              <div key={item.label} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setMoreOpen(true)}
                    onMouseLeave={() => setMoreOpen(false)}
                  >
                    <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                      />
                    </button>
                    {moreOpen && item.dropdownItems && (
                      <div className="absolute top-full mt-2 bg-white shadow-xl rounded-xl py-2 w-40 border border-gray-100 z-50">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`hover:text-orange-500 transition-colors cursor-pointer ${
                      isActive ? "text-orange-500 relative font-bold" : "font-normal"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
                    )}
                  </button>
                )}
              </div>
            );
          })}
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5  text-orange-500 rounded-lg text-sm font-medium bg-white cursor-pointer transition-colors font-inter">
              Login
            </button>
            <button className="p-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors font-inter w-[80px] h-[39px] hover:shadow-xl">
              Sign Up
            </button>
          </div>

        </div>

      </nav>
  );
};