import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "../../constants/data";

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
    <header className="bg-[#FEF7F1] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
            <img
              src="/assets/logo.png"
              alt="Sirtifai Logo"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-sm hidden">
              S
            </div>
          </div>
          {/* <span className="text-xl font-bold text-gray-800">SPP</span> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
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
                      isActive ? "text-orange-500 font-semibold relative" : ""
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
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation Items */}
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = currentPath === item.href;
              
              return (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-700 font-medium">{item.label}</span>
                        <ChevronDown size={16} className="text-gray-500" />
                      </div>
                      {item.dropdownItems && (
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
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
                      className={`block w-full text-left py-2 transition-colors ${
                        isActive
                          ? "text-orange-500 font-semibold"
                          : "text-gray-700 hover:text-orange-500"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              );
            })}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="w-full px-5 py-3 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors">
                Login
              </button>
              <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};