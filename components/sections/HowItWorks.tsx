"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const tabs = [
  {
    id: "launch",
    number: "01/03",
    tab: "Launch in Minutes",
    title: "Get your AI receptionist live in minutes",
    description:
      "We set up your AI, train it on your business, and configure everything for you. No technical setup needed. Your AI is ready to answer calls almost immediately after onboarding.",
    image: "/workflow/1.png",
  },
  {
    id: "capture",
    number: "02/03",
    tab: "Lead Capture 24/7",
    title: "Never miss a roofing lead again",
    description:
      "Your AI answers every missed call,. It qualifies leads, collects job details, and ensures every enquiry is captured and instantly share it via SMS, email, Google Sheets, or your CRM so you never lose potential customers again.",
    image: "/workflow/2.png",
  },
  {
    id: "analytics",
    number: "03/03",
    tab: "Modern Analytics",
    title: "Track every call, lead, and booking in real time",
    description:
      "Get clear insights into missed calls, captured leads, and booked jobs. Understand your business performance with simple weekly reports and real-time dashboards.",
    image: "/workflow/3.png",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-white py-16" id="how-it-works">
      <div className="mx-auto max-w-6xl px-5">
        {/* heading */}
        <div className="mx-auto mb-6 max-w-3xl px-4 text-center sm:px-0 md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gray-800">
              HOW IT WORKS
            </p>
          </div>

          <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
            We handle the entire setup for you
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-[#6B7280] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            Answer a few questions, forward your calls, and your AI receptionist
            is ready to start capturing leads automatically.
          </p>
        </div>

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-[24px] border border-[#e7e7e7] bg-white shadow-sm lg:grid-cols-2">
          {/* Left Image */}
          <div className="p-4">
            <div className="overflow-hidden rounded-[20px] bg-[#f3f4f6]">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center px-7 py-8 lg:px-10">
            <span className="text-[15px] font-medium tracking-[-0.02em] text-[#111827]">
              {activeTab.number}
            </span>

            <h2 className="mt-4 max-w-[500px] text-[34px] font-medium leading-[1.1] tracking-[-0.04em] text-[#111827] max-md:text-[26px]">
              {activeTab.title}
            </h2>

            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.8] text-[#6b7280]">
              {activeTab.description}
            </p>
            <a
              href="https://calendar.app.google/Dr971PjDDg6un7nR7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-[#87c56d] px-6 py-3 text-[15px] font-medium text-white transition hover:opacity-90"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {tabs.map((tab) => {
            const isActive = activeTab.id === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-3 text-[14px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#87c56d] text-white shadow-md"
                    : "bg-[#ecece9] text-[#111827] hover:bg-[#e2e2df]"
                }`}
              >
                {tab.tab}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
