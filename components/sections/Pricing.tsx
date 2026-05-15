"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",

    subDescription:
      "Perfect for solo roofers and small teams who need a reliable AI receptionist to capture leads and respond instantly.",

    price: "$247",

    usage: [
      "150 AI call minutes included monthly",
      "Additional AI usage billed at $0.35/min",
    ],

    badge: "BEST FOR SMALL TEAMS",
    highlighted: false,
    button: "Start Free Trial",

    features: [
      "AI answers missed calls 24/7",
      "Answers in your business name",
      "Captures caller details & urgency",
      "Lead text within 60 seconds",
      "Booking link sent via SMS",
      "Google Calendar sync",
      "2-way SMS conversations",
      "Appointment reminders included",
    ],
  },

  {
    name: "Growth",

    subDescription:
      "Built for growing roofing companies that want to recover more leads, automate follow-ups, and book more jobs.",

    price: "$397",

    usage: [
      "400 AI call minutes included monthly",
      "Lower additional usage at $0.25/min",
    ],

    badge: "MOST POPULAR",
    highlighted: true,
    button: "Book a Demo",

    features: [
      "Everything in Starter",
      "AI books appointments during calls",
      "Emergency detection + priority alerts",
      "Estimate follow-up automation",
      "Payment reminder messages",
      "Google review request system",
      "Weekly performance reports",
      "Priority onboarding & setup",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      className="relative overflow-hidden bg-[#fafafa] py-20"
      id="pricing"
    >
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:34px_34px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* heading */}
        <div className="mx-auto mb-6 max-w-3xl px-4 text-center sm:px-0 md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gray-800">
              PRICING
            </p>
          </div>

          <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
            Pick the plan that fits your roofing business
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-[#6B7280] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            Capture more leads, automate follow-ups, and stop losing jobs from
            missed calls.
          </p>
        </div>

        {/* pricing cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[30px] border bg-white transition-all duration-300 ${
                plan.highlighted
                  ? "border-[#87c56d] shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                  : "border-[#E5E7EB]"
              }`}
            >
              {/* badge */}
              {plan.badge && (
                <div
                  className={`absolute right-6 top-6 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide ${
                    plan.highlighted
                      ? "bg-[#87c56d] text-white"
                      : "bg-[#f3f4f6] text-[#374151]"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* title */}
                <div>
                  <h3 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-semibold tracking-[-0.04em] text-[#111827]">
                    {plan.name}
                  </h3>

                  {/* price */}
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-semibold leading-none tracking-[-0.06em] text-[#111827]">
                      {plan.price}
                    </span>

                    <span className="mb-1 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#6B7280]">
                      /month
                    </span>
                  </div>

                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
                    {plan.subDescription}
                  </p>
                </div>

                {/* features */}
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#87c56d1f]">
                        <Check
                          className="h-4 w-4 text-[#87c56d]"
                          strokeWidth={3}
                        />
                      </div>

                      <p className="pt-[2px] text-[15px] leading-6 text-[#374151]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* usage */}
                <div className="mt-7 rounded-2xl bg-[#f7f7f5] p-4">
                  <div className="space-y-3">
                    {plan.usage.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#87c56d1f]">
                          <Check
                            className="h-3.5 w-3.5 text-[#87c56d]"
                            strokeWidth={3}
                          />
                        </div>

                        <p className="text-[14px] leading-6 text-[#4B5563]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* button */}
                <div className="mt-10">
                  <Button
                    asChild
                    className={`h-[54px] w-full rounded-full text-[16px] font-semibold transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-[#87c56d] text-white hover:bg-[#79b45f]"
                        : "border border-[#87c56d] bg-transparent text-[#87c56d] hover:bg-[#87c56d0d]"
                    }`}
                  >
                    <a
                      href="https://calendar.app.google/Dr971PjDDg6un7nR7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.button}
                    </a>
                  </Button>

                  <p className="mt-3 text-center text-[13px] text-[#9CA3AF]">
                    Cancel anytime • No contracts
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div className="mt-10 text-center">
          <p className="text-[14px] text-[#6B7280]">
            Not sure which plan is right for you? Book a free 15-minute call and
            we’ll guide you honestly.
          </p>
        </div>
      </div>
    </section>
  );
}
