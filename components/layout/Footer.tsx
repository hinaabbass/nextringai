"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 lg:px-8">
        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1fr]">
          {/* LEFT */}
          <div>
            <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111827]">
              NextRing AI
            </h2>

            <p className="mt-4 max-w-[260px] text-[14px] leading-[1.7] text-[#6b7280]">
              AI receptionist built for  roofing contractors.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#111827]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#6b7280] transition-colors duration-200 hover:text-[#111827]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#111827]">
              Contact
            </h3>

            <p className="mt-5 text-[15px] text-[#6b7280]">Got a question?</p>

            <a
              href="tel:+447988599486"
              className="mt-2 block text-[18px] font-medium tracking-[-0.03em] text-[#87c56d]"
            >
              +44 7988599486
            </a>

            <Link
              href="https://calendar.app.google/Dr971PjDDg6un7nR7"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-[#111827] transition-opacity hover:opacity-70"
            >
              Book a free 15-minute call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#e5e7eb] pt-6 text-center md:flex-row md:text-left">
          <p className="text-[13px] text-[#6b7280]">
            © 2026 NextRing AI. All rights reserved.
          </p>

          <p className="text-[13px] text-[#6b7280]">
            Built for  Roofing Contractors
          </p>
        </div>
      </div>
    </footer>
  );
}
