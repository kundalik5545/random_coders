"use client";
import { User } from "lucide-react";
import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const closeSheet = () => setIsOpen(false);

  const linkClasses = (path) =>
    `hover:underline hover:text-blue-400 ${
      router.pathname === path ? "underline text-blue-400" : ""
    }`;

  const PageLinks = ["Blog", "About Us", "Contact Us"];

  return (
    <nav className="fixed top-0 w-full mx-auto py-4 bg-white/80 dark:bg-black/80 flex justify-between items-center px-5 shadow-lg dark:shadow-white/20">
      <div className="logo flex items-center gap-2 text-foreground">
        <User aria-hidden="true" />
        <Link href="/" title="Personal Finance">
          <span className="font-semibold text-lg">
            {process.env.NEXT_PUBLIC_WEBSITE_NAME}
          </span>
        </Link>
      </div>
      <div className="Menu flex items-center gap-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {PageLinks.map((item, index) => {
            const path = `/${item.toLowerCase().trim().replace(" ", "-")}`;
            return (
              <li key={index}>
                <Link
                  href={path}
                  className={linkClasses(path)}
                  aria-label={item}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <ModeToggle />

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2" aria-label="Open menu">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <ul className="flex flex-col gap-3 p-4">
                {PageLinks.map((item, index) => {
                  const path = `/${item.toLowerCase().replace(" ", "-")}`;
                  return (
                    <li key={index}>
                      <Link
                        href={path}
                        className={linkClasses(path)}
                        onClick={closeSheet}
                        aria-label={item}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
