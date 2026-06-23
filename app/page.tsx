import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import DemoSection from "@/components/landing/DemoSection";
import VisionSection from "@/components/landing/VisionSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import FAQSection from "@/components/landing/FAQSection";
import WaitlistSection from "@/components/landing/WaitlistSection";

export const metadata: Metadata = {
  title: "BlindSight — See Beyond The Curve",
  description:
    "Prevent blind-curve accidents before they happen. BlindSight creates real-time vehicle presence awareness for mountain roads — Vagamon, Munnar, Idukki, Wayanad.",
  alternates: {
    canonical: "https://blindsight.app",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <VisionSection />
      <ComparisonSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
