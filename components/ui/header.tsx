"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector("#testimonials");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="z-30 w-full fixed top-0 backdrop-blur-md bg-black border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="relative flex h-16 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={70}
                height={22}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation / Buttons */}
          <ul className="flex flex-1 items-center justify-end gap-3 text-white">
            <li>
              <Link
                href="/signin"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium
                text-white border border-white/30 hover:border-white/60 transition-all duration-300"
              >
                Sign In
              </Link>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={handleScroll}
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold
                text-black bg-white hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                Locations
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
