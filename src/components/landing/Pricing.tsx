"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Explorer",
    price: "$0",
    period: "",
    description: "Get started with autonomous agents",
    features: [
      "2 agents",
      "100 tasks/month",
      "Basic tools",
      "Community support",
    ],
    cta: "Start Free",
  },
  {
    name: "Builder",
    price: "$19",
    period: "/month",
    description: "For developers building with agents",
    features: [
      "10 agents",
      "5,000 tasks/month",
      "All tools",
      "Workflow builder",
      "Priority support",
      "API access",
    ],
    cta: "Start Building",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$79",
    period: "/month",
    description: "For teams running at scale",
    features: [
      "Unlimited agents",
      "50,000 tasks/month",
      "Custom tools",
      "Advanced workflows",
      "Team collaboration",
      "SLA guarantee",
    ],
    cta: "Start Scaling",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with custom needs",
    features: [
      "Unlimited everything",
      "On-premise deployment",
      "Custom integrations",
      "Dedicated support",
      "Security compliance",
      "Custom SLA",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
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
            Pricing
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Scale with your ambition.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Start free. Upgrade as your agents grow.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl border p-6 flex flex-col transition-colors ${
                plan.highlighted
                  ? "border-accent/30 bg-accent/[0.02]"
                  : "border-border bg-surface hover:border-border-active"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
                  {plan.name}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-xs text-muted">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-muted/50 shrink-0" />
                    <span className="text-xs text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-white/[0.04] text-foreground border border-border hover:border-border-active hover:bg-white/[0.06]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
