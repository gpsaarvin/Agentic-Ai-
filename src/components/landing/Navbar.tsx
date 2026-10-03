"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Agents", href: "#agents" },
  { label: "Workflows", href: "#workflows" },
  { label: "Tools", href: "#tools" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-7 h-7 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-wider text-foreground">
                  NEXA
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-muted uppercase">
                  Agentic AI
                </span>
              </div>
            </a>

            {/* Center Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[13px] text-muted hover:text-foreground transition-colors duration-200 rounded-md hover:bg-white/[0.03]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#docs"
                className="text-[13px] text-muted hover:text-foreground transition-colors"
              >
                Documentation
              </a>
              <a
                href="#login"
                className="text-[13px] text-muted hover:text-foreground transition-colors"
              >
                Log in
              </a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-4 py-2 text-[13px] font-medium text-background bg-foreground rounded-lg hover:bg-foreground/90 transition-colors overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Launch Console
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-lg text-muted hover:text-foreground border-b border-border transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <a
                  href="#docs"
                  className="px-4 py-3 text-muted hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#login"
                  className="px-4 py-3 text-muted hover:text-foreground transition-colors"
                >
                  Log in
                </a>
                <button className="mt-2 px-4 py-3 text-sm font-medium text-background bg-foreground rounded-lg">
                  Launch Console
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
