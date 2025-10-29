"use client";

import { motion } from "framer-motion";

export default function WorkflowsFeatures() {
  const workflows = [
    {
      title: "Beginner-Friendly",
      desc: "Get started in real estate with intuitive tools designed for first-time investors.",
    },
    {
      title: "Accessible",
      desc: "A platform built to make property investment transparent, inclusive, and barrier-free.",
    },
    {
      title: "Scale with Confidence",
      desc: "Manage multiple properties effortlessly while growing your portfolio with data-driven insights.",
    },
  ];

  return (
    <section id="workflows" className="relative pt-40 pb-20 px-6 sm:px-10 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-slow-pan" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center mb-28"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white animate-glow">
          Real Estate for Everyone
        </h2>
        <p className="text-white/70 text-lg leading-relaxed">
          Esto breaks traditional barriers with AI-driven automation, intuitive design, and a transparent experience for all investors.
        </p>
      </motion.div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        {workflows.map((item, i) => (
          <motion.div
            key={i}
            className="relative group w-72 h-72 rounded-full flex flex-col items-center justify-center text-center
                       bg-gradient-to-b from-white/10 via-white/5 to-transparent
                       border border-white/20 backdrop-blur-md overflow-hidden
                       hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:border-white/40
                       transition-all duration-700"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10 blur-md"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-white/30 opacity-30"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            />

            <div className="relative z-10 px-6">
              <h3 className="font-semibold text-xl mb-2 tracking-wide">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 opacity-50 animate-particle1" />
              <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 opacity-40 animate-particle2" />
            </div>
          </motion.div>
        ))}
      </div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="30%" y1="60%" x2="50%" y2="40%"
          stroke="white" strokeOpacity="0.5" strokeWidth="1"
          animate={{ pathLength: [0.2, 1, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="50%" y1="40%" x2="70%" y2="60%"
          stroke="white" strokeOpacity="0.5" strokeWidth="1"
          animate={{ pathLength: [0.2, 1, 0.2] }}
          transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <style jsx>{`
        @keyframes slow-pan {
          0% { background-position: 0 0; }
          100% { background-position: 80px 80px; }
        }
        .animate-slow-pan {
          animation: slow-pan 20s linear infinite;
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(255,255,255,0.3)); }
          50% { filter: drop-shadow(0 0 35px rgba(255,255,255,0.6)); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes particle1 {
          0% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, -20px); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 0.3; }
        }
        .animate-particle1 {
          animation: particle1 6s ease-in-out infinite;
        }

        @keyframes particle2 {
          0% { transform: translate(0, 0); opacity: 0.4; }
          50% { transform: translate(-25px, 15px); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 0.4; }
        }
        .animate-particle2 {
          animation: particle2 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
