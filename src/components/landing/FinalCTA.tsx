"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
            Stop prompting.
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] mt-2">
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              Start delegating.
            </span>
          </h2>

          <p className="mt-8 text-muted text-base md:text-lg max-w-xl mx-auto">
            Give AI a goal. Let your agents figure out the rest.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 text-sm font-medium text-background bg-foreground rounded-xl hover:bg-foreground/90 transition-all"
            >
              <span className="flex items-center gap-2">
                Build Your First Agent
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 text-sm font-medium text-foreground border border-border rounded-xl hover:border-border-active hover:bg-white/[0.02] transition-all"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Explore Documentation
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
