"use client";

import { motion } from "framer-motion";
import {
  Globe,
  GitBranch as Github,
  MessageSquare,
  HardDrive,
  BookOpen,
  Monitor,
  Database,
  Plug,
  Mail,
  Calendar,
} from "lucide-react";

const tools = [
  { name: "Web", icon: <Globe className="w-5 h-5" />, status: "Connected", detail: "Real-time search" },
  { name: "GitHub", icon: <Github className="w-5 h-5" />, status: "Connected", detail: "12 repositories" },
  { name: "Slack", icon: <MessageSquare className="w-5 h-5" />, status: "Connected", detail: "4 channels" },
  { name: "Google Drive", icon: <HardDrive className="w-5 h-5" />, status: "Available", detail: "" },
  { name: "Notion", icon: <BookOpen className="w-5 h-5" />, status: "Connected", detail: "3 workspaces" },
  { name: "Browser", icon: <Monitor className="w-5 h-5" />, status: "Connected", detail: "Headless mode" },
  { name: "Databases", icon: <Database className="w-5 h-5" />, status: "Available", detail: "" },
  { name: "APIs", icon: <Plug className="w-5 h-5" />, status: "Connected", detail: "8 endpoints" },
  { name: "Email", icon: <Mail className="w-5 h-5" />, status: "Available", detail: "" },
  { name: "Calendar", icon: <Calendar className="w-5 h-5" />, status: "Available", detail: "" },
];

export default function ToolEcosystem() {
  return (
    <section id="tools" className="relative py-24 lg:py-32 overflow-hidden">
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
            Integrations
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Give agents the tools to act.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Connect your agents to the tools and services they need to accomplish real-world tasks.
          </p>
        </motion.div>

        {/* Tool Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group relative rounded-xl border border-border bg-surface p-4 hover:border-border-active transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-muted group-hover:text-foreground transition-colors">
                  {tool.icon}
                </div>
                <div>
                  <span className="text-sm font-medium block">{tool.name}</span>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <div
                      className={`w-1 h-1 rounded-full ${
                        tool.status === "Connected" ? "bg-success" : "bg-muted/30"
                      }`}
                    />
                    <span
                      className={`text-[10px] font-mono ${
                        tool.status === "Connected"
                          ? "text-success/80"
                          : "text-muted/50"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>
                  {tool.detail && (
                    <span className="text-[9px] text-muted/40 block mt-0.5">
                      {tool.detail}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
