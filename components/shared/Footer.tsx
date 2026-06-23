import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-[#2563EB] flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.4)]">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M3 15 Q10 15 10 10 Q10 5 17 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <circle cx="10" cy="10" r="2.5" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span className="font-bold text-white text-[17px] tracking-tight">
                Blind<span className="text-[#60A5FA]">Sight</span>
              </span>
            </Link>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Preventing blind-curve collisions through real-time vehicle presence awareness.
              Built for Kerala&apos;s mountain roads, designed for the world.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E293B] border border-[#334155]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-[#94A3B8]">MVP launching 2026</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { Icon: Twitter, href: "https://twitter.com/blindsight_app", label: "Twitter" },
                { Icon: Linkedin, href: "https://linkedin.com/company/blindsight-app", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/blindsight-app", label: "GitHub" },
                { Icon: Mail, href: "mailto:hello@blindsight.app", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#475569] bg-[#1E293B] border border-[#334155] hover:text-white hover:border-[#475569] transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#475569] mb-4">Product</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/demo" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Live Demo
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#475569] mb-4">Company</p>
            <ul className="space-y-2.5">
              {["About", "Vision", "Contact"].map((label) => (
                <li key={label}>
                  <Link href={`/${label.toLowerCase()}`} className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:hello@blindsight.app" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  hello@blindsight.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#334155]">© {year} BlindSight. All rights reserved.</p>
          <p className="text-xs text-[#334155]">Designed for Vagamon. Built for every mountain road.</p>
        </div>
      </div>
    </footer>
  );
}
