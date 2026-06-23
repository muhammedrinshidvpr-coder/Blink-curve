"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Zap } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />

      {/* Decorative blurred circles */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-[#2563EB]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-[360px] h-[360px] rounded-full bg-[#10B981]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-10">
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <span className="badge-blue gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            Road Safety Intelligence · MVP 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-center font-extrabold text-[#0F172A] leading-[1.04] tracking-[-0.035em] text-balance mb-7"
          style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
        >
          See Beyond
          <br />
          <span className="text-gradient-brand">The Curve.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.16)}
          className="text-center text-[#475569] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Every year, thousands of lives are lost on mountain roads—not from reckless driving,
          but from the simple inability to see what&apos;s coming.{" "}
          <span className="text-[#0F172A] font-medium">BlindSight changes that.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_1px_2px_rgba(37,99,235,0.25),0_6px_20px_rgba(37,99,235,0.22)] hover:bg-[#1D4ED8] hover:shadow-[0_2px_4px_rgba(37,99,235,0.3),0_10px_28px_rgba(37,99,235,0.28)] transition-all duration-200 group"
          >
            Join the Waitlist
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:border-[#CBD5E1] hover:shadow-[0_2px_8px_rgba(15,23,42,0.08)] transition-all duration-200"
          >
            How It Works
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div {...fadeUp(0.28)}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-16">
            {[
              { value: "4,500+", label: "Deaths annually", note: "Mountain roads, India" },
              { value: "60%",    label: "At blind curves", note: "Of all accidents" },
              { value: "<500ms", label: "Alert latency",   note: "Detection to warning" },
              { value: "0",      label: "Real warnings",   note: "Exist today" },
            ].map((s) => (
              <div key={s.label} className="stat-card text-center">
                <p className="text-2xl font-extrabold text-[#2563EB] tracking-tight tabular-nums mb-1">{s.value}</p>
                <p className="text-xs font-semibold text-[#0F172A] mb-0.5">{s.label}</p>
                <p className="text-[10px] text-[#94A3B8]">{s.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero visual — Alert showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <HeroVisualCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#94A3B8]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4 text-[#CBD5E1]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeroVisualCard() {
  return (
    <div
      className="relative bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden"
      style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.06), 0 24px 80px rgba(15,23,42,0.09)" }}
    >
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#F1F5F9] bg-[#F8FAFC]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FCA5A5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FCD34D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#86EFAC]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-[#E2E8F0] text-xs text-[#94A3B8]">
            <Shield className="h-3 w-3 text-[#2563EB]" />
            blindsight.app · Road Intelligence
          </div>
        </div>
      </div>

      {/* Main visual */}
      <div className="relative p-6 sm:p-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">

          {/* Vehicle A */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center">
              <svg viewBox="0 0 32 20" className="w-8 h-5" fill="none">
                <rect x="2" y="6" width="28" height="11" rx="4" fill="#2563EB" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1.5"/>
                <rect x="7" y="3" width="14" height="7" rx="2" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="1.2"/>
                <circle cx="8" cy="17" r="2.5" fill="#2563EB" fillOpacity="0.3" stroke="#2563EB" strokeWidth="1"/>
                <circle cx="24" cy="17" r="2.5" fill="#2563EB" fillOpacity="0.3" stroke="#2563EB" strokeWidth="1"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-[#0F172A]">Driver A</p>
              <p className="text-[10px] text-[#94A3B8]">Approaching curve</p>
            </div>
            <div className="badge-blue text-[10px]">42 km/h</div>
          </div>

          {/* Center — Curve + BlindSight */}
          <div className="flex flex-col items-center gap-3">
            {/* Road SVG */}
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 112 112" className="w-full h-full">
                <defs>
                  <linearGradient id="roadGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E2E8F0"/>
                    <stop offset="100%" stopColor="#CBD5E1"/>
                  </linearGradient>
                </defs>
                {/* Road */}
                <path d="M 15 95 Q 56 95 56 56 Q 56 17 97 17" stroke="url(#roadGrad)" strokeWidth="22" strokeLinecap="round" fill="none"/>
                {/* Center line */}
                <path d="M 15 95 Q 56 95 56 56 Q 56 17 97 17" stroke="white" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" fill="none"/>
                {/* BlindSight node */}
                <circle cx="56" cy="56" r="12" fill="#2563EB" opacity="0.12"/>
                <circle cx="56" cy="56" r="7" fill="#2563EB"/>
                <text x="56" y="59.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">BS</text>

                {/* Ping rings */}
                <motion.circle cx="56" cy="56" r="14"
                  fill="none" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.4"
                  animate={{ r: [14, 26, 38], opacity: [0.5, 0.2, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle cx="56" cy="56" r="14"
                  fill="none" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3"
                  animate={{ r: [14, 26, 38], opacity: [0.4, 0.15, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
                />

                {/* Vehicle dots */}
                <motion.circle r="5" fill="#2563EB"
                  animate={{ cx: [18, 34, 48, 56], cy: [92, 80, 66, 56] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />
                <motion.circle r="5" fill="#F59E0B"
                  animate={{ cx: [94, 78, 64, 56], cy: [20, 32, 46, 56] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />
              </svg>
            </div>

            {/* Alert badge */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FEF3C7] bg-[#FFFBEB] shadow-[0_2px_8px_rgba(245,158,11,0.15)]"
            >
              <Zap className="h-3 w-3 text-[#D97706]" />
              <span className="text-[10px] font-semibold text-[#D97706]">Alert sent</span>
            </motion.div>
          </div>

          {/* Vehicle B */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-[#FFFBEB] border border-[#FEF3C7] flex items-center justify-center">
              <svg viewBox="0 0 32 20" className="w-8 h-5" fill="none">
                <rect x="2" y="6" width="28" height="11" rx="4" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="1.5"/>
                <rect x="7" y="3" width="14" height="7" rx="2" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="1.2"/>
                <circle cx="8" cy="17" r="2.5" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1"/>
                <circle cx="24" cy="17" r="2.5" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-[#0F172A]">Driver B</p>
              <p className="text-[10px] text-[#94A3B8]">Warned in time</p>
            </div>
            <div className="badge-green text-[10px]">Slowing down</div>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="mt-6 pt-5 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs text-[#475569]">BlindSight Active — Vagamon Hairpin #3</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-[#94A3B8] font-mono">
            <span>Range: 350m</span>
            <span>Latency: 312ms</span>
            <span className="text-[#10B981] font-medium">✓ Safe passage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
