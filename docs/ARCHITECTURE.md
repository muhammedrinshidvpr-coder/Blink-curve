# BlindSight — System Architecture

**Version:** 1.0  
**Date:** June 2026

---

## 1. MVP Architecture (Software-Only)

```
┌─────────────────────────────────────────────────────┐
│                    BROWSER CLIENT                    │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────┐  │
│  │  Next.js    │  │   Framer     │  │  shadcn/  │  │
│  │  App Router │  │   Motion     │  │    ui     │  │
│  └─────────────┘  └──────────────┘  └───────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │            React Components                    │  │
│  │  Landing │ About │ Vision │ Demo │ Mobile App  │  │
│  └───────────────────────────────────────────────┘  │
│                                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │            Mock Data Layer                     │  │
│  │    lib/mock-data.ts   lib/constants.ts         │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼ (Static Export)
┌─────────────────────────────────────────────────────┐
│                   VERCEL CDN                         │
│              Static HTML/CSS/JS                      │
│              Edge Network Delivery                   │
└─────────────────────────────────────────────────────┘
```

---

## 2. Future Production Architecture (Phase 2+)

```
┌─────────────────────┐         ┌─────────────────────┐
│   MOBILE APP        │         │   WEB DASHBOARD     │
│   (React Native)    │◄───────►│   (Next.js)         │
└──────────┬──────────┘         └──────────┬──────────┘
           │                               │
           ▼                               ▼
┌─────────────────────────────────────────────────────┐
│                  API GATEWAY                         │
│              (Next.js API Routes / tRPC)             │
└──────────────────────────┬──────────────────────────┘
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
┌──────────────┐  ┌───────────────┐  ┌───────────────┐
│  PRESENCE    │  │   HAZARD DB   │  │   USER        │
│  SERVICE     │  │   (PostGIS)   │  │   SERVICE     │
│  (Pusher/WS) │  │               │  │   (Supabase)  │
└──────────────┘  └───────────────┘  └───────────────┘
           │
           ▼
┌──────────────────────────┐
│  ROADSIDE IoT DEVICES    │
│  (Phase 2)               │
│  ┌────────┐  ┌────────┐  │
│  │ Sensor │  │ Camera │  │
│  │ Node   │  │ Node   │  │
│  └────────┘  └────────┘  │
└──────────────────────────┘
```

---

## 3. BlindSight Protocol (Future)

### Vehicle Detection Flow
```
Vehicle A approaches curve
         │
         ▼
┌─────────────────────┐
│  GPS Position Check │ → Is within 500m of known blind curve?
└──────────┬──────────┘
           │ YES
           ▼
┌─────────────────────┐
│  Presence Broadcast │ → Publish to curve channel via WebSocket
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Vehicle B Receives  │ → BlindSight detects Vehicle A on same curve
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Alert Triggered   │ → Audio + visual warning to Driver B
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Speed Reduction    │ → Optional: suggest speed reduction
└─────────────────────┘
```

### Alert Priority Levels
| Level | Condition | Action |
|-------|----------|--------|
| LOW | Vehicle detected >200m away | Soft audio + subtle UI |
| MEDIUM | Vehicle detected 100–200m | Moderate audio + amber UI |
| HIGH | Vehicle detected 50–100m | Urgent audio + red UI |
| CRITICAL | Vehicle detected <50m | Max alert + haptic |

---

## 4. Data Models (Future)

```typescript
interface Vehicle {
  id: string;
  type: "car" | "truck" | "bus" | "motorcycle" | "emergency";
  position: { lat: number; lng: number };
  speed: number;          // km/h
  heading: number;        // degrees
  timestamp: number;      // unix ms
}

interface BlindCurve {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  radius: number;         // meters of detection zone
  severity: "moderate" | "severe" | "extreme";
  road: string;
  incidents: number;      // historical accidents
}

interface Alert {
  id: string;
  curveId: string;
  vehicleA: string;
  vehicleB: string;
  distance: number;       // meters between vehicles
  severity: AlertLevel;
  timestamp: number;
}
```

---

## 5. Phase Roadmap

### Phase 1 — Software MVP (Current)
- Marketing website
- Mobile app concept demonstration
- Waitlist collection
- Investor communication

### Phase 2 — App + Prototype
- React Native mobile app
- Supabase backend
- Real GPS presence detection (phone-based)
- Beta test on 5 specific Kerala curves

### Phase 3 — Roadside Devices
- IoT sensor nodes at blind curves
- LPWAN connectivity (LoRa/NB-IoT)
- Edge processing on device
- App receives device-assisted alerts

### Phase 4 — Vehicle Integration
- OBD-II adapter integration
- Partnership with vehicle OEMs
- ADAS system integration
- V2X communication protocol

### Phase 5 — Smart Infrastructure
- Government road authority partnerships
- National Highways integration
- Emergency vehicle priority
- Traffic management integration

---

## 6. Security Considerations (Future)

- **Vehicle Authentication:** Signed device certificates
- **Position Privacy:** Coarse-grained position sharing (curve-level only)
- **Data Minimization:** No persistent location storage
- **Rate Limiting:** Prevent DoS on presence broadcast
- **E2E Encryption:** Alert data encrypted in transit
