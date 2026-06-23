import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DemoSection from "@/components/landing/DemoSection";
import MobileAppShowcase from "@/components/mobile/MobileAppShowcase";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Interactive BlindSight simulation. See how the system responds to clear, rain, and fog conditions on mountain roads.",
  alternates: { canonical: "https://blindsight.app/demo" },
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="badge-blue mb-6 inline-flex">Interactive Demo</span>
          <h1
            className="font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.04] text-balance mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Try BlindSight.
            <br />
            <span className="text-gradient-brand">No install required.</span>
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Select your weather condition, run the simulation, and see how BlindSight
            protects drivers in real conditions.
          </p>
        </div>
      </section>

      {/* Demo section */}
      <DemoSection />

      {/* Mobile app showcase */}
      <MobileAppShowcase />

      <Footer />
    </main>
  );
}
