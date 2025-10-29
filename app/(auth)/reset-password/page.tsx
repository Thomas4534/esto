"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 -z-20 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute -top-32 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_70%)] blur-3xl -z-10 animate-pulse delay-500" />

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/10 to-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(255,255,255,0.08)] p-10"
      >
        <motion.h1
          className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Reset Password
        </motion.h1>

        <p className="text-center text-white/70 mt-3">
          Enter your email and we’ll send you a reset link.
        </p>

        <form className="mt-10 space-y-6">
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
              placeholder="you@pinatapitch.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)]"
          >
            Send Reset Link
          </button>

          <p className="mt-8 text-center text-white/60 text-sm">
            Remembered your password?{" "}
            <Link
              href="/signin"
              className="text-white font-medium hover:underline"
            >
              Back to Sign In
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
