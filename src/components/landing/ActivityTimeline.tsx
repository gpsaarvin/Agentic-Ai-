"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, FileText, ShieldCheck } from "lucide-react";

const activities = [
  {
    time: "09:41:02",
    agent: "Research Agent",
    action: "Opened source",
    icon: <Search className="w-3 h-3" />,
    color: "text-accent",
  },
  {
    time: "09:41:05",
    agent: "Research Agent",
    action: "Extracted 14 findings",
    icon: <Search className="w-3 h-3" />,
    color: "text-accent",
  },
  {
    time: "09:41:11",
    agent: "Analysis Agent",
    action: "Compared 6 sources",
    icon: <BarChart3 className="w-3 h-3" />,
    color: "text-warning",
  },
  {
    time: "09:41:19",
    agent: "Writer Agent",
    action: "Generated draft",
    icon: <FileText className="w-3 h-3" />,
    color: "text-foreground",
  },
  {
    time: "09:41:26",
    agent: "Verification Agent",
    action: "Validation complete",
    icon: <ShieldCheck className="w-3 h-3" />,
    color: "text-success",
  },
];

export default function ActivityTimeline() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
            Real-Time Monitoring
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Agent activity
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Watch your autonomous agents work in real-time. Every action logged, every decision transparent.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-raised/50">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium">Live Activity Feed</span>
              </div>
              <span className="text-[9px] font-mono text-muted/50">
                AUTO-REFRESH: 1s
              </span>
            </div>

            <div className="p-4 space-y-0">
              {activities.map((activity, idx) => (
                <motion.div
                  key={`${activity.time}-${activity.action}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4 px-3 py-3 rounded-lg hover:bg-white/[0.02] transition-colors group"
                >
                  {/* Timestamp */}
                  <span className="text-[11px] font-mono text-muted/50 w-16 shrink-0 pt-0.5">
                    {activity.time}
                  </span>

                  {/* Timeline line */}
                  <div className="flex flex-col items-center pt-1">
                    <div
                      className={`w-6 h-6 rounded-lg bg-white/[0.03] flex items-center justify-center ${activity.color} group-hover:bg-white/[0.06] transition-colors`}
                    >
                      {activity.icon}
                    </div>
                    {idx < activities.length - 1 && (
                      <div className="w-px h-6 bg-border mt-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <span className="text-xs font-medium">{activity.agent}</span>
                    <p className="text-[11px] text-muted mt-0.5">{activity.action}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom */}
            <div className="px-5 py-2.5 border-t border-border text-center">
              <span className="text-[10px] font-mono text-muted/40">
                5 events · All agents operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
