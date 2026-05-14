"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    question: "Will my customers know they're talking to an AI?",
    answer:
      "Most won't. NextRing AI sounds natural, uses your business name, and handles the call the way a good receptionist would. It doesn't say 'I am an AI' and it doesn't sound like a recorded message. If someone asks directly whether they're speaking to a person, it's honest about it. In practice this almost never happens homeowners care about getting a proper response, not who's giving it.",
  },

  {
    question: "Does it replace my current phone number?",
    answer:
      "No. Nothing changes about your existing phone setup. NextRing AI only steps in when you don't answer. Your phone rings as normal. If you pick up, NextRing AI stays silent. It's a safety net for the calls you miss not a replacement for the ones you take.",
  },

  {
    question: "How long does setup take?",
    answer:
      "Most contractors are live within 5 to 7 days. You fill in a short questionnaire about your business takes around 20 minutes on your phone. We build everything else. The only other thing you do is dial a short code to forward your unanswered calls. That takes 2 minutes and we send you exactly what to type.",
  },

  {
    question: "What happens if it gets asked something it doesn't know?",
    answer:
      "It takes a clear message the caller's name, number, what they need and sends it to you immediately. You follow up personally. This rarely happens because we train NextRing AI specifically on your business before going live. It knows your services, your areas, and how you like to work.",
  },

  {
    question: "What booking systems does it work with?",
    answer:
      "NextRing AI syncs with Google Calendar straight out of the box. If you use Jobber, Tradify, or ServiceM8, those all connect to Google Calendar so the chain works automatically. If you don't use any booking system at all right now, we set one up for you as part of the setup. You don't need to change anything you already use.",
  },

  {
    question: "Do I need to be technical to use this?",
    answer:
      "Not at all. You get a simple mobile app where you can see your leads, read conversations, and check what came in that week. Everything else runs in the background automatically. There are no dashboards to manage, no workflows to build, and nothing to configure. We handle all of that.",
  },

  {
    question: "What if a caller has an emergency like an active leak?",
    answer:
      "NextRing AI listens for emergency keywords during every call. If a homeowner mentions an active leak, storm damage, or anything urgent, it flags the call immediately and sends you a priority alert on your phone separate from your regular notifications. You see it straight away and can call back within minutes.",
  },

  {
    question: "Can I cancel if it's not working for me?",
    answer:
      "Yes. 30 days notice and that's it. No penalty, no awkward conversations. We're confident you'll see results quickly most contractors capture their first recovered lead within the first week but we don't lock anyone in.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="bg-white py-20" id="faq">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[260px_1fr]">
        {/* LEFT */}
        <div className="mx-auto mb-6 max-w-3xl px-4 text-left sm:px-0 md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gray-800">
              FAQ{" "}
            </p>
          </div>

          <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
            Frequently
            <br />
            Asked
            <br />
            Questions{" "}
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-[#6B7280] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            If something isn't covered here, book a free call and we'll answer
            it straight.{" "}
          </p>
        </div>

        {/* RIGHT */}
        <div className="border-t border-[#e5e7eb] bg-white">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div key={faq.question} className="border-b border-[#e5e7eb]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-5 py-5 text-left"
                >
                  <div>
                    <h3 className="text-[20px] font-medium leading-[1.35] tracking-[-0.03em] text-[#111827] max-md:text-[17px]">
                      {faq.question}
                    </h3>

                    {isOpen && (
                      <p className="mt-4 max-w-[620px] text-[14px] leading-[1.7] text-[#6b7280]">
                        {faq.answer}
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#111827]" />
                    ) : (
                      <Plus className="h-4 w-4 text-[#111827]" />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
