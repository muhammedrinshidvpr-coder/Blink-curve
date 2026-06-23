# BlindSight — Competitor Analysis

**Version:** 1.0  
**Date:** June 2026

---

## 1. Competitive Landscape Overview

BlindSight operates at the intersection of road safety technology, V2X communication, and IoT infrastructure. No direct competitor solves the blind curve problem as a standalone product.

---

## 2. Direct Competitors

### 2.1 Convex Road Mirrors (Traditional)

**Description:** Physical convex mirrors installed at blind curves, showing a wide-angle view of the opposing lane.

| Attribute | Assessment |
|-----------|-----------|
| Effectiveness | Low–Medium |
| Range | 10–30 meters |
| Weather Performance | Poor (fog, rain, night) |
| Cost | ₹5,000–₹15,000 per curve |
| Maintenance | High (vandalism, weathering) |
| Scalability | Manual installation required |
| Alert Quality | Passive visual only |

**BlindSight Advantage:** Active, real-time, works in all weather, long range (500m+), audio alerts.

---

### 2.2 Google Maps / Waze

**Description:** Navigation apps with community-reported hazards.

| Attribute | Assessment |
|-----------|-----------|
| Blind Curve Awareness | None |
| Real-time Warnings | Community-reported only |
| Mountain Road Coverage | Poor in rural Kerala |
| Offline Capability | Limited |
| Active Safety | No |
| Integration | Ubiquitous |

**BlindSight Advantage:** Specialized blind curve detection, proactive (not community-reported), works offline, purpose-built for this use case.

---

### 2.3 Mobileye (Advanced ADAS)

**Description:** Camera-based ADAS system built into vehicles. Detects lane departure, pedestrians, and forward collision.

| Attribute | Assessment |
|-----------|-----------|
| Blind Curve Capability | No (camera can't see around bends) |
| Price | $800–$1,500 per vehicle |
| Availability | New vehicles only |
| Rural Road Support | Very poor |
| Government Deployment | Complex |

**BlindSight Advantage:** Works with any vehicle, no in-vehicle hardware needed (Phase 1), designed for rural mountain roads.

---

### 2.4 V2X (Vehicle-to-Everything) by Qualcomm / Continental

**Description:** Industry standard for connected vehicle communication. Vehicles broadcast presence to each other and to infrastructure.

| Attribute | Assessment |
|-----------|-----------|
| Technology | DSRC / C-V2X |
| Cost | Requires OEM integration |
| Timeline | 5–10 year adoption cycle |
| Rural Coverage | Near zero today |
| Standard Body | IEEE 802.11p / 3GPP |

**BlindSight Advantage:** Available NOW, works with existing vehicles, deployable in months not years.

---

### 2.5 Roadroid / FixMyStreet

**Description:** Road quality reporting apps. Citizens report potholes and hazards.

| Attribute | Assessment |
|-----------|-----------|
| Reactive vs Proactive | Reactive only |
| Real-time Safety | No |
| Coverage | Government-dependent |

**BlindSight Advantage:** Proactive real-time safety, not reactive reporting.

---

## 3. Indirect Competitors

### 3.1 Traffic Signal Systems at Curves
- Some states have installed traffic lights at severely blind curves
- Effective but requires power infrastructure
- ₹5–15 lakh per installation
- Cannot adapt to real-time traffic conditions

### 3.2 Speed Enforcement Cameras
- Reduces overall speed but doesn't address surprise collisions
- No warning to approaching drivers

### 3.3 Emergency Response Apps (RescueNet, etc.)
- Post-accident response, not pre-accident prevention

---

## 4. Competitive Positioning Matrix

```
                    HIGH EFFECTIVENESS
                           │
                           │         ★ BlindSight (Phase 2+)
              Mobileye ●   │
                           │    ● BlindSight (MVP Phase)
                           │
LOW COST ─────────────────────────────────────── HIGH COST
                           │
    Convex Mirrors ●       │
    Road Signs ●           │              ● V2X Systems
                           │
                           │
                    LOW EFFECTIVENESS
```

---

## 5. Feature Comparison Table

| Feature | Convex Mirror | Waze | Mobileye | V2X | **BlindSight** |
|---------|-------------|------|---------|-----|--------------|
| Blind curve warning | Partial | No | No | Yes | **Yes** |
| Works in fog | No | N/A | Partial | Yes | **Yes** |
| Works at night | Partial | N/A | Yes | Yes | **Yes** |
| Real-time alerts | No | Partial | Yes | Yes | **Yes** |
| No in-vehicle hardware needed | Yes | Yes | No | No | **Yes (Phase 1)** |
| Audio warning | No | No | Yes | Yes | **Yes** |
| Rural mountain coverage | Yes | Poor | N/A | No | **Yes** |
| Works today | Yes | Yes | Yes | Partial | **Yes** |
| Scales cost-effectively | No | Yes | No | No | **Yes** |
| Government deployable | Yes | Partial | No | Future | **Yes** |

---

## 6. Market Opportunity

### India Mountain Road Statistics
- **Total ghat road length:** ~8,000 km across South India
- **Kerala mountain roads:** ~1,200 km
- **Identified blind curve hotspots:** 3,000+ nationally
- **Annual mountain road accidents:** 12,000+ (India)
- **Fatalities:** 4,500+ annually

### Addressable Market (India)
- **SAM (Serviceable Addressable Market):** ₹850 crore (Kerala + Karnataka + Tamil Nadu + Himachal Pradesh)
- **SOM (Serviceable Obtainable Market — Year 1):** ₹12 crore (Kerala pilot + premium app users)
- **TAM (Total Addressable Market):** ₹4,200 crore (all mountain road safety infrastructure, India)

### Global Opportunity
- Switzerland Alpine Roads
- Nepal Himalayan Routes
- Peru Andean Roads
- Colombia Coffee Region
- US Pacific Coast Highway
- Norway fjord roads

---

## 7. Strategic Differentiation

### BlindSight Unique Value Propositions

1. **Problem Specificity:** Built exclusively for blind curves — not a general navigation app
2. **Infrastructure-First (Phase 3):** Roadside devices mean NO vehicle hardware requirement for basic protection
3. **India-First Design:** Built for Kerala's roads, then scaled globally
4. **Offline-First:** Works without cellular connectivity (LoRa in Phase 3)
5. **Sub-second Warning:** Alert latency <500ms from detection to driver notification
6. **Tiered Coverage:** Software-only → App → Device → Vehicle integration path

### Moat Building Strategy
- **Data Moat:** Accumulate the world's most comprehensive blind curve hazard dataset
- **Network Effects:** More vehicles = better warnings for all drivers
- **Government Partnerships:** First-mover with Kerala/NHAI locks out competitors
- **Hardware Lock-in (Phase 3):** Roadside devices create ongoing subscription revenue
