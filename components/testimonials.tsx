"use client";

import { motion } from "framer-motion";

export default function EstoCities() {
  return (
    <section
      id="testimonials" // 👈 add this line
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 text-white overflow-hidden"
    >
      {/* Subtle glowing background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_70%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Section header */}
      <motion.div
        className="relative mx-auto max-w-3xl pb-16 text-center"
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

      {/* City panels */}
      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
            className="relative group rounded-3xl p-8 text-center border border-white/20 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:border-white/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            {/* Subtle animated glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-white/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-2xl font-semibold mb-3 text-white">
              {city.city}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {city.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
