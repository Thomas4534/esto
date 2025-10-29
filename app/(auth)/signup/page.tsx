"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* ✦ Animated tech grid background */}
      <div className="absolute inset-0 -z-20 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_12s_ease-in-out_infinite]" />

      {/* ✦ Soft glowing radial gradients */}
      <div className="absolute -top-32 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] blur-3xl -z-10 animate-pulse delay-500" />

      {/* ✦ Floating shimmer particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "-20%"], opacity: [0, 1, 0] }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ✦ Main Sign-Up Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.08)] p-10"
      >
        {/* Header */}
        <motion.h1
          className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Create Account
        </motion.h1>
        <p className="text-center text-white/70 mt-3">
          Join Esto and start automating your real estate operations
        </p>

        {/* Form */}
        <form className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:border-white/30 outline-none transition"
              placeholder="Thomas Deleuze-Bisson"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:border-white/30 outline-none transition"
              placeholder="you@esto.ai"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:border-white/30 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full py-3 mt-6 rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)]"
          >
            Sign Up
          </button>

          <div className="flex items-center gap-3 text-center text-sm italic text-white/40 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent">
            or
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-xl border border-white/15 text-white/80 font-medium bg-white/5 hover:bg-white/15 transition-all"
          >
            Sign up with Google
          </button>
        </form>

        {/* Footer link */}
        <p className="mt-8 text-center text-white/60 text-sm">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-white font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
