# BlindSight — Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** June 2026  
**Status:** MVP  
**Owner:** BlindSight Founding Team

---

## 1. Executive Summary

BlindSight is a road safety platform designed to eliminate blind-curve collisions on mountain roads. By establishing real-time vehicle presence awareness at hazardous curves, the system warns drivers before they enter a collision path—preventing accidents that traditional infrastructure cannot address.

The MVP delivers a software-first demonstration of the product vision: a high-fidelity website and mobile app concept that communicates value, collects waitlist signups, and attracts early adopters, investors, and government road safety partnerships.

---

## 2. Problem Statement

### The Blind Curve Crisis

Every year, thousands of accidents occur on mountain roads across India—particularly in Kerala's ghat regions including Vagamon, Idukki, Munnar, and Wayanad. The common denominator: **blind curves where drivers cannot see oncoming traffic.**

**Root Causes:**
- Sharp hairpin bends with zero sightline
- Foggy and low-visibility conditions
- Narrow single-lane roads shared by trucks, buses, and motorcycles
- Absence of real-time awareness technology on rural roads

**The Gap Traditional Solutions Fail to Fill:**
- Convex mirrors: Static, weather-dependent, limited range
- Road markings: Passive, ignored under pressure
- Honking: Unreliable, range-limited
- No connected awareness between approaching vehicles

### Impact
- **Deaths:** Mountain road accidents account for disproportionate fatality rates
- **Injuries:** Survivors face life-altering trauma
- **Economic Cost:** Emergency response, property damage, lost productivity
- **Tourism Impact:** Accidents deter visitors to Kerala's scenic regions

---

## 3. Product Vision

> **"A world where no driver is surprised by what's around the corner."**

BlindSight connects vehicles approaching the same curve in real time, giving each driver the same awareness advantage as if the road were straight.

---

## 4. Target Users

### Primary Users
1. **Mountain Road Drivers** — Private vehicle drivers navigating Kerala ghat roads
2. **Commercial Vehicle Operators** — Bus and truck drivers on regular mountain routes
3. **Tourist Drivers** — Visitors unfamiliar with local road conditions

### Secondary Stakeholders
1. **State Road Safety Authorities** — NHAI, Kerala PWD, state transport departments
2. **Tourism Boards** — Kerala Tourism, district tourism offices
3. **Fleet Operators** — KSRTC, private bus operators, logistics companies
4. **Emergency Services** — Ambulances, fire services on mountain routes

---

## 5. MVP Scope

### In Scope
- Marketing website with full landing page
- Product vision pages (About, Vision, How It Works)
- Interactive demo simulation
- Mobile app concept screens
- Waitlist collection (local state only)
- Documentation suite

### Out of Scope (Future Phases)
- Real backend or database
- Authentication system
- Live vehicle tracking
- Hardware device integration
- Payment processing
- Government API integrations

---

## 6. Feature Requirements

### F1 — Marketing Website

| ID | Feature | Priority | Notes |
|----|---------|----------|-------|
| F1.1 | Hero section with animated headline | P0 | Core conversion driver |
| F1.2 | Problem visualization section | P0 | Emotional resonance |
| F1.3 | Solution flow animation | P0 | Concept clarity |
| F1.4 | Interactive weather demo | P1 | Engagement |
| F1.5 | Future vision roadmap | P1 | Investor appeal |
| F1.6 | Technology comparison table | P1 | Differentiation |
| F1.7 | FAQ accordion | P2 | Reduce support load |
| F1.8 | Waitlist signup form | P0 | Primary KPI |
| F1.9 | Contact page | P2 | Partnership inquiries |

### F2 — Mobile App Concept

| ID | Feature | Priority | Notes |
|----|---------|----------|-------|
| F2.1 | Home screen with live status | P0 | Product feel |
| F2.2 | Navigation mode screen | P0 | Core use case |
| F2.3 | Blind curve alert screen | P0 | Key safety moment |
| F2.4 | Hazard detection display | P1 | Depth of product |
| F2.5 | Settings screen | P2 | Completeness |

### F3 — Content Pages

| ID | Feature | Priority |
|----|---------|----------|
| F3.1 | About page | P1 |
| F3.2 | Vision page | P1 |
| F3.3 | How It Works page | P0 |

---

## 7. Success Metrics

### Primary KPIs
- **Waitlist Signups:** Target 500 in first 30 days
- **Time on Site:** Target >3 minutes average
- **Demo Interaction Rate:** Target >60% of visitors engage with demo
- **Contact Form Submissions:** Target 20+ partnership inquiries/month

### Secondary KPIs
- Bounce rate < 40%
- Mobile conversion rate parity with desktop
- Social shares from landing page
- Press/media mentions

---

## 8. Non-Functional Requirements

- **Performance:** Lighthouse score > 90 on all metrics
- **Accessibility:** WCAG 2.1 AA compliance
- **Responsiveness:** Pixel-perfect on 320px–2560px viewports
- **SEO:** Full metadata, Open Graph, structured data
- **Animation:** 60fps target, prefers-reduced-motion respected
- **Load Time:** < 2s LCP on 4G connection

---

## 9. Timeline

| Phase | Deliverable | Timeline |
|-------|------------|---------|
| Phase 0 | Documentation & Architecture | Day 1 |
| Phase 1 | Design System & Shared Components | Day 1–2 |
| Phase 2 | Landing Page Complete | Day 2–3 |
| Phase 3 | All Pages + Mobile Screens | Day 3–4 |
| Phase 4 | QA, SEO, Performance | Day 4–5 |
| Launch | Public MVP | Day 5 |

---

## 10. Open Questions (Resolved for MVP)

1. **Backend?** → No. Local state only for MVP.
2. **Authentication?** → No. Open access.
3. **Real-time data?** → No. Mock data only.
4. **Hardware mockup?** → Shown conceptually in diagrams only.
5. **Languages?** → English only for MVP.
