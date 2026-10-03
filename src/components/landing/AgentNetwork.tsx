"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Search,
  Globe,
  Code,
  Database,
  BarChart3,
  Zap,
  Cpu,
} from "lucide-react";

interface AgentNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  angle: number;
  delay: number;
}

const nodes: AgentNode[] = [
  { id: "planner", label: "Planner", icon: <Brain className="w-4 h-4" />, angle: 0, delay: 0.1 },
  { id: "researcher", label: "Researcher", icon: <Search className="w-4 h-4" />, angle: 51.4, delay: 0.2 },
  { id: "browser", label: "Browser", icon: <Globe className="w-4 h-4" />, angle: 102.8, delay: 0.3 },
  { id: "code", label: "Code", icon: <Code className="w-4 h-4" />, angle: 154.2, delay: 0.4 },
  { id: "memory", label: "Memory", icon: <Database className="w-4 h-4" />, angle: 205.7, delay: 0.5 },
  { id: "analyzer", label: "Analyzer", icon: <BarChart3 className="w-4 h-4" />, angle: 257.1, delay: 0.6 },
  { id: "executor", label: "Executor", icon: <Zap className="w-4 h-4" />, angle: 308.5, delay: 0.7 },
];

export default function AgentNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const centerX = 300;
  const centerY = 240;
  const radius = 170;

  const getNodePosition = (angle: number) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    };
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto aspect-[5/4]">
      <svg
        viewBox="0 0 600 480"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient center glow */}
        <circle cx={centerX} cy={centerY} r="120" fill="url(#centerGlow)" />

        {/* Orbital ring */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius - 30}
          fill="none"
          stroke="rgba(255,255,255,0.02)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* Connection lines from center to each node */}
        {nodes.map((node) => {
          const pos = getNodePosition(node.angle);
          const isActive = activeNode === node.id;
          return (
            <motion.line
              key={`line-${node.id}`}
              x1={centerX}
              y1={centerY}
              x2={pos.x}
              y2={pos.y}
              stroke={isActive ? "var(--accent)" : "rgba(255,255,255,0.06)"}
              strokeWidth={isActive ? "1.5" : "0.5"}
              strokeDasharray={isActive ? "none" : "3 6"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: node.delay + 0.3 }}
            />
          );
        })}

        {/* Data flow particles */}
        {nodes.map((node, idx) => {
          const pos = getNodePosition(node.angle);
          return (
            <motion.circle
              key={`particle-${node.id}`}
              r="1.5"
              fill="var(--accent)"
              filter="url(#glow)"
              initial={{ cx: centerX, cy: centerY, opacity: 0 }}
              animate={{
                cx: [centerX, pos.x, centerX],
                cy: [centerY, pos.y, centerY],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + idx * 0.3,
                repeat: Infinity,
                delay: idx * 0.6,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Center Node */}
      <motion.div
        className="absolute flex flex-col items-center gap-1"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-surface-raised border border-border-active flex items-center justify-center glow-accent">
            <Cpu className="w-6 h-6 text-accent" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-success border-2 border-background animate-pulse" />
        </div>
        <span className="text-[10px] font-mono tracking-wider text-muted mt-1">
          NEXA AGENT
        </span>
      </motion.div>

      {/* Orbital Nodes */}
      {nodes.map((node) => {
        const pos = getNodePosition(node.angle);
        const isActive = activeNode === node.id;
        // Convert SVG coords to percentage positions
        const leftPct = (pos.x / 600) * 100;
        const topPct = (pos.y / 480) * 100;

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -4, 0],
            }}
            transition={{
              scale: { duration: 0.5, delay: node.delay + 0.5 },
              opacity: { duration: 0.5, delay: node.delay + 0.5 },
              y: {
                duration: 3 + node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <motion.div
              className={`relative flex flex-col items-center gap-1.5 cursor-pointer group`}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-accent/10 border border-accent/40 glow-accent text-accent"
                    : "bg-surface-raised border border-border text-muted group-hover:border-border-active group-hover:text-foreground"
                }`}
              >
                {node.icon}
              </div>
              <span
                className={`text-[9px] font-mono tracking-wider transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-muted/60 group-hover:text-muted"
                }`}
              >
                {node.label.toUpperCase()}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
