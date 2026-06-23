# BlindSight — Brand Guidelines

**Version:** 1.0  
**Date:** June 2026

---

## 1. Brand Identity

### Mission
> To eliminate blind-curve accidents through connected vehicle awareness technology.

### Vision
> A world where no driver is surprised by what's around the corner.

### Brand Personality
- **Confident** — We know this saves lives. We say so clearly.
- **Precise** — Technical credibility. Not hype.
- **Urgent** — This problem kills people. The urgency is real.
- **Premium** — Lives depend on this working. The product and brand reflect that gravity.
- **Human** — Behind every statistic is a real person. We don't forget that.

---

## 2. Logo Concept

### Primary Mark
The BlindSight wordmark uses Inter Display at 700 weight. The "B" in BlindSight is paired with an abstract icon: a curved arc (representing a road bend) with a line breaking through it (representing sight/awareness).

### Icon Construction
```
  ╭───────────╮
  │  ╭─────╮  │    ← Outer arc: the blind curve
  │  │  ●  │  │    ← Center dot: the vehicle  
  │  ╰─────╯  │    ← Inner arc: BlindSight awareness
  ╰────── ───╯
         │
         ▼ (Ray of awareness breaking through the curve)
```

### Logo Variations
1. **Full Wordmark** — Icon + "BlindSight" — for header, primary usage
2. **Icon Only** — App icon, favicon, social avatar
3. **Wordmark Only** — Horizontal text-only for document headers

### Clear Space
Minimum clear space: 50% of icon height on all sides.

### Minimum Size
Icon: 16px | Full wordmark: 80px wide

---

## 3. Color System

### Primary Brand Colors

| Color | Hex | RGB | Use |
|-------|-----|-----|-----|
| Brand Blue | #0ea5e9 | 14, 165, 233 | Primary actions, highlights, links |
| Pure Black | #000000 | 0, 0, 0 | Hero backgrounds |
| Surface | #0f0f0f | 15, 15, 15 | Page background |
| White | #ffffff | 255, 255, 255 | Primary text |

### Alert Hierarchy Colors (in-product use)
| Level | Color | Hex |
|-------|-------|-----|
| Critical | Red | #ef4444 |
| High | Orange | #f97316 |
| Medium | Amber | #f59e0b |
| Low | Green | #22c55e |
| Safe | Brand Blue | #0ea5e9 |

### Color Rules
1. Never use light mode colors — BlindSight is dark-first by design
2. Brand blue is the ONLY color used for CTAs and primary interaction
3. Red is reserved exclusively for danger/alert states
4. No gradients on text except hero headline treatments

---

## 4. Typography

### Typefaces

**Inter** — Primary typeface
- Use for: All headlines, body copy, UI text
- Source: Google Fonts (self-hosted via next/font)
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

**JetBrains Mono** — Secondary typeface
- Use for: Technical data, speeds, distances, code
- Creates: Technical credibility, data readability
- Weights used: 400 (Regular)

### Headline Style
- All major headlines: Bold (700), tight tracking (-0.02em)
- No ALL CAPS for headlines (except section labels)
- Sentence case preferred
- Line-height: 1.05–1.15 for display, 1.5–1.6 for body

### Section Labels
- Font: Inter 500
- Size: 12px
- Tracking: +0.1em (WIDE)
- Case: ALL CAPS
- Color: Brand blue (--color-brand)
- Pattern: `"THE PROBLEM"`, `"OUR SOLUTION"`, `"THE ROAD AHEAD"`

---

## 5. Imagery Direction

### Photography Style
- Dark, atmospheric mountain road photography
- Kerala-specific: green hills, mist, hairpin bends
- Time of day: Golden hour, fog, rain, twilight
- Point of view: Driver's perspective (from inside car looking at road)
- No stock-looking bright, generic road imagery
- High contrast, cinematic treatment

### Illustration Style
- Technical diagrams: Wire-frame, blueprint aesthetic
- Clean lines, brand-blue accent on dark backgrounds
- No flat cartoon illustrations
- Prefer abstract/geometric representations of concepts

### Icon Style
- Lucide React icons throughout
- Stroke-based (not filled)
- Stroke width: 1.5px (default), 2px (emphasis)
- No multi-color icons in UI (monochrome: white or brand-blue)

---

## 6. Voice and Tone

### Brand Voice
BlindSight writes like a brilliant engineer who also happens to care deeply about human life. Technical credibility meets genuine urgency.

### Tone Dimensions
| Situation | Tone |
|-----------|------|
| Headlines | Bold, declarative, urgent |
| Body copy | Clear, confident, human |
| Technical specs | Precise, factual, no jargon |
| CTAs | Direct, actionable, not pushy |
| Error states | Helpful, calm, clear |
| Success states | Warm, affirming, brief |
| Alert copy | Urgent, precise, immediate |

### Voice Examples

**Do:**
> "Every blind curve is a gamble. BlindSight removes the bet."
> "No guessing. No hoping. Just awareness."
> "4,500 lives per year. We're here to change that number."

**Don't:**
> "Revolutionizing road safety with cutting-edge AI-powered technology!" (hype)
> "Our innovative solution leverages advanced algorithms" (jargon)
> "Be careful on the roads!" (vague, generic)
> "Download our app today!!!" (desperation)

---

## 7. Animation Brand Language

### Character
- **Precise** — animations feel engineered, not whimsical
- **Smooth** — no janky transitions, always 60fps
- **Purposeful** — every motion has a reason
- **Restrained** — subtlety over spectacle

### Key Motion Signatures
1. **The Reveal** — Sections fade up from 24px below as user scrolls. Staggered by 80ms per element.
2. **The Pulse** — Alert rings pulse with a slow, urgent breathe (2s cycle). Used exclusively for warning states.
3. **The Scan** — Technical radar-sweep animation used in demo section. Communicates detection.
4. **The Flow** — Solution diagram animates vehicles moving toward a curve, with alert triggers visualized.

### Motion Do's
- Use `will-change: transform` for animated elements
- Animate `opacity` and `transform` only (never `width`, `height`, `top`)
- Spring easing for entries: `cubic-bezier(0.16, 1, 0.3, 1)`
- Standard easing for exits: `cubic-bezier(0.4, 0, 0.2, 1)`

### Motion Don'ts
- No spinning logos or loading indicators except for actual loading states
- No bounce effects on serious UI elements
- No animations longer than 800ms in UI interactions
- Always respect `prefers-reduced-motion`

---

## 8. Digital Guidelines

### Website
- Dark background always
- Generous whitespace
- Single accent color (brand blue)
- Left-aligned body copy
- Centered hero headlines

### Social Media
- Twitter/X: Brand blue header, profile pic = icon mark
- LinkedIn: Company cover = dark hero with headline
- Instagram: Single-color templates, product screenshots

### Email
- Plain text preferred for transactional
- Dark template for marketing emails
- BlindSight wordmark + thin divider at top
- Single CTA per email

---

## 9. Prohibited Uses

Never:
- Distort or stretch the logo
- Use the logo on a light background
- Use the logo below minimum size
- Apply gradients to the logo
- Use unapproved typefaces
- Use red as a brand color (reserved for alerts)
- Use the brand to imply false certifications or government approval
