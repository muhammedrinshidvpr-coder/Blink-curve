"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-4">Questions</p>
          <div className="section-divider mb-6" />
          <h2
            className="font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.1] text-balance mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Everything you&apos;re wondering.
          </h2>
          <p className="text-[#475569]">
            If your question isn&apos;t here, reach out — we read every email.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] overflow-hidden"
          style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.05)" }}
        >
          <Accordion type="single" collapsible className="w-full px-6">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-[#94A3B8] mt-10"
        >
          Still have questions?{" "}
          <a
            href="mailto:hello@blindsight.app"
            className="text-[#2563EB] hover:text-[#1D4ED8] transition-colors font-medium"
          >
            hello@blindsight.app
          </a>
        </motion.p>
      </div>
    </section>
  );
}
