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
import Link from "next/link";
import Image from "next/image";

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
         <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="NextRing AI Logo"
    width={32}
    height={32}
    priority
  />
  <span className="text-lg font-medium text-white">
    NextRing AI
  </span>
</Link>

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
