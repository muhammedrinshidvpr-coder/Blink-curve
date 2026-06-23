"use client";

import { motion } from "framer-motion";
import { Shield, MapPin, Navigation, AlertTriangle, Settings } from "lucide-react";

export default function HomeScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col">
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-xs text-zinc-600">Good morning</p>
            <h2 className="text-base font-bold text-white">Rajan Pillai</h2>
          </div>
          <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
            <span className="text-xs font-semibold text-sky-400">RP</span>
          </div>
        </div>
      </div>

      {/* Status card */}
      <div className="mx-4 mb-3">
        <div className="rounded-2xl border border-green-500/20 bg-green-500/8 p-4">
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            <span className="text-xs text-green-400 font-medium">PROTECTION ACTIVE</span>
          </div>
          <p className="text-lg font-bold text-white mb-0.5">All Clear</p>
          <p className="text-xs text-zinc-500">No hazards detected on your route</p>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2 mx-4 mb-3">
        {[
          { label: "Curves", value: "8", unit: "ahead" },
          { label: "Route", value: "130", unit: "km" },
          { label: "ETA", value: "3h 45", unit: "min" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
            <p className="text-base font-bold text-white font-mono leading-none">{stat.value}</p>
            <p className="text-[10px] text-zinc-600 mt-0.5">{stat.unit}</p>
            <p className="text-[10px] text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Nearby hazards */}
      <div className="flex-1 mx-4 overflow-hidden">
        <p className="text-xs text-zinc-600 uppercase tracking-wide mb-2">Upcoming Hazards</p>
        <div className="space-y-2">
          {[
            { name: "Hairpin Bend #3", distance: "12.4 km", severity: "high", color: "orange" },
            { name: "Fog Zone", distance: "18.2 km", severity: "medium", color: "amber" },
            { name: "Sharp Descent", distance: "24.8 km", severity: "moderate", color: "sky" },
          ].map((hazard) => {
            const colors: Record<string, string> = {
              orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
              amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
              sky: "text-sky-400 bg-sky-500/10 border-sky-500/20",
            };
            return (
              <div key={hazard.name} className={`flex items-center justify-between px-3 py-2.5 rounded-xl border ${colors[hazard.color]}`}>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-3 w-3" />
                  <div>
                    <p className="text-xs font-medium text-white">{hazard.name}</p>
                    <p className="text-[10px] text-zinc-600 capitalize">{hazard.severity} risk</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">{hazard.distance}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-3">
        <div className="flex items-center justify-around">
          {[
            { icon: Shield, label: "Home", active: true },
            { icon: Navigation, label: "Navigate", active: false },
            { icon: MapPin, label: "Hazards", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map(({ icon: Icon, label, active }) => (
            <button key={label} className="flex flex-col items-center gap-1">
              <Icon className={`h-4 w-4 ${active ? "text-sky-400" : "text-zinc-600"}`} />
              <span className={`text-[9px] ${active ? "text-sky-400" : "text-zinc-600"}`}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
