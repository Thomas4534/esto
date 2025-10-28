"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const [showNotice, setShowNotice] = useState(false);
  const [noticeContent, setNoticeContent] = useState<{ title: string; message: string } | null>(
    null
  );

  const footerColumns = [
    {
      title: "Product",
      links: ["Features", "Pricing & Plans"],
    },
    {
      title: "Company",
      links: ["About us", "Careers"],
    },
    {
      title: "Resources",
      links: ["Community", "Terms of service"],
    },
  ];

  const getLinkHref = (link: string) => {
    switch (link) {
      case "Community":
        return "https://www.linkedin.com/company/esto-management/";
      case "Careers":
        return "https://www.linkedin.com/company/esto-management/jobs/";
      case "About us":
        return "#workflows";
      case "Features":
        return "#features";
      default:
        return "#0";
    }
  };

  const isExternal = (link: string) => link === "Community" || link === "Careers";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string, href: string) => {
    if (link === "Terms of service") {
      e.preventDefault();
      setNoticeContent({
        title: "🚧 Terms of Service Unavailable",
        message: "The Terms of Service are currently being finalized. Please check back soon.",
      });
      setShowNotice(true);
      return;
    }

    if (link === "Pricing & Plans") {
      e.preventDefault();
      setNoticeContent({
        title: "💡 Pricing & Plans Coming Soon",
        message: "We’re preparing flexible pricing options to fit your needs. Stay tuned!",
      });
      setShowNotice(true);
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-center md:gap-32">
          {footerColumns.map((col, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-sm font-semibold text-white/80 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, j) => {
                  const href = getLinkHref(link);
                  return (
                    <li key={j}>
                      {isExternal(link) ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        >
                          {link}
                        </a>
                      ) : (
                        <a
                          href={href}
                          onClick={(e) => handleClick(e, link, href)}
                          className="text-white/60 hover:text-white transition drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] cursor-pointer"
                        >
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16">
          <p className="text-white/50 text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            © Esto {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Popup overlay */}
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
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
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
    </footer>
  );
}
