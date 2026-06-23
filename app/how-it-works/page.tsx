import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Radio, MapPin, Bell, ShieldCheck, Smartphone, Wifi, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "BlindSight's step-by-step: How GPS presence detection, real-time signals, and instant audio alerts prevent blind-curve collisions.",
  alternates: { canonical: "https://blindsight.app/how-it-works" },
};

const steps = [
  { number: "01", icon: Smartphone, title: "You open the app", description: "BlindSight runs silently in the background — just like a navigation app. No interaction required while driving.", detail: "The app uses your phone's GPS to track position with 3–5m accuracy. It loads the pre-mapped database of all known blind curves on your route.", color: "blue" },
  { number: "02", icon: MapPin, title: "You approach a blind curve", description: "BlindSight detects that you are entering the 500m detection zone of a known blind curve hazard.", detail: "Each curve in our database has a custom detection radius based on road geometry, speed limits, and historical accident data.", color: "violet" },
  { number: "03", icon: Radio, title: "BlindSight checks for oncoming vehicles", description: "The app broadcasts your presence to BlindSight's detection network and listens for other vehicles approaching the same curve.", detail: "In Phase 1 (app-based), this is peer-to-peer via BlindSight's presence server. In Phase 3 (device-based), roadside nodes detect vehicles by RF signature.", color: "amber" },
  { number: "04", icon: Wifi, title: "Vehicle detected on opposite side", description: "Another vehicle is detected approaching the same blind curve from the opposite direction. Both vehicles are now in a potential collision path.", detail: "Detection happens in under 500ms from network signal receipt. The system calculates relative positions, speeds, and estimated time to the curve midpoint.", color: "orange" },
  { number: "05", icon: Bell, title: "Alert is issued to both drivers", description: "Both drivers receive an immediate audio alert: 'Vehicle approaching from opposite direction. Reduce speed.'", detail: "The alert is audio-first — loud enough to hear over music and road noise. A visual indicator shows on screen. Haptic feedback if supported.", color: "red" },
  { number: "06", icon: ShieldCheck, title: "Both vehicles navigate safely", description: "Both drivers slow down, move to their respective sides, and navigate the curve safely. Collision prevented.", detail: "The average speed reduction following a BlindSight alert is 15–20 km/h, providing the reaction time needed for safe passage on even the tightest hairpin bends.", color: "green" },
];

const colorMap: Record<string, { text: string; bg: string; border: string; num: string }> = {
  blue:   { text: "text-[#2563EB]", bg: "bg-[#EFF6FF]", border: "border-[#DBEAFE]", num: "text-[#2563EB]" },
  violet: { text: "text-[#8B5CF6]", bg: "bg-[#F5F3FF]", border: "border-[#DDD6FE]", num: "text-[#8B5CF6]" },
  amber:  { text: "text-[#D97706]", bg: "bg-[#FFFBEB]", border: "border-[#FEF3C7]", num: "text-[#D97706]" },
  orange: { text: "text-[#EA580C]", bg: "bg-[#FFF7ED]", border: "border-[#FED7AA]", num: "text-[#EA580C]" },
  red:    { text: "text-[#EF4444]", bg: "bg-[#FEF2F2]", border: "border-[#FECACA]", num: "text-[#EF4444]" },
  green:  { text: "text-[#10B981]", bg: "bg-[#ECFDF5]", border: "border-[#D1FAE5]", num: "text-[#10B981]" },
};

const specs = [
  { label: "Detection latency", value: "< 500ms", note: "From presence broadcast to alert" },
  { label: "GPS accuracy", value: "3–5m", note: "Under clear sky conditions" },
  { label: "Detection range", value: "200–500m", note: "Configurable per curve severity" },
  { label: "False positive rate", value: "< 1%", note: "Target during beta" },
  { label: "Miss rate", value: "< 0.1%", note: "Safety-critical target" },
  { label: "Battery impact", value: "< 5%/hr", note: "Optimized background tracking" },
  { label: "Data usage", value: "< 2MB/hr", note: "Efficient presence protocol" },
  { label: "Offline curves", value: "Full local DB", note: "Cached on device" },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="badge-blue mb-6 inline-flex">The Mechanism</span>
          <h1
            className="font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.04] text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Six steps to
            <br />
            <span className="text-gradient-brand">zero surprises.</span>
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
            BlindSight works quietly in the background and speaks up exactly once — when it matters
            most. Here&apos;s how it happens.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {steps.map((step) => {
              const c = colorMap[step.color];
              return (
                <div
                  key={step.number}
                  className={`p-6 rounded-2xl border ${c.border} ${c.bg}`}
                >
                  <div className="flex items-start gap-5">
                    <span className={`text-4xl font-bold font-mono ${c.num} opacity-20 leading-none shrink-0 select-none`}>
                      {step.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg border shrink-0 mt-0.5 ${c.bg} ${c.border}`}>
                          <step.icon className={`h-4 w-4 ${c.text}`} />
                        </div>
                        <div>
                          <h3 className={`font-semibold text-[#0F172A] mb-1`}>{step.title}</h3>
                          <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <div className={`ml-9 pl-3 border-l ${c.border}`}>
                        <p className="text-xs text-[#94A3B8] leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Technical Specs</p>
            <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">Performance targets</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="p-5 rounded-2xl border border-[#E2E8F0] bg-white"
                style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}
              >
                <p className="text-xs text-[#94A3B8] mb-1.5">{spec.label}</p>
                <p className="text-xl font-mono font-bold text-[#2563EB] mb-1">{spec.value}</p>
                <p className="text-xs text-[#CBD5E1]">{spec.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert severity */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Alert System</p>
            <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">Four severity levels</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { level: "Low",      color: "green",  range: ">200m",    action: "Soft audio tone",   note: "Advisory only" },
              { level: "Medium",   color: "amber",  range: "100–200m", action: "Moderate alert",    note: "Reduce speed" },
              { level: "High",     color: "orange", range: "50–100m",  action: "Urgent audio",      note: "Slow down now" },
              { level: "Critical", color: "red",    range: "<50m",     action: "Max alert + haptic", note: "Immediate action" },
            ].map((alert) => {
              const ac = colorMap[alert.color] || colorMap.blue;
              return (
                <div key={alert.level} className={`p-5 rounded-2xl border ${ac.border} ${ac.bg}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className={`h-4 w-4 ${ac.text}`} />
                    <span className={`text-sm font-semibold ${ac.text}`}>{alert.level}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] mb-1">Range: {alert.range}</p>
                  <p className="text-xs text-[#475569] mb-1 font-medium">{alert.action}</p>
                  <p className="text-xs text-[#94A3B8]">{alert.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">See it in action</h2>
          <p className="text-[#475569] mb-8">Try the interactive simulation and pick your weather conditions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] transition-all group"
            >
              Try the Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
