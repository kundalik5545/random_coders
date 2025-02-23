"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { CodeXml } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const websiteName = process.env.NEXT_PUBLIC_WEBSITE_NAME;

  return (
    <div className="p-4 border-b border-border bg-background text-foreground shadow-md">
      <div className="flex justify-between items-center">
        <div className="website-name flex space-x-1 items-center">
          <span className="logo">
            <CodeXml />
          </span>
          <h1 className="text-xl font-bold">{websiteName}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <a href="/about" className="hover:text-primary">
              About
            </a>
            <a href="/contact" className="hover:text-primary">
              Contact
            </a>
            <a href="/blog" className="hover:text-primary">
              Blog
            </a>
          </nav>
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:text-primary focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-2 space-y-2">
          <a href="/" className="block hover:text-primary">
            Home
          </a>
          <a href="/about" className="block hover:text-primary">
            About
          </a>
          <a href="/contact" className="block hover:text-primary">
            Contact
          </a>
          <a href="/blog" className="block hover:text-primary">
            Blog
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
