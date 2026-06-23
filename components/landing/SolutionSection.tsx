"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Radio, Zap, Bell, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01", icon: Radio, color: "#2563EB",
    bg: "bg-[#EFF6FF] border-[#DBEAFE]",
    title: "Detection",
    desc: "Vehicle A enters the 500m detection zone of a known blind curve. BlindSight identifies its position and direction via GPS.",
  },
  {
    num: "02", icon: Zap, color: "#8B5CF6",
    bg: "bg-[#F5F3FF] border-[#DDD6FE]",
    title: "Signal",
    desc: "BlindSight broadcasts an encrypted presence signal across the curve's detection zone in under 100 milliseconds.",
  },
  {
    num: "03", icon: Bell, color: "#F59E0B",
    bg: "bg-[#FFFBEB] border-[#FEF3C7]",
    title: "Warning",
    desc: "Vehicle B receives an instant audio + visual alert: \"Vehicle approaching from the opposite side. Reduce speed.\"",
  },
  {
    num: "04", icon: ShieldCheck, color: "#10B981",
    bg: "bg-[#ECFDF5] border-[#D1FAE5]",
    title: "Safe Passage",
    desc: "Both drivers slow down, move to their side, and navigate the curve safely. Collision prevented.",
  },
];

export default function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solution" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-18"
        >
          <p className="section-eyebrow mb-4">The Solution</p>
          <div className="section-divider mb-6" />
          <h2
            className="font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.1] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Connected awareness.
            <br />
            <span className="text-gradient-brand">Before the bend.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            BlindSight creates an invisible shield at every dangerous curve — warning both
            drivers before they have any chance to see each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#CBD5E1] transition-colors group"
                style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)" }}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${s.bg}`}>
                  <s.icon className="h-5 w-5" style={{ color: s.color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold" style={{ color: s.color }}>{s.num}</span>
                    <h3 className="text-sm font-semibold text-[#0F172A]">{s.title}</h3>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual — road diagram */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <SolutionDiagram />
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-[#94A3B8] text-sm mt-16 max-w-md mx-auto"
        >
          No infrastructure changes required.{" "}
          <span className="text-[#0F172A] font-medium">Just awareness, exactly when you need it.</span>
        </motion.p>
      </div>
    </section>
  );
}

function SolutionDiagram() {
  return (
    <div
      className="relative w-full max-w-sm rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden p-8"
      style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.06), 0 16px 64px rgba(15,23,42,0.08)", aspectRatio: "1" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      <svg viewBox="0 0 260 260" className="relative w-full h-full">
        <defs>
          <linearGradient id="roadGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0"/>
            <stop offset="100%" stopColor="#CBD5E1"/>
          </linearGradient>
          <filter id="glow-light">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Road */}
        <path d="M 40 220 Q 130 220 130 130 Q 130 40 220 40"
          fill="none" stroke="url(#roadGradLight)" strokeWidth="36" strokeLinecap="round"/>
        {/* Center line */}
        <path d="M 40 220 Q 130 220 130 130 Q 130 40 220 40"
          fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 8" strokeLinecap="round"/>

        {/* Detection zone */}
        <circle cx="130" cy="130" r="30" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5"/>

        {/* BS node */}
        <circle cx="130" cy="130" r="14" fill="#2563EB"/>
        <text x="130" y="134" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">BS</text>

        {/* Pulse rings */}
        <motion.circle cx="130" cy="130" r="14"
          fill="none" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.5"
          animate={{ r: [14, 30, 46], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.circle cx="130" cy="130" r="14"
          fill="none" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3"
          animate={{ r: [14, 30, 46], opacity: [0.4, 0.15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />

        {/* Vehicle A */}
        <motion.circle r="9" fill="#2563EB" filter="url(#glow-light)"
          animate={{ cx: [50, 85, 115, 130], cy: [210, 190, 155, 130] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />
        <motion.text fontSize="5.5" fill="white" fontWeight="700" textAnchor="middle"
          animate={{ x: [50, 85, 115, 130], y: [213, 193, 158, 133] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        >A</motion.text>

        {/* Vehicle B */}
        <motion.circle r="9" fill="#F59E0B" filter="url(#glow-light)"
          animate={{ cx: [210, 175, 145, 130], cy: [50, 70, 105, 130] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />
        <motion.text fontSize="5.5" fill="white" fontWeight="700" textAnchor="middle"
          animate={{ x: [210, 175, 145, 130], y: [53, 73, 108, 133] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        >B</motion.text>

        {/* Alert lines */}
        <motion.line x1="130" y1="130" x2="50" y2="210"
          stroke="#2563EB" strokeWidth="1" strokeDasharray="4 3"
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.line x1="130" y1="130" x2="210" y2="50"
          stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 3"
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>

      {/* Labels */}
      <div className="absolute bottom-5 left-5 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#2563EB]"/>
        <span className="text-[10px] text-[#475569] font-medium">Driver A</span>
      </div>
      <div className="absolute top-5 right-5 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#F59E0B]"/>
        <span className="text-[10px] text-[#475569] font-medium">Driver B</span>
      </div>
    </div>
  );
}
