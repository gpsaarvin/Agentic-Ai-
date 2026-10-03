"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  LayoutGrid,
  Bot,
  ListTodo,
  GitBranch,
  Wrench,
  Database,
  Activity,
  Settings,
  User,
  Search,
  Globe,
  FileText,
  Shield,
  CheckCircle2,
  Clock,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { icon: <LayoutGrid className="w-4 h-4" />, label: "Overview", active: false },
  { icon: <Bot className="w-4 h-4" />, label: "Agents", active: true },
  { icon: <ListTodo className="w-4 h-4" />, label: "Tasks", active: false },
  { icon: <GitBranch className="w-4 h-4" />, label: "Workflows", active: false },
  { icon: <Wrench className="w-4 h-4" />, label: "Tools", active: false },
  { icon: <Database className="w-4 h-4" />, label: "Memory", active: false },
  { icon: <Activity className="w-4 h-4" />, label: "Activity", active: false },
  { icon: <Settings className="w-4 h-4" />, label: "Settings", active: false },
];

const agentCards = [
  {
    name: "Research Agent",
    action: "Searching web...",
    detail: "12 sources discovered",
    progress: 100,
    icon: <Search className="w-3.5 h-3.5" />,
    status: "active",
    time: "2s ago",
  },
  {
    name: "Analysis Agent",
    action: "Comparing results...",
    detail: "87% complete",
    progress: 87,
    icon: <Activity className="w-3.5 h-3.5" />,
    status: "active",
    time: "1s ago",
  },
  {
    name: "Writer Agent",
    action: "Generating report...",
    detail: "",
    progress: 45,
    icon: <FileText className="w-3.5 h-3.5" />,
    status: "active",
    time: "now",
  },
  {
    name: "Verification Agent",
    action: "Checking sources...",
    detail: "",
    progress: 20,
    icon: <Shield className="w-3.5 h-3.5" />,
    status: "queued",
    time: "pending",
  },
];

const planSteps = [
  { step: "01", label: "Understand objective", done: true },
  { step: "02", label: "Research sources", done: true },
  { step: "03", label: "Analyze findings", done: false },
  { step: "04", label: "Generate report", done: false },
  { step: "05", label: "Verify output", done: false },
];

const tools = [
  { name: "Web Search", status: "active" },
  { name: "Browser", status: "active" },
  { name: "Code Runner", status: "idle" },
  { name: "File System", status: "idle" },
];

export default function AgentDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-[11px] font-mono tracking-[0.2em] text-accent uppercase">
            Command Center
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            One goal. Multiple agents.
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Orchestrate autonomous agents from a single unified workspace. Monitor, control, and refine in real-time.
          </p>
        </motion.div>
      </div>

      {/* Dashboard Mock */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-[1280px] mx-auto px-4 lg:px-8"
      >
        <div className="relative rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/50">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-raised/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="text-[10px] font-mono text-muted ml-3">
                nexa.ai/workspace
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-muted/60">
              <span>LATENCY: 12ms</span>
              <span>TOKENS: 2,847</span>
            </div>
          </div>

          <div className="flex min-h-[520px]">
            {/* Left Sidebar */}
            <div className="hidden md:flex flex-col w-52 border-r border-border bg-surface-raised/30 p-3">
              <div className="flex items-center gap-2 px-3 py-2 mb-4">
                <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span className="text-xs font-medium">Workspace</span>
              </div>

              <div className="flex flex-col gap-0.5 flex-1">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                      item.active
                        ? "bg-white/[0.05] text-foreground"
                        : "text-muted hover:text-foreground hover:bg-white/[0.02]"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-2 px-3 py-2 mt-auto border-t border-border pt-3">
                <div className="w-6 h-6 rounded-full bg-surface-elevated border border-border flex items-center justify-center">
                  <User className="w-3 h-3 text-muted" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium">User</span>
                  <span className="text-[9px] text-muted">Pro Plan</span>
                </div>
              </div>
            </div>

            {/* Center Panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <div>
                  <h3 className="text-sm font-medium">Agent Workspace</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-[10px] text-muted">4 agents active</span>
                  </div>
                </div>
                <div className="text-[9px] font-mono text-muted/50">
                  TASK-ID: 0x7f2a
                </div>
              </div>

              <div className="flex-1 p-5 space-y-4 overflow-auto">
                {/* User instruction */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                    <User className="w-3.5 h-3.5 text-muted" />
                  </div>
                  <div className="flex-1 bg-surface-raised border border-border rounded-xl px-4 py-3">
                    <p className="text-sm text-foreground/90">
                      &ldquo;Research the latest AI developer tools, compare their capabilities, and prepare a report.&rdquo;
                    </p>
                    <span className="text-[9px] font-mono text-muted/50 mt-2 block">
                      09:40:58 · EXECUTION TIME: 28s
                    </span>
                  </div>
                </div>

                {/* Agent Activity Cards */}
                <div className="space-y-2">
                  {agentCards.map((agent, idx) => (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                      className="flex items-center gap-3 px-4 py-3 bg-surface-raised/50 border border-border rounded-xl hover:border-border-active transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          agent.status === "active"
                            ? "bg-accent/10 text-accent"
                            : "bg-white/[0.03] text-muted"
                        }`}
                      >
                        {agent.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium">{agent.name}</span>
                          {agent.status === "active" && (
                            <div className="w-1 h-1 rounded-full bg-success animate-pulse" />
                          )}
                        </div>
                        <p className="text-[11px] text-muted truncate">
                          {agent.action}
                          {agent.detail && (
                            <span className="text-muted/50"> · {agent.detail}</span>
                          )}
                        </p>
                      </div>
                      {/* Progress bar */}
                      <div className="w-20 hidden sm:block">
                        <div className="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-accent/60"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${agent.progress}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.6 + idx * 0.2 }}
                          />
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-muted/40 hidden sm:block">
                        {agent.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="hidden lg:flex flex-col w-56 border-l border-border bg-surface-raised/20 p-4 space-y-6">
              {/* Plan */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
                    Execution Plan
                  </span>
                </div>
                <div className="space-y-1.5">
                  {planSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md"
                    >
                      {step.done ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-border shrink-0" />
                      )}
                      <span
                        className={`text-[11px] ${
                          step.done ? "text-muted line-through" : "text-foreground/80"
                        }`}
                      >
                        <span className="font-mono text-muted/40 mr-1">
                          {step.step}
                        </span>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
                    Tools
                  </span>
                </div>
                <div className="space-y-1">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between px-2 py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-1 h-1 rounded-full ${
                            tool.status === "active" ? "bg-success" : "bg-muted/30"
                          }`}
                        />
                        <span className="text-[11px] text-foreground/70">
                          {tool.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memory */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
                    Memory
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2 py-2 bg-white/[0.02] rounded-lg border border-border">
                  <Database className="w-3.5 h-3.5 text-muted" />
                  <span className="text-[11px] text-muted">12 relevant memories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
