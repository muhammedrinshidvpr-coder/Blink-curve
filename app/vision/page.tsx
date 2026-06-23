import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import VisionSection from "@/components/landing/VisionSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "BlindSight's roadmap from software MVP to a national smart road safety infrastructure network. Four phases to zero blind-curve deaths.",
  alternates: { canonical: "https://blindsight.app/vision" },
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="badge-blue mb-6 inline-flex">The Roadmap</span>
          <h1
            className="font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.04] text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            From one app
            <br />
            <span className="text-gradient-brand">to a national network.</span>
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mb-10">
            We&apos;re not building a feature. We&apos;re building infrastructure. Here&apos;s exactly
            how we get from today to a world where no driver is surprised by what&apos;s around
            the corner.
          </p>
        </div>
      </section>

      {/* North Star */}
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-eyebrow mb-4">North Star</p>
          <blockquote
            className="font-semibold text-[#0F172A] leading-relaxed mb-8"
            style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
          >
            &ldquo;A world where no driver is surprised
            <br />
            by what&apos;s around the corner.&rdquo;
          </blockquote>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { value: "8,000", label: "km of ghat roads in India" },
              { value: "3,000+", label: "identified blind curve hotspots" },
              { value: "0", label: "solutions addressing this today" },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-[#2563EB] tabular-nums">{s.value}</p>
                  <p className="text-[#475569] text-xs mt-0.5">{s.label}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-[#E2E8F0]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision timeline */}
      <VisionSection />

      {/* India & Beyond */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">India First, World Next</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4">
              Kerala is the test lab.
            </h2>
            <p className="text-[#475569] max-w-xl mx-auto">
              If we can solve it on Vagamon&apos;s hairpin bends in monsoon fog, we can solve it anywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { region: "Phase 1 — Kerala, India", desc: "Vagamon, Munnar, Idukki, Wayanad ghat roads. 1,200 km. 500+ blind curves." },
              { region: "Phase 2 — South India", desc: "Tamil Nadu Nilgiris, Karnataka Kodagu, Andhra Pradesh Araku Valley." },
              { region: "Phase 3 — Pan-India", desc: "Himachal Pradesh, Uttarakhand, Northeast India mountain states." },
              { region: "Phase 4 — Global", desc: "Switzerland Alps, Nepal Himalayas, Peru Andes, Colombia Coffee Region, Norway fjords." },
            ].map((item) => (
              <div
                key={item.region}
                className="p-6 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#CBD5E1] transition-colors"
                style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.04)" }}
              >
                <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{item.region}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Want to be part of this?</h2>
          <p className="text-[#475569] mb-8">
            Early access users, government partners, and investors — we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8] transition-all group"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0F172A] text-sm font-semibold border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
