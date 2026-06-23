"use client";

import { cn } from "@/lib/utils";

interface MobileFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileFrame({ children, className }: MobileFrameProps) {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div
      className={cn(
        "relative w-[280px] shrink-0",
        "rounded-[44px] border-2 border-white/10",
        "bg-[#0a0a0a] overflow-hidden",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_32px_64px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.02)]",
        className
      )}
      style={{ height: 600 }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0a] rounded-b-2xl z-20 border-b border-x border-white/[0.06]" />

      {/* Status bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-3 pb-1">
        <span className="text-[11px] font-semibold text-white/80">{time}</span>
        <div className="flex items-center gap-1">
          {/* Signal */}
          <div className="flex items-end gap-0.5 h-3">
            {[40, 60, 80, 100].map((h, i) => (
              <div key={i} className={cn("w-1 rounded-sm", i < 3 ? "bg-white/80" : "bg-white/30")} style={{ height: `${h}%` }} />
            ))}
          </div>
          {/* WiFi */}
          <svg viewBox="0 0 16 12" className="w-4 h-3 fill-white/80">
            <path d="M8 2.4C5.6 2.4 3.4 3.2 1.6 4.6L0 3C2.2 1.1 5 0 8 0s5.8 1.1 8 3l-1.6 1.6C12.6 3.2 10.4 2.4 8 2.4zM8 5.6c-1.6 0-3 .6-4.1 1.6L2.3 5.6C3.8 4.3 5.8 3.4 8 3.4s4.2.9 5.7 2.2L12.1 7.2C11 6.2 9.6 5.6 8 5.6zM8 8.8c-.8 0-1.5.3-2 .8L4.5 8.1C5.5 7.2 6.7 6.6 8 6.6s2.5.6 3.5 1.5L10 9.6c-.5-.5-1.2-.8-2-.8zM8 12a1.2 1.2 0 100-2.4A1.2 1.2 0 008 12z"/>
          </svg>
          {/* Battery */}
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-2.5 rounded-sm border border-white/50 relative flex items-center px-0.5">
              <div className="h-1.5 bg-white/80 rounded-sm flex-1" />
            </div>
            <div className="w-0.5 h-1.5 bg-white/50 rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Screen content */}
      <div className="absolute inset-0 top-[44px] overflow-hidden">
        {children}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20" />
    </div>
  );
}
