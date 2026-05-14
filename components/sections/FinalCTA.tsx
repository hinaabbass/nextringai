import Image from "next/image";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-24 md:px-10 
      bg-[#0A0A0A] 
      bg-[radial-gradient(ellipse_at_bottom,_rgba(0,120,60,0.25),_transparent_70%)]"
    >
      {/* Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* heading */}
        <div className="mx-auto mb-6 max-w-3xl px-4 text-center sm:px-0 md:mb-14">
          <h2 className="text-[28px] leading-[1.15] tracking-[-0.04em] text-white sm:text-[36px] md:text-[28px] lg:text-[38px] font-semibold">
            Stop leaving jobs on the table.{" "}
          </h2>

          <p className="mt-4 text-[14px] leading-6 text-white sm:text-[15px] md:text-[16px] lg:text-[17px]">
            Every call you miss today is a job your competitor books tomorrow.
            Book a free 15-minute demo and see exactly how NextRing AI works for
            your business before you lose another lead this week.{" "}
          </p>
        </div>

        {/* Buttons */}
        <div className=" flex flex-col items-center gap-4 sm:flex-row">
          {/* Primary Button */}
          <Button
            asChild
            className="rounded-full bg-accent-primary px-8 py-6 text-white transition-colors hover:bg-[var(--color-accent-primary-hover)]"
          >
            <a
              href="https://calendar.app.google/Dr971PjDDg6un7nR7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Demo →
            </a>
          </Button>

          {/* Secondary Button (now white) */}
          <Button
            asChild
            className="rounded-full bg-white px-8 py-6 text-black transition-colors hover:bg-gray-200 hover:text-white"
          >
            <a href="#pricing">See Pricing</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
