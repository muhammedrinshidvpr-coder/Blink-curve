"use client";

import { useState } from "react";
import { ArrowLeft, Bell, Volume2, Map, Wifi, Moon, Users, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-8 h-5 rounded-full transition-colors duration-200",
        enabled ? "bg-sky-500" : "bg-zinc-700"
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200",
          enabled ? "translate-x-3.5" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    audioAlerts: true,
    vibration: true,
    nightMode: true,
    offlineMode: false,
    fleetMode: false,
    fogMode: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((s) => ({ ...s, [key]: !s[key] }));
  };

  const settingGroups = [
    {
      title: "Alerts",
      items: [
        { key: "audioAlerts", icon: Volume2, label: "Audio Alerts", desc: "Voice warning on detection" },
        { key: "vibration", icon: Bell, label: "Vibration", desc: "Haptic feedback on alert" },
      ],
    },
    {
      title: "Detection",
      items: [
        { key: "fogMode", icon: Map, label: "Enhanced Fog Mode", desc: "Extended range in low visibility" },
        { key: "offlineMode", icon: Wifi, label: "Offline Detection", desc: "Requires Phase 3 devices" },
      ],
    },
    {
      title: "Display",
      items: [
        { key: "nightMode", icon: Moon, label: "Night Mode", desc: "Auto dim for night driving" },
        { key: "fleetMode", icon: Users, label: "Fleet Dashboard", desc: "Enable fleet management" },
      ],
    },
  ] as const;

  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
            <ArrowLeft className="h-3.5 w-3.5 text-zinc-400" />
          </button>
          <h2 className="text-sm font-bold text-white">Settings</h2>
        </div>
      </div>

      {/* Profile summary */}
      <div className="mx-4 mb-4 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
          <span className="text-sm font-bold text-sky-400">RP</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Rajan Pillai</p>
          <p className="text-[10px] text-zinc-500">rajan@example.com</p>
        </div>
        <ChevronRight className="h-4 w-4 text-zinc-700" />
      </div>

      {/* Settings groups */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
        {settingGroups.map((group) => (
          <div key={group.title}>
            <p className="text-[10px] text-zinc-600 uppercase tracking-wide mb-2">{group.title}</p>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              {group.items.map((item, i) => (
                <div
                  key={item.key}
                  className={cn(
                    "flex items-center justify-between px-3 py-3",
                    i > 0 && "border-t border-white/[0.04]"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="h-3.5 w-3.5 text-zinc-500" />
                    <div>
                      <p className="text-xs font-medium text-white">{item.label}</p>
                      <p className="text-[10px] text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                  <Toggle
                    enabled={settings[item.key]}
                    onToggle={() => toggle(item.key)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Detection sensitivity */}
        <div>
          <p className="text-[10px] text-zinc-600 uppercase tracking-wide mb-2">Sensitivity</p>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="text-xs font-medium text-white mb-2">Alert Distance</p>
            <div className="flex gap-1.5">
              {["Low (100m)", "Medium (300m)", "High (500m)"].map((opt, i) => (
                <button
                  key={opt}
                  className={cn(
                    "flex-1 py-1.5 rounded-lg text-[9px] font-medium border transition-colors",
                    i === 2
                      ? "bg-sky-500/10 border-sky-500/30 text-sky-400"
                      : "bg-white/[0.02] border-white/[0.06] text-zinc-600"
                  )}
                >
                  {opt.split(" (")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Version info */}
        <div className="text-center py-2">
          <p className="text-[10px] text-zinc-700">BlindSight v0.1.0 — MVP</p>
          <p className="text-[10px] text-zinc-800">Designed for Vagamon. Built for the world.</p>
        </div>
      </div>
    </div>
  );
}
