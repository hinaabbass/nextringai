"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Stop losing roofing jobs from missed calls.",
    subDescription:
      "Perfect for solo roofers and small teams who need a reliable AI receptionist to capture leads and respond instantly.",
    price: "€247",
    setup: "€490 one-off setup",
    active: false,
  },
  {
    name: "Growth",
    description: "Turn your roofing business into an automated sales system.",
    subDescription:
      "Built for growing roofing companies that want to recover more leads, automate follow-ups, and book more jobs.",
    price: "€397",
    setup: "€590 one-off setup",
    active: true,
  },
];

const sections = [
  {
    title: "SETUP",
    rows: [
      { label: "Done-for-you setup", values: [true, true] },
      { label: "AI trained on your business", values: [true, true] },
      { label: "Live within one week", values: [true, true] },
      { label: "Mobile app for owner", values: [true, true] },
    ],
  },
  {
    title: "CALL ANSWERING",
    rows: [
      { label: "AI answers missed calls 24/7", values: [true, true] },
      { label: "Answers in your business name", values: [true, true] },
      {
        label: "Captures caller details & job urgency",
        values: [true, true],
      },
      {
        label: "Emergency detection + priority alerts",
        values: [false, true],
      },
    ],
  },
  {
    title: "LEAD RESPONSE",
    rows: [
      { label: "Lead text within 60 seconds", values: [true, true] },
      { label: "Instant owner notifications", values: [true, true] },
      { label: "2-way SMS conversations", values: [true, true] },
    ],
  },
  {
    title: "BOOKING",
    rows: [
      { label: "Booking link sent via SMS", values: [true, true] },
      { label: "Google Calendar sync", values: [true, true] },
      { label: "24-hour appointment reminders", values: [true, true] },
      { label: "2-hour appointment reminders", values: [true, true] },
      { label: "AI books appointments during calls", values: [false, true] },
      {
        label: "Automatic re-booking for no-shows",
        values: [false, true],
      },
    ],
  },
  {
    title: "FOLLOW-UP",
    rows: [
      {
        label: "3-message lead follow-up sequence",
        values: [true, true],
      },
      {
        label: "Quote follow-up automation",
        values: [false, true],
      },
      {
        label: "Payment reminder messages",
        values: [false, true],
      },
    ],
  },
  {
    title: "REPUTATION",
    rows: [
      {
        label: "Google review request system",
        values: [false, true],
      },
      {
        label: "Instant review alerts",
        values: [false, true],
      },
      {
        label: "Unhappy customer early warnings",
        values: [false, true],
      },
    ],
  },
  {
    title: "REPORTING",
    rows: [
      {
        label: "Weekly performance reports",
        values: [false, true],
      },
    ],
  },
];

const TableValue = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-[#22C55E]" strokeWidth={3} />
    ) : (
      <span className="text-zinc-300">—</span>
    );
  }

  return (
    <p className="max-w-[240px] text-center text-[15px] leading-6 text-gray-800">
      {value}
    </p>
  );
};

export default function ComparisonTable() {
  return (
    <section className="w-full bg-white py-20">
      {/* heading */}
      <div className="mx-auto mb-6 max-w-3xl px-4 text-center sm:px-0 md:mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gray-800">
            Pricing Comparison
          </p>
        </div>

        <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
          Pick the plan that fits where you are right now
        </h2>

        <p className="mt-4 text-[14px] leading-6 text-[#6B7280] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          You can upgrade anytime. No contracts, no hassle.
        </p>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white">
        {/* HEADER */}
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#E5E7EB]">
          <div className="border-r border-[#E5E7EB]" />

          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col items-center justify-center px-8 py-10 text-center ${
                index !== plans.length - 1 ? "border-r border-[#E5E7EB]" : ""
              } ${plan.active ? "bg-[#fafafa]" : ""}`}
            >
              <h3 className="text-[28px] font-semibold text-black">
                {plan.name}
              </h3>

              <div className="mt-4">
                <span className="text-[42px] font-semibold tracking-[-0.04em] text-black">
                  {plan.price}
                </span>
                <span className="ml-1 text-[15px] text-[#6B7280]">/month</span>
              </div>

              <p className="mt-2 text-[14px] text-[#6B7280]">{plan.setup}</p>

              <Button
                asChild
                className="mt-8 h-12 rounded-full px-8 text-[15px] font-medium bg-blend-color-burn text-white hover:bg-black"
              >
                <a
                  href="https://calendar.app.google/Dr971PjDDg6un7nR7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started →
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* TABLE */}
        {sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <div className="border-b border-[#E5E7EB] bg-[#f8f8f7] px-8 py-4">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                {section.title}
              </h2>
            </div>

            {section.rows.map((row, rowIndex) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                  !(
                    sectionIndex === sections.length - 1 &&
                    rowIndex === section.rows.length - 1
                  )
                    ? "border-b border-[#E5E7EB]"
                    : ""
                }`}
              >
                <div className="border-r border-[#E5E7EB] px-8 py-5">
                  <p className="text-[15px] leading-[1.6] text-gray-800">
                    {row.label}
                  </p>
                </div>

                <div className="flex items-center justify-center border-r border-[#E5E7EB] px-6 py-5">
                  <TableValue value={row.values[0]} />
                </div>

                <div className="flex items-center justify-center px-6 py-5 bg-[#fcfcfc]">
                  <TableValue value={row.values[1]} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden space-y-10 px-4">
        {plans.map((plan, planIndex) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-gray-200 p-6 bg-white"
          >
            <h3 className="text-2xl font-semibold text-black">{plan.name}</h3>

            <div className="mt-3">
              <span className="text-[36px] font-semibold text-black">
                {plan.price}
              </span>
              <span className="ml-1 text-[14px] text-gray-500">/month</span>
            </div>

            <p className="mt-1 text-[14px] text-gray-500">{plan.setup}</p>

            <Button className="mt-6 w-full rounded-full bg-color-accent-primary text-white hover:bg-black">
              Get Started →
            </Button>

            {/* Features */}
            <div className="mt-8 space-y-6">
              {sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-[12px] font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    {section.title}
                  </h4>

                  <div className="space-y-3">
                    {section.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between"
                      >
                        <p className="text-[15px] text-gray-800">{row.label}</p>
                        <TableValue value={row.values[planIndex]} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center px-4">
        <p className="text-[15px] text-[#6B7280]">
          Not sure which plan is right for you? Book a free 15-minute call and
          we’ll give you an honest recommendation.
        </p>
      </div>
    </section>
  );
}
