"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, CloudFog, Clock, AlertOctagon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const problems = [
  {
    icon: Eye,
    title: "Zero Sightline",
    description: "Hairpin bends offer literally zero visibility of oncoming traffic. You cannot see what's approaching until a collision is unavoidable.",
    color: "text-[#EF4444]",
    iconBg: "bg-[#FEF2F2] border-[#FECACA]",
  },
  {
    icon: CloudFog,
    title: "Weather Blindness",
    description: "Monsoon fog reduces visibility to under 10 metres on Kerala's ghat roads. Physical mirrors are useless. Honking achieves nothing in a fogbank.",
    color: "text-[#F59E0B]",
    iconBg: "bg-[#FFFBEB] border-[#FEF3C7]",
  },
  {
    icon: Clock,
    title: "No Reaction Time",
    description: "At 40 km/h you need 22 metres to stop. A vehicle appearing suddenly around a blind curve leaves 0.8 seconds — not enough.",
    color: "text-[#F97316]",
    iconBg: "bg-[#FFF7ED] border-[#FED7AA]",
  },
  {
    icon: AlertOctagon,
    title: "No Real-Time Solution",
    description: "Convex mirrors help only in clear daylight. Navigation apps detect roads, not vehicles. Nothing warns drivers in real time today.",
    color: "text-[#8B5CF6]",
    iconBg: "bg-[#F5F3FF] border-[#DDD6FE]",
  },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const count = useCountUp(target, inView ? 1600 : 0);
  return <>{count.toLocaleString()}{suffix}</>;
}

function ProblemCard({
  icon: Icon, title, description, color, iconBg, delay, inView,
}: typeof problems[number] & { delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="card-premium p-7"
    >
      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${iconBg}`}>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <h3 className={`font-semibold text-base mb-2 ${color}`}>{title}</h3>
      <p className="text-sm text-[#475569] leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-4">The Problem</p>
          <div className="section-divider mb-6" />
          <h2
            className="font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.1] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            The deadliest roads aren&apos;t highways.
            <br />
            <span className="text-[#EF4444]">They&apos;re hairpin bends.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            Kerala&apos;s ghat roads carry millions of vehicles through breathtaking landscapes —
            and around blind corners that no existing technology can warn you about.
          </p>
        </motion.div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: 4500, suffix: "+", label: "Mountain road deaths", sub: "India annually" },
            { value: 60,   suffix: "%", label: "At blind curves",      sub: "Of all accidents" },
            { value: 3,    suffix: "s", label: "Reaction time needed", sub: "Average minimum" },
            { value: 0,    suffix: "",  label: "Real-time warnings",   sub: "Available today" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 text-center"
              style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.05)" }}
            >
              <p className="text-3xl font-extrabold text-[#0F172A] tabular-nums tracking-tight mb-1">
                <CountUp target={s.value} suffix={s.suffix} inView={statsInView} />
              </p>
              <p className="text-xs font-semibold text-[#0F172A] mb-0.5">{s.label}</p>
              <p className="text-[10px] text-[#94A3B8]">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} {...p} delay={0.05 + i * 0.1} inView={inView} />
          ))}
        </div>

        {/* Location pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <p className="w-full text-center text-xs text-[#94A3B8] mb-2">Most dangerous locations</p>
          {["Vagamon", "Munnar", "Idukki", "Wayanad", "Rajamala", "Ponmudi"].map((loc) => (
            <span
              key={loc}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E2E8F0] text-[#475569]"
              style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.05)" }}
            >
              {loc}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
