"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroHome() {
  const [particles, setParticles] = useState([]);
  const [polygons, setPolygons] = useState([]);
  const [trailingDots, setTrailingDots] = useState([]);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 45 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 3,
      size: 2 + Math.random() * 2,
    }));
    setParticles(generatedParticles);

    const generatedPolygons = Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 20 + Math.random() * 40,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
    }));
    setPolygons(generatedPolygons);

    const generatedDots = Array.from({ length: 80 }, () => ({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      size: 2.5 + Math.random() * 2,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 6,
      xDir: Math.random() > 0.5 ? 1 : -1,
      yDir: Math.random() > 0.5 ? 1 : -1,
    }));
    setTrailingDots(generatedDots);
  }, []);

  const handleGetStartedClick = () => {
    setShowNotice(true);
  };

  return (
    <section className="relative bg-black text-white overflow-hidden flex items-center min-h-[70vh] pt-8 pb-2 sm:pt-10 sm:pb-1">
      <div className="absolute inset-0 bg-black -z-30" />

      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10">
        {polygons.map((poly, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/20 bg-white/10 rounded-lg"
            style={{
              width: poly.size,
              height: poly.size,
              top: `${poly.top}%`,
              left: `${poly.left}%`,
              rotate: poly.rotation,
            }}
            animate={{
              rotate: [poly.rotation, poly.rotation + 360],
              opacity: [0.15, 0.45, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 14 + Math.random() * 8,
              repeat: Infinity,
              delay: poly.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 -z-15 pointer-events-none">
        {trailingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              filter: "blur(0.5px)",
              opacity: 0.8,
            }}
            animate={{
              x: [0, dot.xDir * 60],
              y: [0, dot.yDir * 60],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight
          bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white mb-3"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reinventing Rent with AI Precision
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Esto automates rent operations end-to-end — from intelligent reminders
          to predictive insights. Seamless. Secure. Supercharged for the future
          of property management.
        </motion.p>

        <motion.div
          className="mt-5 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button
            onClick={handleGetStartedClick}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            Get Started
          </button>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("features");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 text-lg font-semibold rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.p
          className="mt-4 text-white/60 text-sm italic tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Trusted by innovators managing over{" "}
          <span className="text-white font-semibold">$20M+</span> in assets.
        </motion.p>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              opacity: 0.9,
              filter: "blur(1px)",
            }}
            animate={{ y: ["0%", "-40%"], opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {showNotice && (
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
              <h2 className="text-lg font-semibold mb-2 text-white/90">
                Services Coming Soon
              </h2>
              <p className="text-white/60 text-sm mb-6">
                We’re building amazing tools to help you manage your rentals
                smarter and faster. Stay tuned!
              </p>
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
