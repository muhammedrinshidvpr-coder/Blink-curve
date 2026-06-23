"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Mail, MessageSquare, Building2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const contactReasons = [
  { value: "partnership", label: "Government / Road Authority Partnership" },
  { value: "fleet", label: "Fleet Operator Integration" },
  { value: "investment", label: "Investment Inquiry" },
  { value: "press", label: "Press / Media" },
  { value: "general", label: "General Inquiry" },
];

type FormState = "idle" | "submitting" | "success";

const inputClass = "flex h-11 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 disabled:opacity-50";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", organization: "", reason: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="badge-blue mb-6 inline-flex">Get In Touch</span>
          <h1
            className="font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.04] text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Let&apos;s talk
            <br />
            <span className="text-gradient-brand">road safety.</span>
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed max-w-xl mx-auto">
            Whether you&apos;re a government road authority, fleet operator, investor, or just
            curious — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Context */}
            <div className="lg:col-span-2 space-y-7">
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-3">Partnership opportunities</h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  BlindSight is actively seeking government road safety partners, fleet operators,
                  and institutional investors who share our commitment to zero blind-curve fatalities.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Building2, title: "Road Authorities", desc: "State transport departments, NHAI, and municipal road agencies for pilot programs." },
                  { icon: MessageSquare, title: "Fleet Operators", desc: "Bus companies, logistics firms, and ride-hail operators with mountain routes." },
                  { icon: Mail, title: "Direct Contact", desc: "hello@blindsight.app", link: "mailto:hello@blindsight.app" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#CBD5E1] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A] mb-0.5">{item.title}</p>
                      {"link" in item ? (
                        <a href={item.link} className="text-xs text-[#2563EB] hover:text-[#1D4ED8] transition-colors">{item.desc}</a>
                      ) : (
                        <p className="text-xs text-[#475569]">{item.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl border border-[#DBEAFE] bg-[#EFF6FF]">
                <p className="text-xs text-[#2563EB] mb-1 font-semibold">Response time</p>
                <p className="text-xs text-[#475569]">
                  We respond to all inquiries within 24 hours. Partnership and government inquiries
                  receive priority.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex items-center justify-center"
                  >
                    <div className="text-center space-y-4 py-16">
                      <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-[#10B981]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0F172A]">Message received.</h3>
                      <p className="text-[#475569] text-sm max-w-xs mx-auto">
                        We&apos;ll be in touch within 24 hours. Thank you for reaching out.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-[#475569] font-medium">Name *</label>
                        <input
                          className={inputClass}
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-[#475569] font-medium">Email *</label>
                        <input
                          type="email"
                          className={inputClass}
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-[#475569] font-medium">Organization</label>
                      <input
                        className={inputClass}
                        placeholder="Company or department"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-[#475569] font-medium">Inquiry type</label>
                      <select
                        value={form.reason}
                        onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        className={cn(inputClass, "cursor-pointer")}
                      >
                        <option value="">Select a reason</option>
                        {contactReasons.map((r) => (
                          <option key={r.value} value={r.value}>{r.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-[#475569] font-medium">Message *</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your context and what you're looking for..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        className="flex w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition-colors focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className={cn(
                        "w-full h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all",
                        formState === "submitting"
                          ? "bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed"
                          : "bg-[#2563EB] text-white shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
                      )}
                    >
                      {formState === "submitting" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-[#94A3B8] border-t-[#475569] rounded-full"
                          />
                          Sending...
                        </>
                      ) : "Send Message"}
                    </button>

                    <p className="text-xs text-[#94A3B8] text-center">
                      We respect your privacy and will never share your information.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
