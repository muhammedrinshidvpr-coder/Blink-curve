# BlindSight — Design System

**Version:** 1.0  
**Date:** June 2026

---

## 1. Design Principles

1. **Clarity in Crisis** — Information must be instantly parseable under stress
2. **Dark-First** — Optimized for night visibility and driver safety aesthetics
3. **Premium Restraint** — Fewer elements, more impact. Apple-level refinement.
4. **Motion with Purpose** — Every animation communicates state or guides attention
5. **Trust Through Precision** — Clean, technical aesthetics signal reliability

---

## 2. Color Palette

### Core Colors

```css
/* Background Scale */
--color-black:    #000000  /* True black (hero backgrounds) */
--color-bg-0:     #080808  /* Page background */
--color-bg-1:     #0f0f0f  /* Card surfaces */
--color-bg-2:     #161616  /* Elevated surfaces */
--color-bg-3:     #1f1f1f  /* Borders, dividers */

/* Text Scale */
--color-text-0:   #ffffff  /* Primary text */
--color-text-1:   #a1a1aa  /* Secondary text (zinc-400) */
--color-text-2:   #71717a  /* Tertiary text (zinc-500) */
--color-text-3:   #3f3f46  /* Disabled text (zinc-700) */

/* Brand Blue — Primary Accent */
--color-brand:    #0ea5e9  /* Sky-500: main accent */
--color-brand-h:  #38bdf8  /* Sky-400: hover state */
--color-brand-d:  #0284c7  /* Sky-600: pressed state */
--color-brand-bg: rgba(14, 165, 233, 0.08)  /* Brand tint background */
--color-brand-glow: rgba(14, 165, 233, 0.15) /* Glow effect */

/* Alert Colors */
--color-alert-critical: #ef4444  /* Red-500 */
--color-alert-high:     #f97316  /* Orange-500 */
--color-alert-medium:   #f59e0b  /* Amber-500 */
--color-alert-low:      #22c55e  /* Green-500 */
--color-alert-safe:     #0ea5e9  /* Brand blue = safe */

/* Semantic */
--color-success: #22c55e
--color-warning: #f59e0b
--color-danger:  #ef4444
--color-info:    #0ea5e9
```

### Gradient Definitions

```css
/* Hero gradient — subtle blue-to-dark */
--gradient-hero: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,165,233,0.12) 0%, transparent 60%);

/* Alert gradient — used in alert screens */
--gradient-alert: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.15) 0%, transparent 60%);

/* Card shimmer */
--gradient-shimmer: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%);

/* Brand border */
--gradient-brand-border: linear-gradient(135deg, rgba(14,165,233,0.4), rgba(14,165,233,0.1));
```

---

## 3. Typography

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|------------|--------|-------|
| `display-2xl` | 72px / 4.5rem | 1.05 | 700 | Hero headline |
| `display-xl` | 60px / 3.75rem | 1.1 | 700 | Page hero |
| `display-lg` | 48px / 3rem | 1.1 | 700 | Section headlines |
| `display-md` | 36px / 2.25rem | 1.2 | 600 | Sub-headlines |
| `display-sm` | 30px / 1.875rem | 1.3 | 600 | Card titles |
| `text-xl` | 20px / 1.25rem | 1.6 | 400 | Large body |
| `text-lg` | 18px / 1.125rem | 1.6 | 400 | Body text |
| `text-md` | 16px / 1rem | 1.6 | 400 | Default body |
| `text-sm` | 14px / 0.875rem | 1.5 | 400 | Secondary text |
| `text-xs` | 12px / 0.75rem | 1.4 | 500 | Labels, badges |

### Font Families

```css
/* Primary — headings and UI */
--font-sans: "Inter", system-ui, -apple-system, sans-serif;

/* Monospace — technical, data, code elements */
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

### Typography Rules
- Headlines: `font-weight: 700`, tight tracking (`letter-spacing: -0.02em`)
- Body: `font-weight: 400`, normal tracking
- Labels/UI: `font-weight: 500`, wide tracking (`letter-spacing: 0.05em`)
- Monospace: Used for speeds, distances, coordinates, and technical data

---

## 4. Spacing System

Based on 8px grid:

```
4px   — micro spacing (badge padding)
8px   — xs (inner padding)
12px  — sm (tight elements)
16px  — md (standard gap)
24px  — lg (component padding)
32px  — xl (section gaps)
48px  — 2xl (major section gaps)
64px  — 3xl (page sections)
96px  — 4xl (hero spacing)
128px — 5xl (hero padding)
```

---

## 5. Border Radius

```css
--radius-sm:  4px    /* Tags, badges */
--radius-md:  8px    /* Buttons, inputs */
--radius-lg:  12px   /* Cards */
--radius-xl:  16px   /* Large cards */
--radius-2xl: 24px   /* Mobile frames */
--radius-full: 9999px /* Pills, circles */
```

---

## 6. Shadow System

```css
/* Elevation scale */
--shadow-sm:  0 1px 2px rgba(0,0,0,0.5);
--shadow-md:  0 4px 16px rgba(0,0,0,0.4);
--shadow-lg:  0 8px 32px rgba(0,0,0,0.6);
--shadow-xl:  0 16px 48px rgba(0,0,0,0.7);

/* Brand glow */
--shadow-brand:    0 0 24px rgba(14,165,233,0.2);
--shadow-brand-lg: 0 0 48px rgba(14,165,233,0.25);

/* Alert glows */
--shadow-danger:   0 0 24px rgba(239,68,68,0.2);
--shadow-warning:  0 0 24px rgba(245,158,11,0.2);
--shadow-success:  0 0 24px rgba(34,197,94,0.2);
```

---

## 7. Component Design Patterns

### Buttons

```
Primary:    bg-brand  text-white  hover:bg-brand-hover  shadow-brand
Secondary:  bg-bg-2   text-white  border border-bg-3    hover:bg-bg-3
Ghost:      bg-transparent        border border-bg-3    hover:bg-bg-1
Danger:     bg-danger text-white  hover:bg-red-600
```

### Cards
- Background: `bg-bg-1` or `bg-bg-2`
- Border: `border border-bg-3` (1px subtle border)
- On hover: `border-brand/20` + subtle glow
- Padding: `p-6` (24px) standard, `p-8` (32px) featured

### Badges
```
Default: bg-bg-2  text-text-1  border border-bg-3
Brand:   bg-brand/10  text-brand  border border-brand/20
Danger:  bg-red-500/10  text-red-400  border border-red-500/20
Success: bg-green-500/10  text-green-400  border border-green-500/20
```

### Input Fields
- Background: `bg-bg-1`
- Border: `border border-bg-3`
- Focus: `border-brand/60` + brand glow ring
- Placeholder: `text-text-3`

---

## 8. Iconography

**Icon Library:** Lucide React  
**Sizes:**
- 12px — inline text icons
- 16px — button icons, badges
- 20px — default UI icons
- 24px — feature icons
- 32px — section icons
- 48px — illustration icons

**Style:** Stroke, not fill. Stroke width: 1.5px for UI, 2px for emphasis.

---

## 9. Animation System

### Timing Functions
```css
--ease-smooth: cubic-bezier(0.16, 1, 0.3, 1)      /* Spring-like, for entries */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)        /* Standard */
--ease-out:    cubic-bezier(0, 0, 0.2, 1)           /* Exits */
--ease-in:     cubic-bezier(0.4, 0, 1, 1)           /* Entries from state */
```

### Duration Scale
```
100ms — micro interactions (hover state changes)
200ms — small UI transitions (button press, badge appear)
300ms — standard transitions (dropdown, tooltip)
400ms — component entries (card slide-in)
500ms — section entries (viewport animations)
600ms — complex sequences (solution diagram)
800ms — page transitions (route changes)
```

### Standard Viewport Animation (Framer Motion)
```typescript
const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};
```

---

## 10. Grid System

- Max content width: `1200px` (`max-w-6xl`)
- Full-bleed sections: `max-w-screen-2xl`
- Content padding: `px-6` (mobile) → `px-8` (tablet) → `px-16` (desktop)
- Grid columns: 12-column base
- Standard layouts: 1-col → 2-col → 3-col responsive
- Feature layouts: 5/7 or 4/8 column splits

---

## 11. Dark Mode Implementation

All colors are dark-mode-only for this product. No light mode.

CSS variables are set globally. All Tailwind utilities used as-is with custom tokens layered on top.

```css
:root {
  color-scheme: dark;
  /* All tokens defined here */
}
```
