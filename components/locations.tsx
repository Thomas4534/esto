"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EstoCities() {
  const [particles, setParticles] = useState<
    { top: string; left: string; size: number; delay: number; duration: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const particleCount = 80;
    const generatedParticles = Array.from({ length: particleCount }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              opacity: p.opacity,
            }}
            animate={{
              y: [`0%`, `${2 + Math.random() * 5}%`, `0%`],
              opacity: [p.opacity / 2, p.opacity, p.opacity / 2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl pb-16 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Esto Across the U.S.
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mt-4">
          Powered by AI and automation, Esto simplifies how people manage rent.
          From payments to analytics, our technology helps cities operate more
          intelligently and efficiently — one lease at a time.
        </p>
      </motion.div>

      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {[
          {
            city: "Georgia",
            desc: "Where it all started — helping renters and managers automate payments and gain real-time insights into lease trends.",
          },
          {
            city: "New York",
            desc: "In one of the most complex rental markets, Esto brings automation, transparency, and precision to modern property systems.",
          },
          {
            city: "Houston",
            desc: "Empowering communities in the South with seamless, data-driven rent management and financial tracking.",
          },
        ].map((city, i) => (
          <motion.div
            key={i}
            className="relative group rounded-3xl p-8 text-center border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:border-white/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">{city.city}</h3>
            <p className="text-white/70 leading-relaxed">{city.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
