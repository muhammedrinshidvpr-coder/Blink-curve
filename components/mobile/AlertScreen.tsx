"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Volume2, ArrowLeft, Gauge } from "lucide-react";

export default function AlertScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col relative overflow-hidden">
      {/* Alert radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(239,68,68,0.12)_0%,transparent_60%)]" />

      {/* Pulsing border */}
      <motion.div
        className="absolute inset-0 border-2 border-red-500/40 rounded-[44px] pointer-events-none"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      {/* Header */}
      <div className="relative z-10 px-5 pt-4 pb-2 flex items-center justify-between">
        <button className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
          <ArrowLeft className="h-3.5 w-3.5 text-zinc-400" />
        </button>
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-red-500"
          />
          <span className="text-xs text-red-400 font-semibold tracking-wide">ALERT</span>
        </div>
        <Volume2 className="h-4 w-4 text-red-400" />
      </div>

      {/* Main alert */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start px-5 pt-4">
        {/* Icon */}
        <div className="relative mb-4">
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500/20"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500/10"
            animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <div className="relative w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center">
            <AlertTriangle className="h-7 w-7 text-red-400" />
          </div>
        </div>

        {/* Alert text */}
        <h2 className="text-lg font-bold text-white text-center mb-1">
          Vehicle Ahead
        </h2>
        <p className="text-2xl font-bold text-red-400 mb-4">BLIND CURVE</p>

        {/* Info card */}
        <div className="w-full rounded-2xl border border-red-500/20 bg-red-500/8 p-4 mb-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Vehicle type</span>
            <span className="text-xs font-medium text-white">KSRTC Bus</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Estimated distance</span>
            <span className="text-xs font-mono text-red-400 font-bold">~65m</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Alert level</span>
            <span className="text-xs font-medium text-red-400 uppercase">Critical</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Location</span>
            <span className="text-xs text-zinc-400">Vagamon Hairpin #3</span>
          </div>
        </div>

        {/* Speed advisory */}
        <div className="w-full rounded-2xl border border-amber-500/20 bg-amber-500/8 p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="h-4 w-4 text-amber-400" />
            <span className="text-xs text-amber-400 font-semibold">Speed Advisory</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-xs text-zinc-600">Current</p>
              <p className="text-xl font-bold font-mono text-white">42</p>
              <p className="text-[10px] text-zinc-600">km/h</p>
            </div>
            <div className="flex-1 text-center text-zinc-700">→</div>
            <div className="text-center">
              <p className="text-xs text-zinc-600">Recommended</p>
              <p className="text-xl font-bold font-mono text-amber-400">15</p>
              <p className="text-[10px] text-zinc-600">km/h</p>
            </div>
          </div>
        </div>

        {/* Advisory text */}
        <p className="text-xs text-zinc-500 text-center">
          Reduce speed. Move to left. Pass with extreme caution.
        </p>
      </div>

      {/* Dismiss bar */}
      <div className="relative z-10 px-5 pb-6 pt-3 border-t border-white/[0.06]">
        <button className="w-full py-3 rounded-xl border border-white/10 bg-white/[0.03] text-xs text-zinc-500 hover:bg-white/[0.06] transition-colors">
          Acknowledge (Vehicle passed safely)
        </button>
      </div>
    </div>
  );
}
