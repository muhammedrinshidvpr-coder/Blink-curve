"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";

export default function WaitlistSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }

    setFormState("submitting");

    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("bs_waitlist") || "[]");
      if (!existing.includes(email)) {
        localStorage.setItem("bs_waitlist", JSON.stringify([...existing, email]));
      }
      setFormState("success");
    }, 1200);
  };

  return (
    <section id="waitlist" ref={ref} className="py-28 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-blue-gradient" />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      {/* Decorative blobs */}
      <div className="absolute top-0 right-[15%] w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-80 h-80 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Users className="h-3.5 w-3.5 text-white/80" />
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Early Access</span>
            </div>
          </div>

          <h2
            className="font-extrabold text-white leading-[1.05] tracking-[-0.03em] text-balance mb-5"
            style={{ fontSize: "clamp(2.25rem, 6vw, 3.75rem)" }}
          >
            Be first.{" "}
            <span className="text-[#A7F3D0]">Be safe.</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed max-w-lg mx-auto">
            Join thousands of drivers who refuse to leave their safety to luck.
            Get early access when we launch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-[#A7F3D0]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">You&apos;re on the list.</h3>
                    <p className="text-white/60 text-sm">We&apos;ll be in touch as soon as BlindSight is ready for you.</p>
                  </div>
                  <p className="text-xs text-white/40">Check your inbox for a confirmation.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(""); }}
                      disabled={formState === "submitting"}
                      aria-label="Email address"
                      className={cn(
                        "w-full h-12 px-4 rounded-xl text-sm border transition-all duration-200 outline-none",
                        "bg-white/90 text-[#0F172A] placeholder:text-[#94A3B8]",
                        "focus:ring-2 focus:ring-white/40 focus:bg-white",
                        error
                          ? "border-[#FCA5A5]"
                          : "border-white/20 hover:border-white/40"
                      )}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className={cn(
                      "h-12 px-7 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shrink-0 transition-all duration-200",
                      formState === "submitting"
                        ? "bg-white/20 text-white/50 cursor-not-allowed"
                        : "bg-white text-[#2563EB] hover:bg-white/90 shadow-[0_2px_12px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
                    )}
                  >
                    {formState === "submitting" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-sm text-[#FCA5A5] text-left"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <p className="text-xs text-white/40">
                  No spam. No noise. Just an update when we&apos;re ready for you.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social proof dots */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/40"
        >
          <span>Designed for Vagamon</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Built for Kerala</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Ready for the world</span>
        </motion.div>
      </div>
    </section>
  );
}
