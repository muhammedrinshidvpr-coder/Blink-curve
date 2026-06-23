"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { FEATURES_COMPARISON } from "@/lib/constants";

type FeatureValue = boolean | string | null;

function ComparisonCell({ value, highlight = false }: { value: FeatureValue; highlight?: boolean }) {
  if (value === true) return <Check className={`h-4 w-4 mx-auto ${highlight ? "text-[#10B981]" : "text-[#10B981]"}`} />;
  if (value === false) return <X className="h-4 w-4 text-[#CBD5E1] mx-auto" />;
  if (value === null) return <Minus className="h-4 w-4 text-[#E2E8F0] mx-auto" />;
  return <span className={`text-xs font-medium ${highlight ? "text-[#2563EB]" : "text-[#F59E0B]"}`}>{value}</span>;
}

export default function ComparisonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const columns = [
    { key: "feature",     label: "Feature" },
    { key: "mirror",      label: "Convex Mirror" },
    { key: "waze",        label: "Navigation Apps" },
    { key: "dashcam",     label: "Dashcam ADAS" },
    { key: "blindsight",  label: "BlindSight", highlight: true },
  ] as const;

  return (
    <section id="comparison" className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-4">Why BlindSight</p>
          <div className="section-divider mb-6" />
          <h2
            className="font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.1] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Every solution before this
            <br />
            <span className="text-[#94A3B8]">was passive.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto leading-relaxed">
            BlindSight is the first <span className="text-[#0F172A] font-medium">active</span> blind curve warning system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden"
          style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.06), 0 12px 48px rgba(15,23,42,0.05)" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      className={`px-5 py-4 ${col.key === "feature" ? "text-left w-1/3" : "text-center"}`}
                    >
                      {"highlight" in col && col.highlight ? (
                        <div className="inline-flex flex-col items-center">
                          <span className="px-3 py-1.5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-xs font-semibold">
                            {col.label} ✦
                          </span>
                        </div>
                      ) : (
                        <span className={`text-xs font-medium ${col.key === "feature" ? "text-[#94A3B8] uppercase tracking-wide" : "text-[#CBD5E1]"}`}>
                          {col.label}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES_COMPARISON.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.25 + i * 0.04 }}
                    className="border-b border-[#F1F5F9] last:border-0 hover:bg-[#F8FAFC] transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <span className="text-sm text-[#0F172A] font-medium">{row.feature}</span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <ComparisonCell value={row.mirror as FeatureValue} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <ComparisonCell value={row.waze as FeatureValue} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <ComparisonCell value={row.dashcam as FeatureValue} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <div className="flex items-center justify-center">
                        <div className="px-2 py-0.5 rounded bg-[#EFF6FF]">
                          <ComparisonCell value={row.blindsight as FeatureValue} highlight />
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-6 mt-5 text-xs text-[#94A3B8]"
        >
          <div className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-[#10B981]" /> Supported
          </div>
          <div className="flex items-center gap-1.5">
            <X className="h-3.5 w-3.5 text-[#CBD5E1]" /> Not supported
          </div>
          <div className="flex items-center gap-1.5">
            <Minus className="h-3.5 w-3.5 text-[#E2E8F0]" /> N/A
          </div>
        </motion.div>
      </div>
    </section>
  );
}
