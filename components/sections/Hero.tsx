import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat px-6 pt-10 pb-0 md:px-10">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="pt-24 md:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-gray-800" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-800 sm:tracking-[0.28em]">
                Built for Roofing Contractors
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-semibold text-black sm:text-5xl">
              Never Lose a Roofing Lead After Hours Again
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-6 text-gray-900">
              NextRing AI answers your calls when you&apos;re on the roof, off
              the clock, or simply unavailable so every homeowner gets a
              response and every lead stays warm.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-accent-primary px-8 py-6 text-white transition-colors hover:bg-black"
              >
                <a
                  href="https://calendar.app.google/Dr971PjDDg6un7nR7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Demo
                </a>
              </Button>

              <Button
                asChild
                className="rounded-full bg-black px-8 py-6 text-white transition-colors hover:bg-gray-800"
              >
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Phone + Floating Cards */}
        <div className="relative mx-auto mt-10 flex w-full max-w-[700px] justify-center leading-none">
          {/* Phone Image */}
          <Image
            src="/hero/iPhone 15 Pro Max White Titanium.png"
            alt="iPhone 15 Pro Max White Titanium"
            width={350}
            height={700}
            priority
            className="block h-auto w-full max-w-[350px]"
          />

          {/* Floating Cards */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* Left Card */}
            <div className="absolute left-0 top-[52%] -translate-y-1/2 rotate-[-8deg]">
              <div className="w-[220px] rounded-[28px] border border-slate-200 bg-white px-5 py-4 shadow-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Total Income
                </p>

                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  €234.98K
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-200 text-xs font-bold text-black">
                    ↑
                  </div>

                  <span className="text-sm font-medium text-slate-600">
                    43%
                  </span>
                </div>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="absolute right-0 top-[12%]">
              <div className="w-[200px] rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Avg job value
                </p>

                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  €6,226
                </p>
              </div>
            </div>

            {/* Bottom Right Badge */}
            <div className="absolute bottom-[12%] right-10">
              <div className="rounded-full border border-slate-200 bg-white px-5 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-200 text-xs font-bold text-black">
                    ↑
                  </div>

                  <span className="text-sm font-semibold text-slate-800">
                    43%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
