"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Brain,
  Search,
  BarChart3,
  Play,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Bot,
  Wrench,
  GitBranch,
} from "lucide-react";

const workflowNodes = [
  { id: "trigger", label: "Trigger", icon: <Zap className="w-4 h-4" />, color: "text-warning" },
  { id: "planner", label: "Planner", icon: <Brain className="w-4 h-4" />, color: "text-accent" },
  { id: "research", label: "Research", icon: <Search className="w-4 h-4" />, color: "text-accent" },
  { id: "analyze", label: "Analyze", icon: <BarChart3 className="w-4 h-4" />, color: "text-accent" },
  { id: "execute", label: "Execute", icon: <Play className="w-4 h-4" />, color: "text-accent" },
  { id: "verify", label: "Verify", icon: <ShieldCheck className="w-4 h-4" />, color: "text-accent" },
  { id: "done", label: "Done", icon: <CheckCircle2 className="w-4 h-4" />, color: "text-success" },
];

export default function WorkflowCanvas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workflows" className="relative py-24 lg:py-32 overflow-hidden">
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
            Workflow Engine
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Design autonomous workflows.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Create complex multi-step pipelines with a visual canvas. Connect agents, tools, and conditions.
          </p>
        </motion.div>

        {/* Canvas */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            {/* Canvas header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-raised/50">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium">Workflow Canvas</span>
                <span className="text-[9px] font-mono text-muted/50 px-2 py-0.5 rounded bg-white/[0.03] border border-border">
                  DRAFT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-muted border border-border hover:border-border-active transition-colors">
                  <Plus className="w-3 h-3" />
                  Add Agent
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-muted border border-border hover:border-border-active transition-colors">
                  <Wrench className="w-3 h-3" />
                  Add Tool
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-muted border border-border hover:border-border-active transition-colors">
                  <GitBranch className="w-3 h-3" />
                  Add Condition
                </button>
              </div>
            </div>

            {/* Canvas content */}
            <div className="p-8 md:p-12 grid-pattern-fine min-h-[400px] flex items-center justify-center">
              <div className="flex flex-col items-center gap-0">
                {workflowNodes.map((node, idx) => (
                  <div key={node.id} className="flex flex-col items-center">
                    {/* Connector line from previous */}
                    {idx > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isInView ? { height: 32, opacity: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.12 }}
                        className="w-px bg-border relative overflow-hidden"
                      >
                        {/* Animated data flow dot */}
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                          animate={{
                            top: ["-4px", "36px"],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: idx * 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Node */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.12 }}
                      whileHover={{ scale: 1.05 }}
                      className="group relative"
                    >
                      <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-raised border border-border hover:border-border-active transition-all cursor-pointer group-hover:glow-accent">
                        <div
                          className={`w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center ${node.color}`}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <span className="text-sm font-medium block">{node.label}</span>
                          <span className="text-[9px] font-mono text-muted/50">
                            NODE-{String(idx).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
