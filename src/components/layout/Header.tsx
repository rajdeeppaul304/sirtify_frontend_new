import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants/data';
import logoImage from '/assets/logo.png';

export const Header = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logoImage} alt="Logo" className="w-10 h-10 drop-shadow-sm" />
        <span className="text-xl font-bold text-gray-800">SPP</span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        {NAVIGATION_ITEMS.map((item) => (
          <div key={item.label} className="relative">
            {item.hasDropdown ? (
              <div
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-200" />
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
              <a
                href={item.href}
                className={`hover:text-orange-500 transition-colors ${
                  item.isActive ? 'text-orange-500 font-semibold relative' : ''
                }`}
              >
                {item.label}
                {item.isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
                )}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors">
          Login
        </button>
        <button className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
};
