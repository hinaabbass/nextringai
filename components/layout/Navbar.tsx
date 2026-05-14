"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 py-4 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4">
        <div className="relative flex w-full max-w-[1300px] items-center justify-between gap-4 rounded-[50px] border border-white/10 bg-black px-6 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M18 4L28 12.5V23.5L18 32L8 23.5V12.5L18 4Z"
                fill="#4CAF50"
              />
              <path
                d="M18 8.5L24.75 13.75V22.25L18 27.5L11.25 22.25V13.75L18 8.5Z"
                fill="#87C56D"
              />
              <path
                d="M18 11L21.75 13.75L18 16.5L14.25 13.75L18 11Z"
                fill="white"
              />
            </svg>
            <span className="text-sm font-medium text-white">NextRing AI</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden flex-1 items-center justify-center gap-10 text-sm font-medium md:flex">
            {[
              { label: "How It Works", href: "#how-it-works" },
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white transition-colors duration-200 ease-in-out hover:text-gray-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden md:inline-flex rounded-full px-6 py-5 bg-[var(--color-accent-primary)] text-white transition-colors duration-200 hover:!bg-white hover:!text-black hover:border hover:border-black"
            >
              <a
                href="https://calendar.app.google/Dr971PjDDg6un7nR7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>

            {/* MOBILE MENU */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="top"
                  className="w-full max-w-none bg-black text-white"
                >
                  <SheetHeader>
                    <SheetTitle className="text-white">NextRing AI</SheetTitle>
                    <SheetDescription className="text-gray-300"></SheetDescription>
                  </SheetHeader>

                  <nav className="flex flex-col gap-4 pb-8 px-8">
                    {[
                      { label: "How It Works", href: "#how-it-works" },
                      { label: "Features", href: "#features" },
                      { label: "Pricing", href: "#pricing" },
                      { label: "FAQ", href: "#faq" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-white transition-colors duration-200 ease-in-out hover:text-gray-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}

                    <Button
                      asChild
                      className="mt-4 rounded-full bg-[var(--color-accent-primary)] text-white transition-colors duration-200 hover:!bg-white hover:!text-black hover:border hover:border-black"
                    >
                      <a
                        href="https://calendar.app.google/Dr971PjDDg6un7nR7"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                      >
                        Book a Demo
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
