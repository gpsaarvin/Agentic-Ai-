"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import AgentVideo from "./AgentVideo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern">
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-center subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8 pt-32 pb-16 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-raised/50 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.15em] text-muted uppercase">
                The Agentic Operating System
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-2"
          >
            <span className="text-foreground">AI that doesn&apos;t just answer.</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8"
          >
            <span className="bg-gradient-to-r from-accent via-accent to-accent-dim bg-clip-text text-transparent">
              It gets things done.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-2xl text-base md:text-lg text-muted leading-relaxed mb-10"
          >
            Build autonomous AI agents that plan, reason, use tools, execute workflows,
            and continuously verify their work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-7 py-3.5 text-sm font-medium text-background bg-foreground rounded-xl hover:bg-foreground/90 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Build Your Agent
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-7 py-3.5 text-sm font-medium text-foreground border border-border rounded-xl hover:border-border-active hover:bg-white/[0.02] transition-all"
            >
              <span className="flex items-center gap-2">
                <Play className="w-3.5 h-3.5" />
                Explore Platform
              </span>
            </motion.button>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-6 text-[11px] font-mono tracking-wider text-muted"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <span className="text-muted/60">MULTI-AGENT RUNTIME READY</span>
          </motion.div>
        </div>

        {/* Live agent video feed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-16 lg:mt-20"
        >
          <AgentVideo />
        </motion.div>
      </div>
    </section>
  );
}
