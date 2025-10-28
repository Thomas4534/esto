"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Subtle abstract techy background */}
      <div className="absolute inset-0 -z-10">
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1a1a1a, #000)]"></div>

        {/* Moving diagonal lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#111 0 1px,#000 1px 10px)] opacity-20 animate-pulse-slow"></div>

        {/* Blurred accent shape */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none opacity-30"
            src={BlurredShape}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] mb-10 animate-pulse-slow">
            Start Managing Rent Smarter
          </h2>

          {/* Buttons */}
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
            <a
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full
              bg-white text-black hover:bg-gray-200 transition-all duration-300
              shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] w-full sm:w-auto mb-4 sm:mb-0"
              href="#0"
            >
              Get Started
            </a>

            <a
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full border border-white/40
              hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full sm:w-auto"
              href="#0"
            >
              Schedule Demo
            </a>
          </div>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl mx-auto text-indigo-100/70 text-lg leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Esto helps automate rent reminders, ensure compliance, and deliver intelligent, human-like messaging for tenants and landlords alike — making property management effortless.
          </p>
        </div>
      </div>
    </section>
  );
}
