import React from "react";
import SocialSharePage from "./SocialShare";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-500 text-white dark:bg-gray-900 dark:text-gray-300 py-6">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Column 1: Branding */}
        <div>
          <h2 className="text-xl font-bold">Random Coders</h2>
          <p className="mt-2 text-base md:text-base">
            💡 Learn, Build, Collaborate! Join our community for coding help,
            project ideas, and open-source collaboration.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <nav aria-label="Footer Navigation" className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="/about" className="hover:text-gray-200">
            About Us
          </a>
          <a href="/projects" className="hover:text-gray-200">
            Projects
          </a>
          <a href="/contact" className="hover:text-gray-200">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:text-gray-200">
            Privacy Policy
          </a>
        </nav>

        {/* Column 3: Social Media & Copyright */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <SocialSharePage />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-sm">
        © 2025 Random Coders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
