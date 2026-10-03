"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Platform", href: "#platform" },
    { label: "Agents", href: "#agents" },
    { label: "Workflows", href: "#workflows" },
    { label: "Tools", href: "#tools" },
    { label: "Pricing", href: "#pricing" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "Security", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-wider">NEXA</span>
                <span className="text-[8px] font-mono tracking-[0.2em] text-muted uppercase">
                  Agentic AI
                </span>
              </div>
            </div>
            <p className="text-xs text-muted/60 max-w-[200px] leading-relaxed">
              AI that thinks. Plans. Acts.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <span className="text-[10px] font-mono tracking-[0.15em] text-muted/50 uppercase block mb-4">
                {category}
              </span>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-muted/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-muted/40">
            © 2026 NEXA AI. All rights reserved.
          </span>
          <span className="text-[10px] font-mono text-muted/30 tracking-wider">
            Built for the agentic era.
          </span>
        </div>
      </div>
    </footer>
  );
}
