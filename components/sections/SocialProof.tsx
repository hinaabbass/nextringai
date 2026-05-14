"use client";

const stats = [
  {
    value: "84%",
    label: "more inspections booked",
  },
  {
    value: "€47K",
    label: "Additional revenue",
  },
  {
    value: "0",
    label: "missed storm calls",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-20 md:px-6 lg:px-8">
      {/* heading */}
      <div className="mx-auto mb-6 max-w-3xl px-4 text-center sm:px-0 md:mb-14">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-gray-800">
            Customer story
          </p>
        </div>

        <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
          Built for busy roofing teams.
        </h2>

        <p className="mt-4 text-[14px] leading-6 text-[#6B7280] sm:text-[15px] md:text-[16px] lg:text-[17px]">
          See how NextRing AI helps real operators answer more calls, book more
          jobs, and grow without adding front-office headcount.
        </p>
      </div>
      <div className="mx-auto max-w-6xl rounded-[28px] border border-[#e5e7eb] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.75fr] lg:gap-10">
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Quote Icon */}
              <div className="text-[55px] leading-none text-[#a3d52d] md:text-[70px]">
                ”
              </div>

              {/* Quote */}
              <h2 className="mt-1 text-[20px] font-medium leading-[1.5] tracking-[-0.03em] text-[#111827] sm:text-[24px] md:text-[26px]">
                "Before NextRing AI, a third of our storm-season calls went
                straight to voicemail. Now every single one is answered,
                qualified, and on the calendar before I'm done with my coffee.
                We booked 84% more inspections in our first quarter."
              </h2>
            </div>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3 md:mt-10">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#d8f47c] to-[#c4e66b] text-[20px] font-medium text-[#111827] md:h-[60px] md:w-[60px] md:text-[24px]">
                JM
              </div>

              <div>
                <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-[#111827] md:text-[20px]">
                  Jake Morrison
                </h3>

                <p className="mt-1 text-[14px] text-[#6b7280] md:text-[16px]">
                  Owner · Morrison Roofing — Dallas, TX
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-[22px] border border-[#e5e7eb] bg-[#fafafa] px-4 py-6 text-center"
              >
                <h3 className="text-[32px] font-semibold leading-none tracking-[-0.05em] text-[#111827] md:text-[38px]">
                  {item.value}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.4] text-[#6b7280] md:text-[16px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
