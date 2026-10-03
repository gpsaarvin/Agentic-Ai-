"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MetricData {
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
}

const metrics: MetricData[] = [
  { value: "12,482", label: "Tasks completed", numericValue: 12482 },
  { value: "98.7%", label: "Successful executions", numericValue: 98.7, suffix: "%" },
  { value: "4.2M", label: "Tool calls", numericValue: 4.2, suffix: "M" },
  { value: "24/7", label: "Autonomous runtime" },
];

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  isDecimal = false,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue = isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface p-6 md:p-8 text-center group hover:border-border-active transition-colors"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                {metric.numericValue !== undefined ? (
                  <AnimatedCounter
                    value={metric.numericValue}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    isDecimal={metric.suffix === "%" || metric.suffix === "M"}
                  />
                ) : (
                  <span>{metric.value}</span>
                )}
              </div>
              <p className="text-xs text-muted">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
