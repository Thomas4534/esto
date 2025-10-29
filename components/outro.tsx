"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  const [showNotice, setShowNotice] = useState(false);
  const [noticeContent, setNoticeContent] = useState<{ title: string; message: string } | null>(
    null
  );

  const handleClick = (button: "getStarted" | "scheduleDemo") => {
    if (button === "getStarted") {
      setNoticeContent({
        title: "🚀 Services Coming Soon",
        message:
          "We’re building amazing tools to help you manage your rentals smarter and faster. Stay tuned!",
      });
    } else if (button === "scheduleDemo") {
      setNoticeContent({
        title: "📅 Schedule Demo Coming Soon",
        message:
          "Our demo scheduler will be available shortly. You’ll be able to book a personalized demo to explore Esto’s features very soon!",
      });
    }
    setShowNotice(true);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1a1a1a,#000)]"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#111 0 1px,#000 1px 10px)] opacity-20 animate-pulse-slow"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] mb-10 animate-pulse-slow">
            Start Managing Rent Smarter
          </h2>

          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
            <button
              onClick={() => handleClick("getStarted")}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full
              bg-white text-black hover:bg-gray-200 transition-all duration-300
              shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] w-full sm:w-auto mb-4 sm:mb-0"
            >
              Get Started
            </button>

            <button
              onClick={() => handleClick("scheduleDemo")}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full border border-white/40
              hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] w-full sm:w-auto"
            >
              Schedule Demo
            </button>
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-indigo-100/70 text-lg leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Esto helps automate rent reminders, ensure compliance, and deliver intelligent, human-like messaging for tenants and landlords alike — making property management effortless.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showNotice && noticeContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowNotice(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-sm text-center shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <h2 className="text-lg font-semibold mb-2 text-white/90">{noticeContent.title}</h2>
              <p className="text-white/60 text-sm mb-6">{noticeContent.message}</p>
              <button
                onClick={() => setShowNotice(false)}
                className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 transition border border-white/20"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
