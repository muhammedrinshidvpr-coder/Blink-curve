"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import MobileFrame from "./MobileFrame";
import HomeScreen from "./HomeScreen";
import NavigationScreen from "./NavigationScreen";
import AlertScreen from "./AlertScreen";
import HazardScreen from "./HazardScreen";
import SettingsScreen from "./SettingsScreen";
import { cn } from "@/lib/utils";

const screens = [
  {
    id: "home",
    label: "Home",
    description: "At-a-glance safety status, upcoming hazards, and route overview.",
    component: HomeScreen,
  },
  {
    id: "navigation",
    label: "Navigation",
    description: "Live route tracking with hazard overlays and real-time curve monitoring.",
    component: NavigationScreen,
  },
  {
    id: "alert",
    label: "Alert",
    description: "The critical moment — a vehicle detected approaching the same blind curve.",
    component: AlertScreen,
    highlight: true,
  },
  {
    id: "hazards",
    label: "Hazards",
    description: "Detailed view of all monitored hazard zones on your route.",
    component: HazardScreen,
  },
  {
    id: "settings",
    label: "Settings",
    description: "Customize alert sensitivity, detection mode, and user preferences.",
    component: SettingsScreen,
  },
];

export default function MobileAppShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("home");

  const activeScreen = screens.find((s) => s.id === active) ?? screens[0];
  const ActiveComponent = activeScreen.component;

  return (
    <section ref={ref} className="py-32 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Mobile App Concept</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Five screens.
            <br />
            <span className="gradient-text-brand">One purpose.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            High-fidelity mobile app concept — explore how BlindSight looks and feels
            across every critical moment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone display */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className={cn(
                "absolute inset-0 rounded-[48px] blur-3xl transition-all duration-500",
                active === "alert"
                  ? "bg-red-500/10"
                  : "bg-sky-500/8"
              )} />
              <MobileFrame>
                <ActiveComponent />
              </MobileFrame>
            </div>
          </motion.div>

          {/* Screen selector */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            {screens.map((screen) => {
              const isActive = active === screen.id;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActive(screen.id)}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all duration-200",
                    isActive
                      ? screen.highlight
                        ? "border-red-500/30 bg-red-500/8"
                        : "border-sky-500/30 bg-sky-500/8"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={cn(
                      "text-sm font-semibold",
                      isActive
                        ? screen.highlight ? "text-red-400" : "text-sky-400"
                        : "text-zinc-300"
                    )}>
                      {screen.label}
                      {screen.highlight && (
                        <span className="ml-2 text-xs bg-red-500/20 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded-full">
                          Key Screen
                        </span>
                      )}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          screen.highlight ? "bg-red-400" : "bg-sky-400"
                        )}
                      />
                    )}
                  </div>
                  <p className={cn(
                    "text-xs leading-relaxed",
                    isActive ? "text-zinc-300" : "text-zinc-500"
                  )}>
                    {screen.description}
                  </p>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
