"use client";

import { motion } from "framer-motion";
import { Navigation, Shield, AlertTriangle, MapPin, ChevronRight } from "lucide-react";

export default function NavigationScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col">
      {/* Map area (simulated) */}
      <div className="relative flex-1 bg-[#111] overflow-hidden">
        {/* Grid roads */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />

        {/* Curved road path */}
        <svg viewBox="0 0 280 340" className="absolute inset-0 w-full h-full">
          {/* Main road */}
          <path
            d="M 140 340 Q 140 280 100 220 Q 60 160 80 100 Q 100 40 140 20"
            fill="none"
            stroke="#27272a"
            strokeWidth="24"
            strokeLinecap="round"
          />
          <path
            d="M 140 340 Q 140 280 100 220 Q 60 160 80 100 Q 100 40 140 20"
            fill="none"
            stroke="#1f1f1f"
            strokeWidth="2"
            strokeDasharray="8 6"
          />

          {/* Your car */}
          <motion.circle
            cx="140"
            animate={{ cy: [290, 286, 290] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            r="8"
            fill="#0ea5e9"
          />
          <circle cx="140" cy="290" r="4" fill="white" />

          {/* Route line ahead */}
          <path
            d="M 140 280 Q 140 240 110 190"
            fill="none"
            stroke="rgba(14,165,233,0.5)"
            strokeWidth="3"
            strokeDasharray="6 4"
          />

          {/* Hazard marker */}
          <motion.g
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ transformOrigin: "110px 190px" }}
          >
            <circle cx="110" cy="190" r="10" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.5)" strokeWidth="1.5" />
            <text x="110" y="194" textAnchor="middle" fontSize="9" fill="#f59e0b" fontWeight="bold">!</text>
          </motion.g>

          {/* Oncoming vehicle */}
          <motion.circle
            cx="95" cy="130"
            r="6"
            fill="#f97316"
            animate={{ cy: [130, 165, 130] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Distance indicator */}
        <div className="absolute top-3 left-3 right-3">
          <div className="flex items-start gap-2 bg-[#141414]/90 backdrop-blur rounded-xl p-3 border border-white/[0.06]">
            <Navigation className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-500 mb-0.5">Next hazard</p>
              <p className="text-sm font-semibold text-white truncate">Vagamon Hairpin #3</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-mono text-amber-400 font-bold">12.4</p>
              <p className="text-[10px] text-zinc-600">km</p>
            </div>
          </div>
        </div>

        {/* Compass */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#141414]/90 border border-white/[0.08] flex items-center justify-center">
          <span className="text-[9px] font-bold text-red-400">N</span>
        </div>
      </div>

      {/* Navigation info bar */}
      <div className="bg-[#0d0d0d] border-t border-white/[0.06] px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-sky-400" />
            <span className="text-xs font-medium text-white">Munnar — 130 km</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="h-3 w-3 text-green-400" />
            <span className="text-[10px] text-green-400">Protected</span>
          </div>
        </div>

        {/* Hazard list compact */}
        <div className="space-y-1.5">
          {[
            { name: "Hairpin Bend #3", km: "12.4", severity: "warning", color: "text-amber-400" },
            { name: "Fog Zone", km: "18.2", severity: "moderate", color: "text-sky-400" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between py-1.5 border-t border-white/[0.04]">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className={`h-3 w-3 ${item.color}`} />
                <span className="text-[11px] text-zinc-400">{item.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className={`text-[11px] font-mono ${item.color}`}>{item.km} km</span>
                <ChevronRight className="h-3 w-3 text-zinc-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
