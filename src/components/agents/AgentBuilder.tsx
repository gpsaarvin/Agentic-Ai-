"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search,
  Globe,
  Code,
  GitBranch as Github,
  Database,
  Mail,
  Calendar,
  Check,
  Cpu,
  ChevronDown,
} from "lucide-react";

const toolOptions = [
  { name: "Web Search", icon: <Search className="w-4 h-4" />, selected: true },
  { name: "Browser", icon: <Globe className="w-4 h-4" />, selected: true },
  { name: "Code Interpreter", icon: <Code className="w-4 h-4" />, selected: false },
  { name: "GitHub", icon: <Github className="w-4 h-4" />, selected: true },
  { name: "Database", icon: <Database className="w-4 h-4" />, selected: false },
  { name: "Email", icon: <Mail className="w-4 h-4" />, selected: false },
  { name: "Calendar", icon: <Calendar className="w-4 h-4" />, selected: false },
];

export default function AgentBuilder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTools, setSelectedTools] = useState<string[]>(
    toolOptions.filter((t) => t.selected).map((t) => t.name)
  );

  const toggleTool = (name: string) => {
    setSelectedTools((prev) =>
      prev.includes(name)
        ? prev.filter((t) => t !== name)
        : [...prev, name]
    );
  };

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
            Agent Builder
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Build an agent in minutes.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Configure capabilities, assign tools, and deploy autonomous agents without writing code.
          </p>
        </motion.div>

        {/* Builder UI */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Left: Configuration */}
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="px-5 py-3 border-b border-border flex items-center justify-between">
              <span className="text-xs font-medium">Agent Configuration</span>
              <span className="text-[9px] font-mono text-muted/50">AGENT-ID: 0x3e1b</span>
            </div>

            <div className="p-5 space-y-4">
              {/* Agent Name */}
              <div>
                <label className="text-[10px] font-mono tracking-wider text-muted uppercase block mb-1.5">
                  Agent Name
                </label>
                <div className="px-3 py-2.5 rounded-lg bg-surface-raised border border-border text-sm text-foreground/80">
                  Research Assistant
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-[10px] font-mono tracking-wider text-muted uppercase block mb-1.5">
                  Description
                </label>
                <div className="px-3 py-2.5 rounded-lg bg-surface-raised border border-border text-sm text-muted">
                  Autonomous agent for deep research and analysis tasks
                </div>
              </div>

              {/* Model */}
              <div>
                <label className="text-[10px] font-mono tracking-wider text-muted uppercase block mb-1.5">
                  Model
                </label>
                <div className="px-3 py-2.5 rounded-lg bg-surface-raised border border-border text-sm text-foreground/80 flex items-center justify-between">
                  <span>nexa-agent-v2</span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted" />
                </div>
              </div>

              {/* Instructions */}
              <div>
                <label className="text-[10px] font-mono tracking-wider text-muted uppercase block mb-1.5">
                  Instructions
                </label>
                <div className="px-3 py-2.5 rounded-lg bg-surface-raised border border-border text-xs text-muted min-h-[60px]">
                  Search multiple sources, cross-reference findings, prioritize credible sources, and produce structured reports...
                </div>
              </div>

              {/* Tools */}
              <div>
                <label className="text-[10px] font-mono tracking-wider text-muted uppercase block mb-2">
                  Tools
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {toolOptions.map((tool) => {
                    const isSelected = selectedTools.includes(tool.name);
                    return (
                      <motion.button
                        key={tool.name}
                        onClick={() => toggleTool(tool.name)}
                        whileTap={{ scale: 0.97 }}
                        className={`relative flex items-center gap-2 px-3 py-2 rounded-lg border text-[11px] transition-all ${
                          isSelected
                            ? "border-accent/30 bg-accent/[0.05] text-accent"
                            : "border-border bg-surface-raised text-muted hover:border-border-active"
                        }`}
                      >
                        {tool.icon}
                        <span className="truncate">{tool.name}</span>
                        {isSelected && (
                          <Check className="w-3 h-3 absolute top-1 right-1 text-accent" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Preview */}
          <div className="rounded-2xl border border-border bg-surface overflow-hidden flex flex-col">
            <div className="px-5 py-3 border-b border-border flex items-center justify-between">
              <span className="text-xs font-medium">Live Agent Preview</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] text-success">Online</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-6">
              {/* Agent Visual */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-2xl bg-surface-raised border border-border-active flex items-center justify-center glow-accent">
                  <Cpu className="w-10 h-10 text-accent" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-success border-2 border-surface flex items-center justify-center">
                  <Check className="w-2 h-2 text-background" />
                </div>
                {/* Pulse rings */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-accent/20"
                  animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-accent/10"
                  animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              <div className="text-center space-y-2">
                <h4 className="text-lg font-medium">Research Assistant</h4>
                <p className="text-xs text-muted">Agent Online</p>
              </div>

              <div className="w-full max-w-xs space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-muted">Status</span>
                  <span className="text-success font-mono">READY</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-muted">Model</span>
                  <span className="font-mono text-foreground/70">nexa-agent-v2</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-muted">Tools</span>
                  <span className="font-mono text-foreground/70">
                    {selectedTools.length} active
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-muted">Memory</span>
                  <span className="font-mono text-foreground/70">Enabled</span>
                </div>
              </div>

              <div className="px-4 py-2.5 rounded-lg bg-surface-raised border border-border text-center w-full max-w-xs">
                <p className="text-[11px] text-muted italic">
                  &ldquo;Ready to execute tasks.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
