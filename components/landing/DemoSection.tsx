"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sun, CloudRain, Cloud, AlertTriangle, Wifi, CheckCircle } from "lucide-react";
import { WEATHER_SCENARIOS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = { sun: Sun, "cloud-rain": CloudRain, cloud: Cloud };
type AlertState = "idle" | "detecting" | "alert" | "safe";

export default function DemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<typeof WEATHER_SCENARIOS[number]>(WEATHER_SCENARIOS[0]);
  const [state, setState] = useState<AlertState>("idle");
  const [running, setRunning] = useState(false);

  const runSim = () => {
    if (running) return;
    setRunning(true);
    setState("detecting");
    setTimeout(() => setState("alert"), selected.alertDelay);
    setTimeout(() => { setState("safe"); setRunning(false); }, selected.alertDelay + 3000);
  };

  useEffect(() => { setState("idle"); setRunning(false); }, [selected]);

  return (
    <section id="demo" ref={ref} className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-4">Live Simulation</p>
          <div className="section-divider mb-6" />
          <h2
            className="font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.1] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            See it work in{" "}
            <span className="text-gradient-brand">real conditions.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto leading-relaxed">
            BlindSight is engineered for the worst conditions — because that&apos;s when it matters most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Weather tabs */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {WEATHER_SCENARIOS.map((sc) => {
              const Icon = iconMap[sc.icon as keyof typeof iconMap];
              const sel = selected.id === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => setSelected(sc)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200",
                    sel
                      ? "bg-[#2563EB] text-white border-[#2563EB] shadow-[0_2px_8px_rgba(37,99,235,0.25)]"
                      : "bg-white text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#0F172A]"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {sc.label}
                </button>
              );
            })}
          </div>

          {/* Demo card */}
          <div
            className={cn(
              "bg-white rounded-3xl border transition-all duration-500 overflow-hidden",
              state === "alert"
                ? "border-[#FCA5A5] shadow-[0_4px_24px_rgba(239,68,68,0.1),0_0_0_1px_rgba(239,68,68,0.15)]"
                : state === "safe"
                ? "border-[#A7F3D0] shadow-[0_4px_24px_rgba(16,185,129,0.1),0_0_0_1px_rgba(16,185,129,0.12)]"
                : "border-[#E2E8F0] shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
            )}
          >
            <div className="p-8">
              {/* Top row */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs text-[#94A3B8] mb-1">Active condition</p>
                  <p className="text-sm font-medium text-[#0F172A]">{selected.condition}</p>
                </div>
                <div className="flex items-center gap-5 text-xs font-mono">
                  <div className="text-center">
                    <p className="text-[#94A3B8] mb-0.5">Range</p>
                    <p className="font-bold text-[#2563EB]">{selected.detectionRange}m</p>
                  </div>
                  <div className="w-px h-6 bg-[#E2E8F0]"/>
                  <div className="text-center">
                    <p className="text-[#94A3B8] mb-0.5">Alert time</p>
                    <p className="font-bold text-[#2563EB]">{selected.alertDelay}ms</p>
                  </div>
                </div>
              </div>

              {/* Radar + status */}
              <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
                <RadarDisplay state={state} />
                <div className="flex-1 w-full min-h-[120px] flex items-center">
                  <AnimatePresence mode="wait">
                    {state === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]"/>
                          <span className="text-sm text-[#94A3B8]">System standby — no vehicles detected</span>
                        </div>
                        <p className="text-sm text-[#CBD5E1] pl-4.5">Press Run Simulation to begin.</p>
                      </motion.div>
                    )}
                    {state === "detecting" && (
                      <motion.div key="detecting" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 0.7, repeat: Infinity }}
                            className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"/>
                          <span className="text-sm font-medium text-[#2563EB]">Scanning detection zone...</span>
                        </div>
                        <StatusLine icon={<Wifi className="h-3.5 w-3.5"/>} label="Detection range active" value={`${selected.detectionRange}m`} color="#2563EB"/>
                        <StatusLine icon={<AlertTriangle className="h-3.5 w-3.5"/>} label="Processing GPS data" value="Live" color="#2563EB"/>
                      </motion.div>
                    )}
                    {state === "alert" && (
                      <motion.div key="alert" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="space-y-3 w-full">
                        <motion.div animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 0.9, repeat: Infinity }}
                          className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shadow-[0_0_6px_rgba(239,68,68,0.6)]"/>
                          <span className="text-sm font-semibold text-[#EF4444]">VEHICLE DETECTED</span>
                        </motion.div>
                        <div className="p-3.5 rounded-xl border border-[#FECACA] bg-[#FEF2F2]">
                          <p className="text-sm font-medium text-[#991B1B] mb-0.5">⚠ Vehicle approaching from opposite direction</p>
                          <p className="text-xs text-[#B91C1C]/80">Reduce speed immediately. Pass with caution.</p>
                        </div>
                        <StatusLine icon={<AlertTriangle className="h-3.5 w-3.5"/>} label="Alert level" value={(selected.alertLevel as string).toUpperCase()} color="#EF4444"/>
                        <StatusLine icon={<Wifi className="h-3.5 w-3.5"/>} label="Estimated distance" value="~85m" color="#EF4444"/>
                      </motion.div>
                    )}
                    {state === "safe" && (
                      <motion.div key="safe" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3 w-full">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"/>
                          <span className="text-sm font-medium text-[#10B981]">Vehicles passed safely</span>
                        </div>
                        <div className="p-3.5 rounded-xl border border-[#A7F3D0] bg-[#ECFDF5]">
                          <p className="text-sm font-medium text-[#065F46] flex items-center gap-1.5">
                            <CheckCircle className="h-4 w-4 text-[#10B981]"/>
                            Collision prevented
                          </p>
                          <p className="text-xs text-[#065F46]/70 mt-0.5">Both drivers warned. Speed reduced. Safe passage completed.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Run button */}
              <div className="flex justify-center">
                <button
                  onClick={runSim}
                  disabled={running}
                  className={cn(
                    "px-8 py-3 rounded-xl text-sm font-semibold border transition-all duration-200",
                    running
                      ? "bg-[#F8FAFC] border-[#E2E8F0] text-[#CBD5E1] cursor-not-allowed"
                      : "bg-[#2563EB] border-[#2563EB] text-white shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
                  )}
                >
                  {running ? "Simulation running…" : "Run Simulation"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusLine({ icon, label, value, color }: { icon: ReactNode; label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-1.5 text-[#94A3B8]">
        <span style={{ color }}>{icon}</span>{label}
      </div>
      <span className="font-mono font-semibold" style={{ color }}>{value}</span>
    </div>
  );
}

function RadarDisplay({ state }: { state: AlertState }) {
  const ringColor = state === "alert" ? "#EF4444" : state === "safe" ? "#10B981" : "#2563EB";
  return (
    <div className="relative w-40 h-40 shrink-0">
      <div className="absolute inset-0 rounded-full border border-[#E2E8F0] bg-[#F8FAFC]"/>
      {[0.33, 0.67, 1].map((s, i) => (
        <div key={i} className="absolute inset-0 rounded-full border border-[#F1F5F9]" style={{ inset: `${(1-s)*50}%` }}/>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-[#F1F5F9]"/>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-px h-full bg-[#F1F5F9]"/>
      </div>
      {state === "detecting" && (
        <motion.div className="absolute inset-0 rounded-full overflow-hidden"
          animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(from 0deg, transparent 0deg, rgba(37,99,235,0.2) 30deg, transparent 60deg)`
          }}/>
        </motion.div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: ringColor, boxShadow: `0 0 8px ${ringColor}40` }}/>
      </div>
      <AnimatePresence>
        {(state === "alert" || state === "detecting") && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute" style={{ top: "22%", right: "24%", transform: "translate(50%, -50%)" }}
          >
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.5)" }}/>
              <motion.div
                className="absolute inset-0 rounded-full border border-[#EF4444]/50"
                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
