"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Automated Rent Reminders",
      desc: "Esto automatically notifies tenants of upcoming payments using intelligent messaging that feels personal and natural.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 1v4M28 1v4M4 8h32M6 10v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10" />
          <path d="M12 18h16M12 24h10" />
        </svg>
      ),
    },
    {
      title: "Compliance Made Easy",
      desc: "Ensure leases and payment processes follow regulations effortlessly, reducing risk for landlords and property managers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" stroke="white" strokeWidth="1.5">
          <rect x="8" y="6" width="24" height="28" rx="2" />
          <path d="M12 12h16M12 18h10M12 24h14M12 30h8" />
        </svg>
      ),
    },
    {
      title: "Smart Messaging",
      desc: "AI-powered communication adapts to each tenant, keeping interactions clear, professional, and human-like.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M4 6h32v18H20l-8 8v-8H4z" />
        </svg>
      ),
    },
    {
      title: "Payment Analytics",
      desc: "Gain actionable insights on payment patterns and trends to improve cash flow and operational efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M8 28V16M16 28V10M24 28v-6M32 28V8" />
          <path d="M4 32h32" />
        </svg>
      ),
    },
    {
      title: "Lease Management",
      desc: "Track and organize all lease details in one place, ensuring nothing falls through the cracks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M10 6h20a2 2 0 0 1 2 2v28l-8-6-8 6-8-6V8a2 2 0 0 1 2-2z" />
        </svg>
      ),
    },
    {
      title: "Tenant Engagement",
      desc: "Engage with tenants proactively using AI-driven notifications and reminders that actually feel personal.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="20" cy="12" r="6" />
          <path d="M6 34a14 14 0 0 1 28 0" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28 text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_70%)]"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl pb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Features of Esto
        </h2>
        <div className="mx-auto w-32 h-[2px] bg-gradient-to-r from-white via-gray-300 to-white mb-6 rounded-full" />
        <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
          AI-powered automation meets intelligent design. Every tool within Esto is crafted to make property management sleek, seamless, and beautifully simple.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 relative">
        {features.map((feature, i) => (
          <motion.article
            key={i}
            className="relative group rounded-2xl p-8 text-center border border-white/20 bg-gradient-to-b from-white/10 via-transparent to-white/5 backdrop-blur-sm
                       hover:border-white/40 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <motion.div
              className="absolute -top-10 right-10 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            <div className="relative mb-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              {feature.icon}
            </div>

            <h3 className="mb-3 font-semibold text-2xl text-white">
              {feature.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {feature.desc}
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </motion.article>
        ))}
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="whiteGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="25%" y1="30%" x2="50%" y2="60%" stroke="url(#whiteGlow)" strokeWidth="1" />
        <line x1="75%" y1="30%" x2="50%" y2="60%" stroke="url(#whiteGlow)" strokeWidth="1" />
      </svg>
    </section>
  );
}
