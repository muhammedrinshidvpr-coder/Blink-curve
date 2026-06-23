"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Radio, Car, Globe } from "lucide-react";
import { PHASES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const phaseIcons = [Smartphone, Radio, Car, Globe];
const phaseColors = [
  { text: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#DBEAFE]", dot: "bg-[#2563EB]", line: "bg-[#2563EB]" },
  { text: "text-[#8B5CF6]", bg: "bg-[#F5F3FF]", border: "border-[#DDD6FE]", dot: "bg-[#8B5CF6]", line: "bg-[#8B5CF6]" },
  { text: "text-[#F59E0B]", bg: "bg-[#FFFBEB]", border: "border-[#FEF3C7]", dot: "bg-[#F59E0B]", line: "bg-[#F59E0B]" },
  { text: "text-[#10B981]", bg: "bg-[#ECFDF5]", border: "border-[#D1FAE5]", dot: "bg-[#10B981]", line: "bg-[#10B981]" },
];

export default function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vision" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-18"
        >
          <p className="section-eyebrow mb-4">The Road Ahead</p>
          <div className="section-divider mb-6" />
          <h2
            className="font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.1] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            We&apos;re building the world&apos;s first
            <br />
            <span className="text-gradient-brand">blind curve safety network.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            BlindSight is not just an app. It&apos;s the foundation for smart road infrastructure
            that will connect every dangerous curve on every mountain road.
          </p>
        </motion.div>

        {/* Phase timeline */}
        <div className="relative mt-16">
          {/* Vertical connector on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#2563EB]/30 via-[#8B5CF6]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-12">
            {PHASES.map((phase, i) => {
              const Icon = phaseIcons[i];
              const colors = phaseColors[i];
              const isLeft = i % 2 === 0;
              const isCurrent = phase.status === "current";

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12",
                    isLeft ? "" : "lg:[direction:rtl]"
                  )}
                >
                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={cn(
                      "w-3.5 h-3.5 rounded-full ring-4 ring-white",
                      isCurrent ? `${colors.dot} shadow-[0_0_10px_rgba(37,99,235,0.4)]` : "bg-[#CBD5E1]"
                    )} />
                  </div>

                  <div className={cn("lg:[direction:ltr]", isLeft ? "lg:pr-14" : "lg:pl-14")}>
                    <div className={cn(
                      "p-6 rounded-2xl border transition-all duration-300",
                      isCurrent
                        ? `${colors.border} ${colors.bg}`
                        : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1]",
                    )} style={{ boxShadow: isCurrent ? "0 4px 24px rgba(15,23,42,0.07)" : "0 1px 3px rgba(15,23,42,0.04)" }}>

                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-10 h-10 rounded-xl border flex items-center justify-center shrink-0",
                          isCurrent ? `${colors.bg} ${colors.border}` : "bg-[#F8FAFC] border-[#E2E8F0]"
                        )}>
                          <Icon className={cn("h-5 w-5", isCurrent ? colors.text : "text-[#CBD5E1]")} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={cn("text-xs font-mono font-semibold", isCurrent ? colors.text : "text-[#CBD5E1]")}>
                              Phase {phase.phase}
                            </span>
                            {isCurrent && (
                              <span className={cn("text-[10px] px-2 py-0.5 rounded-full border font-medium", colors.bg, colors.border, colors.text)}>
                                Now
                              </span>
                            )}
                            <span className="ml-auto text-[10px] text-[#94A3B8] font-mono">{phase.timeline}</span>
                          </div>
                          <h3 className={cn("font-semibold text-sm mb-2", isCurrent ? "text-[#0F172A]" : "text-[#94A3B8]")}>
                            {phase.title}
                          </h3>
                          <p className={cn("text-sm leading-relaxed mb-4", isCurrent ? "text-[#475569]" : "text-[#CBD5E1]")}>
                            {phase.description}
                          </p>
                          <ul className="space-y-1.5">
                            {phase.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-xs">
                                <div className={cn("w-1 h-1 rounded-full shrink-0", isCurrent ? colors.line : "bg-[#E2E8F0]")} />
                                <span className={isCurrent ? "text-[#475569]" : "text-[#CBD5E1]"}>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
