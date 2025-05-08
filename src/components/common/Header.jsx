import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? " bg-white md:bg-white shadow-md py-3"
          : "md:bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900">
            <span className="text-blue-400">Gate</span>Pass
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-400 transition-standard font-medium"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-gray-700 hover:text-blue-400 transition-standard font-medium"
            >
              Use Cases
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-400 transition-standard font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary-500 transition-standard font-medium"
            >
              Contact
            </a>
            <a
              href="/auth/login"
              className="text-gray-700 hover:text-primary-500 transition-standard font-medium"
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="bg-primary-500 text-white rounded-xl px-5 py-2.5 hover:bg-primary-600 transition-standard bg-blue-400"
            >
              Try Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 py-3 backdrop-blur-5xl">
            <a
              href="#features"
              className="block text-gray-700 hover:text-blue-400 transition-standard font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="block text-gray-700 hover:text-blue-400 transition-standard font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-blue-400 transition-standard font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-400 transition-standard font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/auth/login"
              className="block text-gray-700 hover:text-blue-400 transition-standard font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="/auth/register"
              className="block bg-blue-400 text-white rounded-xl px-5 py-2.5 text-center hover:bg-primary-600 transition-standard w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Try Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
