# BlindSight — Project Plan

**Version:** 1.0  
**Date:** June 2026

---

## Sprint 0 — Foundation (Day 1)

### Goals
- [ ] Project initialization and configuration
- [ ] Documentation suite complete
- [ ] Design system defined
- [ ] Shared component library scaffolded

### Tasks
| Task | Owner | Status |
|------|-------|--------|
| Initialize Next.js 15 project | Engineering | ✅ |
| Configure TypeScript strict mode | Engineering | ✅ |
| Set up Tailwind CSS with custom design tokens | Design/Engineering | ✅ |
| Configure Framer Motion | Engineering | ✅ |
| Install shadcn/ui components | Engineering | ✅ |
| Write PRD | Product | ✅ |
| Write TRD | Engineering | ✅ |
| Write Architecture document | Engineering | ✅ |
| Define design system | Design | ✅ |
| Define brand guidelines | Design | ✅ |
| Define user personas | Product | ✅ |
| Write landing page copy | Marketing | ✅ |
| Competitor analysis | Product | ✅ |

---

## Sprint 1 — Landing Page (Day 2–3)

### Goals
- [ ] Hero section with animated CTA
- [ ] Problem section with visual storytelling
- [ ] Solution flow animation
- [ ] Interactive demo section
- [ ] Future vision section
- [ ] Comparison table
- [ ] FAQ accordion
- [ ] Waitlist section

### Tasks
| Task | Priority | Estimated Hours |
|------|----------|----------------|
| Navbar with scroll behavior | P0 | 2h |
| Hero: headline + subheadline + CTA | P0 | 3h |
| Hero: animated background | P0 | 2h |
| Problem: road visualization | P0 | 4h |
| Problem: statistics counter | P1 | 1h |
| Solution: flow diagram animation | P0 | 5h |
| Demo: weather selector UI | P0 | 3h |
| Demo: response visualization | P0 | 4h |
| Vision: phase roadmap timeline | P1 | 3h |
| Comparison: feature table | P1 | 2h |
| FAQ: accordion component | P2 | 1h |
| Waitlist: email form | P0 | 2h |
| Footer | P1 | 1.5h |

**Total Estimate:** ~33.5 hours

---

## Sprint 2 — Pages + Mobile Concept (Day 3–4)

### Goals
- [ ] About page
- [ ] Vision page
- [ ] How It Works page
- [ ] Demo page (interactive)
- [ ] Contact page
- [ ] Mobile app screens
- [ ] Demo route with full app simulation

### Tasks
| Task | Priority | Estimated Hours |
|------|----------|----------------|
| About page layout + content | P1 | 3h |
| Vision page with timeline | P1 | 3h |
| How It Works: step-by-step | P0 | 4h |
| Demo: interactive simulation | P0 | 6h |
| Contact page with form | P2 | 2h |
| Mobile frame component | P0 | 2h |
| Mobile Home screen | P0 | 3h |
| Mobile Navigation screen | P0 | 3h |
| Mobile Alert screen | P0 | 4h |
| Mobile Hazard screen | P1 | 3h |
| Mobile Settings screen | P2 | 2h |

**Total Estimate:** ~35 hours

---

## Sprint 3 — Quality & Launch (Day 4–5)

### Goals
- [ ] SEO optimization
- [ ] Performance audit
- [ ] Accessibility check
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Animation polish
- [ ] Deploy to Vercel

### Tasks
| Task | Priority | Estimated Hours |
|------|----------|----------------|
| Add all metadata + Open Graph | P0 | 2h |
| Add structured data (JSON-LD) | P1 | 1h |
| Lighthouse audit + fixes | P0 | 4h |
| Accessibility audit + fixes | P1 | 3h |
| Mobile breakpoint testing | P0 | 2h |
| Animation performance review | P1 | 2h |
| Cross-browser smoke test | P1 | 2h |
| Vercel deployment + domain | P0 | 1h |
| Analytics setup (Vercel Analytics) | P2 | 0.5h |

**Total Estimate:** ~17.5 hours

---

## KPIs and Launch Criteria

### Must Have (Go/No-Go)
- [ ] Lighthouse Performance > 85
- [ ] All pages load without errors
- [ ] Waitlist form functional
- [ ] Mobile responsive on iPhone 12, Samsung S21
- [ ] No TypeScript errors
- [ ] No broken links

### Should Have
- [ ] Lighthouse Accessibility > 90
- [ ] Interactive demo works on all weather modes
- [ ] All animations smooth at 60fps
- [ ] Open Graph images correct

### Nice to Have
- [ ] Lighthouse SEO = 100
- [ ] Dark mode only (already planned)
- [ ] Page transitions between routes

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Animation performance issues on mobile | Medium | High | Test early, use CSS fallbacks |
| Design too template-looking | Low | High | Custom illustrations, bespoke animations |
| Copy not compelling | Medium | High | Review against competitor messaging |
| Next.js 15 compatibility issues | Low | Medium | Pin exact versions |
| Build failures on Vercel | Low | Low | Test build locally first |
