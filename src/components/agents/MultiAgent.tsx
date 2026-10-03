"use client";

import { motion } from "framer-motion";
import {
  Search,
  Brain,
  Code,
  BarChart3,
  Zap,
} from "lucide-react";

const agents = [
  {
    num: "01",
    name: "Researcher",
    icon: <Search className="w-5 h-5" />,
    status: "Active",
    capability: "Web search, data extraction, source validation",
    tasks: 2847,
  },
  {
    num: "02",
    name: "Planner",
    icon: <Brain className="w-5 h-5" />,
    status: "Active",
    capability: "Task decomposition, dependency mapping, scheduling",
    tasks: 1923,
  },
  {
    num: "03",
    name: "Coder",
    icon: <Code className="w-5 h-5" />,
    status: "Active",
    capability: "Code generation, debugging, testing, deployment",
    tasks: 3156,
  },
  {
    num: "04",
    name: "Analyst",
    icon: <BarChart3 className="w-5 h-5" />,
    status: "Standby",
    capability: "Data analysis, pattern recognition, reporting",
    tasks: 1482,
  },
  {
    num: "05",
    name: "Executor",
    icon: <Zap className="w-5 h-5" />,
    status: "Active",
    capability: "Action execution, API calls, workflow management",
    tasks: 4521,
  },
];

export default function MultiAgent() {
  return (
    <section id="agents" className="relative py-24 lg:py-32 overflow-hidden">
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
            Multi-Agent System
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            One agent is powerful.
          </h2>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-accent to-accent-dim bg-clip-text text-transparent">
              A team is autonomous.
            </span>
          </h2>
        </motion.div>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-surface p-5 hover:border-accent/20 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-muted/40 block mb-3">
                  {agent.num}
                </span>

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                    agent.status === "Active"
                      ? "bg-accent/10 text-accent group-hover:bg-accent/15"
                      : "bg-white/[0.04] text-muted group-hover:text-foreground"
                  }`}
                >
                  {agent.icon}
                </div>

                <h3 className="text-base font-medium mb-1">{agent.name}</h3>

                <div className="flex items-center gap-1.5 mb-3">
                  <div
                    className={`w-1 h-1 rounded-full ${
                      agent.status === "Active" ? "bg-success" : "bg-muted/30"
                    }`}
                  />
                  <span className="text-[10px] font-mono text-muted">
                    {agent.status.toUpperCase()}
                  </span>
                </div>

                <p className="text-[11px] text-muted/70 leading-relaxed mb-4">
                  {agent.capability}
                </p>

                {/* Activity bar - appears on hover */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center justify-between text-[9px] font-mono text-muted/50 mb-1">
                    <span>TASKS</span>
                    <span>{agent.tasks.toLocaleString()}</span>
                  </div>
                  <div className="h-0.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <motion.div
                      className="h-full bg-accent/40 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min((agent.tasks / 5000) * 100, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
