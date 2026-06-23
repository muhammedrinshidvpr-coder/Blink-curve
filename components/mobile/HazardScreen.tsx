"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MapPin, Clock, TrendingUp, Shield, ArrowLeft } from "lucide-react";
import { MOCK_HAZARDS } from "@/lib/mock-data";

const severityConfig = {
  extreme: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", dot: "bg-red-500" },
  high: { color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", dot: "bg-orange-500" },
  severe: { color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", dot: "bg-amber-500" },
  moderate: { color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20", dot: "bg-sky-500" },
};

export default function HazardScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-3 pb-3">
        <div className="flex items-center gap-2 mb-3">
          <button className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
            <ArrowLeft className="h-3.5 w-3.5 text-zinc-400" />
          </button>
          <div>
            <h2 className="text-sm font-bold text-white">Hazard Map</h2>
            <p className="text-[10px] text-zinc-600">Vagamon–Munnar route</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Shield className="h-3 w-3 text-green-400" />
            <span className="text-[10px] text-green-400">Live</span>
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Hazards", value: "8", icon: AlertTriangle, color: "text-amber-400" },
            { label: "Monitored", value: "312", icon: MapPin, color: "text-sky-400" },
            { label: "Prevented", value: "23", icon: Shield, color: "text-green-400" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 text-center">
              <Icon className={`h-3 w-3 ${color} mx-auto mb-1`} />
              <p className="text-sm font-bold text-white font-mono">{value}</p>
              <p className="text-[9px] text-zinc-600">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hazard list */}
      <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-3">
        <p className="text-[10px] text-zinc-600 uppercase tracking-wide mb-2">Nearby hazards</p>

        {MOCK_HAZARDS.map((hazard) => {
          const config = severityConfig[hazard.severity as keyof typeof severityConfig] || severityConfig.moderate;
          const typeLabel = hazard.type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <motion.div
              key={hazard.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl border ${config.border} ${config.bg} p-3`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${config.dot}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white leading-tight">{hazard.name}</p>
                    <p className={`text-[10px] ${config.color} capitalize`}>{typeLabel}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 shrink-0">{hazard.distance} km</span>
              </div>

              <div className="flex items-center gap-4 text-[10px] text-zinc-600">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-2.5 w-2.5" />
                  <span>{hazard.accidents} incidents</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5" />
                  <span>Last: {hazard.lastAlert}</span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Additional mock hazards */}
        {[
          { name: "Idukki Dam Road Descent", distance: 8.3, severity: "severe", type: "Steep Descent", incidents: 31, lastAlert: "1 hr ago" },
          { name: "Ponmudi Foggy Zone", distance: 15.6, severity: "moderate", type: "Fog Zone", incidents: 19, lastAlert: "3 hrs ago" },
        ].map((hazard) => {
          const config = severityConfig[hazard.severity as keyof typeof severityConfig] || severityConfig.moderate;
          return (
            <div key={hazard.name} className={`rounded-xl border ${config.border} ${config.bg} p-3`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-1 ${config.dot}`} />
                  <div>
                    <p className="text-xs font-semibold text-white">{hazard.name}</p>
                    <p className={`text-[10px] ${config.color}`}>{hazard.type}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">{hazard.distance} km</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-zinc-600">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-2.5 w-2.5" />
                  <span>{hazard.incidents} incidents</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-2.5 w-2.5" />
                  <span>Last: {hazard.lastAlert}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
