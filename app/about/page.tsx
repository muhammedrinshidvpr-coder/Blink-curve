import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Target, Heart, Zap, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "BlindSight was born from the roads of Kerala — built by people who believe no driver should be surprised by what's around the corner.",
  alternates: { canonical: "https://blindsight.app/about" },
};

const values = [
  {
    icon: Heart,
    title: "Safety First",
    color: "text-[#EF4444]", bg: "bg-[#FEF2F2] border-[#FECACA]",
    description: "Every product decision starts with one question: does this save lives? Features, timelines, and business models are all secondary to impact.",
  },
  {
    icon: Target,
    title: "Problem Specificity",
    color: "text-[#2563EB]", bg: "bg-[#EFF6FF] border-[#DBEAFE]",
    description: "We build one thing and build it extremely well. BlindSight solves blind curves — not general navigation, not dashcams, not speed monitoring.",
  },
  {
    icon: Zap,
    title: "Speed to Impact",
    color: "text-[#F59E0B]", bg: "bg-[#FFFBEB] border-[#FEF3C7]",
    description: "Every day without BlindSight is a day people are at risk. We move fast, ship working software, and iterate — not the other way around.",
  },
  {
    icon: Globe,
    title: "India First",
    color: "text-[#10B981]", bg: "bg-[#ECFDF5] border-[#D1FAE5]",
    description: "Built for Kerala's roads. Designed to scale globally. We understand our context deeply before we generalize.",
  },
];

const team = [
  {
    name: "The Product Team",
    role: "Product & Design",
    bio: "Former mobility and safety product leaders who've spent years studying driver behavior on mountain roads. Built products used by millions in South Asia.",
    initial: "P",
  },
  {
    name: "The Engineering Team",
    role: "Software & Hardware",
    bio: "Full-stack engineers and IoT specialists with backgrounds in real-time systems, GPS precision, and low-latency communication protocols.",
    initial: "E",
  },
  {
    name: "The Operations Team",
    role: "Partnerships & Growth",
    bio: "Deep relationships with Kerala's transport authorities, road safety agencies, and fleet operators. Former KSRTC and NHAI advisors.",
    initial: "O",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="badge-blue mb-6 inline-flex">About BlindSight</span>
          <h1
            className="font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.04] text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Born from
            <br />
            <span className="text-gradient-brand">Kerala&apos;s roads.</span>
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
            BlindSight started with a simple, painful observation: every blind curve on Kerala&apos;s
            mountain roads is a gamble that thousands of people take every day. We decided to
            remove the bet.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                The near-miss that started everything.
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  It was a foggy Tuesday morning on the Vagamon ghat road. Our founder&apos;s family
                  vehicle rounded a hairpin bend to find a KSRTC bus occupying the entire road.
                  The bus driver had seen nothing. The car driver had seen nothing.
                </p>
                <p>
                  They were saved by inches, good brakes, and extraordinary luck. The bus driver
                  shook for minutes. Our founder couldn&apos;t stop thinking: what if there was a
                  warning? What if both drivers knew the other was coming?
                </p>
                <p>
                  BlindSight is the answer to that question — built for the day when luck is not
                  a factor, and warning is.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 space-y-4"
                style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.06)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-pulse" />
                  <span className="text-sm text-[#EF4444] font-medium">Incident Report</span>
                </div>
                <div className="space-y-3 font-mono text-xs text-[#94A3B8]">
                  {[
                    ["Location", "Vagamon Hairpin #3", "text-[#0F172A]"],
                    ["Visibility", "8m (fog)", "text-[#F59E0B]"],
                    ["Vehicle A", "Private car, 40 km/h", "text-[#0F172A]"],
                    ["Vehicle B", "KSRTC bus, 28 km/h", "text-[#0F172A]"],
                    ["Warning received", "None", "text-[#EF4444]"],
                    ["Outcome", "Near-miss", "text-[#F59E0B]"],
                  ].map(([k, v, cls]) => (
                    <div key={k} className="flex justify-between">
                      <span>{k}</span>
                      <span className={cls}>{v}</span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-[#E2E8F0] text-[#94A3B8]">
                    With BlindSight: Both drivers warned 18 seconds before encounter.{" "}
                    <span className="text-[#10B981] font-medium">Safe passage guaranteed.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">Our values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title}
                className="p-6 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#CBD5E1] transition-colors"
                style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${v.bg}`}>
                  <v.icon className={`h-5 w-5 ${v.color}`} />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">{v.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">The People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              Built by a team that drives these roads.
            </h2>
          </div>
          <div className="space-y-4">
            {team.map((member) => (
              <div key={member.role}
                className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-start gap-4"
                style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}>
                <div className="w-10 h-10 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-sm font-bold text-[#2563EB] shrink-0">
                  {member.initial}
                </div>
                <div>
                  <p className="text-xs text-[#2563EB] font-medium mb-1">{member.role}</p>
                  <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{member.name}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Ready to see the demo?</h2>
          <p className="text-[#475569] mb-8">See exactly how BlindSight responds to real conditions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] transition-all"
            >
              Try the Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
