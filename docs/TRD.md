# BlindSight — Technical Requirements Document (TRD)

**Version:** 1.0  
**Date:** June 2026  
**Status:** MVP

---

## 1. Technology Stack

### Frontend Framework
- **Next.js 15** with App Router
- **React 19** with Server Components
- **TypeScript 5** (strict mode)

### Styling
- **Tailwind CSS 3.4** — utility-first CSS
- **tailwindcss-animate** — animation utilities
- **CSS Custom Properties** — design token system

### Animation
- **Framer Motion 11** — production-grade motion library
- Hardware-accelerated transforms
- Layout animations for smooth state transitions

### UI Components
- **shadcn/ui** — accessible, unstyled Radix primitives
- **Radix UI** — accessibility-first component primitives
- **Lucide React** — consistent icon system

### State Management
- React useState / useReducer for local state
- No external state library needed (no backend, no complex state)
- LocalStorage for waitlist form persistence (mock only)

---

## 2. Project Structure

```
blindsight/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Landing page
│   ├── about/
│   │   └── page.tsx
│   ├── vision/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── demo/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css              # Global styles + CSS variables
├── components/
│   ├── ui/                      # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── accordion.tsx
│   │   └── tabs.tsx
│   ├── shared/                  # Cross-page components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── AnimatedCounter.tsx
│   ├── landing/                 # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── VisionSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── WaitlistSection.tsx
│   └── mobile/                 # Mobile app concept screens
│       ├── MobileFrame.tsx
│       ├── HomeScreen.tsx
│       ├── NavigationScreen.tsx
│       ├── AlertScreen.tsx
│       ├── HazardScreen.tsx
│       └── SettingsScreen.tsx
├── lib/
│   ├── utils.ts                # cn() utility
│   ├── constants.ts            # App-wide constants
│   └── mock-data.ts           # All mock data
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useCountUp.ts
├── public/
│   └── og-image.png           # Open Graph image
├── docs/                       # Project documentation
└── ...config files
```

---

## 3. Performance Requirements

### Core Web Vitals Targets
| Metric | Target | Priority |
|--------|--------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | P0 |
| FID (First Input Delay) | < 100ms | P0 |
| CLS (Cumulative Layout Shift) | < 0.1 | P0 |
| TTFB (Time to First Byte) | < 600ms | P1 |
| FCP (First Contentful Paint) | < 1.8s | P1 |

### Optimization Strategies
- **Image Optimization:** Next.js Image component with lazy loading
- **Code Splitting:** Automatic with App Router
- **Bundle Analysis:** Track with @next/bundle-analyzer
- **Font Loading:** next/font with display:swap
- **Animation:** GPU-accelerated via Framer Motion transforms
- **Prefetching:** Next.js Link prefetch for navigation

---

## 4. Rendering Strategy

| Page | Strategy | Reason |
|------|---------|--------|
| Landing (/) | SSG | Static content, SEO critical |
| About | SSG | Static content |
| Vision | SSG | Static content |
| How It Works | SSG | Static content |
| Demo | CSR island | Interactive, no SEO needed |
| Contact | SSG + CSR | Form handling in client |

---

## 5. SEO Technical Spec

### Metadata (per page)
```typescript
export const metadata: Metadata = {
  title: "BlindSight | See Beyond The Curve",
  description: "...",
  openGraph: { ... },
  twitter: { ... },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://blindsight.app/" },
};
```

### Structured Data
- Organization schema
- WebSite schema
- Product schema (for the safety system)

### Sitemap
- Auto-generated via next-sitemap
- All public pages included

---

## 6. Accessibility Requirements

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Color contrast ratio ≥ 4.5:1 for text
- prefers-reduced-motion respected in all animations
- Screen reader friendly alt text on all images

---

## 7. Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 110+ |
| Firefox | 110+ |
| Safari | 16+ |
| Edge | 110+ |
| Mobile Safari | iOS 16+ |
| Chrome Android | 110+ |

---

## 8. Animation Technical Spec

### Framer Motion Patterns Used
- **Viewport animations:** `whileInView` with `once: true`
- **Stagger children:** `staggerChildren` in parent variants
- **Layout animations:** `layout` prop for smooth state changes
- **Shared element transitions:** `layoutId` for connected animations
- **Exit animations:** `AnimatePresence` for conditional renders

### Performance Rules
- No animations on opacity/transform that trigger layout
- GPU-compositable properties only: transform, opacity
- Reduced motion via `useReducedMotion()` hook
- Animation duration: 200ms–600ms (never exceed 800ms for UI)

---

## 9. TypeScript Conventions

```typescript
// Strict mode enabled
// No `any` types
// Explicit return types on exported functions
// Interface over type for object shapes
// Const assertions where possible

interface BlindCurveAlert {
  id: string;
  location: GeoCoordinate;
  severity: "low" | "medium" | "high" | "critical";
  vehicleCount: number;
  timestamp: Date;
}
```

---

## 10. Environment Variables

For MVP, no environment variables required (no API keys, no database).

Future phases will require:
- `NEXT_PUBLIC_MAPBOX_TOKEN`
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `PUSHER_APP_ID` / `PUSHER_KEY`
