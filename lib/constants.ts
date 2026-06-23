export const SITE_NAME = "BlindSight";
export const SITE_URL = "https://blindsight.app";
export const SITE_TAGLINE = "See Beyond The Curve";
export const SITE_DESCRIPTION =
  "Prevent blind-curve accidents before they happen. Real-time vehicle presence awareness for mountain roads.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/demo", label: "Demo" },
  { href: "/vision", label: "Vision" },
  { href: "/about", label: "About" },
] as const;

export const STATS = [
  {
    value: 4500,
    suffix: "+",
    label: "Mountain road deaths in India",
    subLabel: "Annually",
  },
  {
    value: 60,
    suffix: "%",
    label: "Of accidents at blind curves",
    subLabel: "Studies show",
  },
  {
    value: 3,
    suffix: "s",
    label: "Average reaction time",
    subLabel: "Needed",
  },
  {
    value: 0,
    suffix: "",
    label: "Real-time warnings today",
    subLabel: "Existing solutions",
  },
] as const;

export const PHASES = [
  {
    phase: "01",
    title: "Software MVP",
    description:
      "Prove the concept. App-based GPS presence detection for early adopters on Kerala's ghat roads.",
    status: "current",
    features: [
      "GPS-based presence detection",
      "Audio + visual alerts",
      "Pre-mapped Kerala blind curves",
      "Works on any smartphone",
    ],
    timeline: "2026",
  },
  {
    phase: "02",
    title: "Mobile Application",
    description:
      "Full-featured React Native app with real-time curve detection, offline maps, and community reporting.",
    status: "upcoming",
    features: [
      "Offline-capable maps",
      "Community hazard reporting",
      "Fleet management dashboard",
      "Driver analytics",
    ],
    timeline: "Q4 2026",
  },
  {
    phase: "03",
    title: "Roadside Devices",
    description:
      "BlindSight Nodes installed at the 1,000 most dangerous curves. Extended 500m range. No cellular required.",
    status: "future",
    features: [
      "LoRa/NB-IoT connectivity",
      "500m detection range",
      "Works in cellular dead zones",
      "Government partnership model",
    ],
    timeline: "2027",
  },
  {
    phase: "04",
    title: "Smart Infrastructure",
    description:
      "National-scale network covering all designated hazardous curves. Emergency vehicle priority. V2X integration.",
    status: "future",
    features: [
      "Government road authority integration",
      "Emergency vehicle priority",
      "Real-time traffic intelligence",
      "V2X protocol support",
    ],
    timeline: "2028+",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How does BlindSight know a vehicle is approaching?",
    answer:
      "In Phase 1, the app uses GPS position to detect when two vehicles are approaching the same known blind curve from opposite directions. When both drivers are within the detection zone of the same curve, both receive instant alerts. In future phases, roadside devices provide hardware-grade detection independent of whether the other vehicle has the app.",
  },
  {
    question: "Does it work without internet connectivity?",
    answer:
      "Phase 1 requires a cellular connection for real-time vehicle-to-vehicle awareness. Starting Phase 3, BlindSight Nodes communicate via LoRa (Low-Power Wide-Area Network), enabling full detection functionality in the cellular dead zones that are common on Kerala's mountain roads.",
  },
  {
    question: "Which roads are covered at launch?",
    answer:
      "BlindSight launches with a pre-mapped database of Kerala's most dangerous blind curves, covering Vagamon, Munnar, Idukki, and Wayanad ghat roads. The database is continuously updated through both manual surveys and community reporting.",
  },
  {
    question: "Do both vehicles need the BlindSight app?",
    answer:
      "In Phase 1 (app-only): yes, both vehicles need the app active for mutual detection. Phase 3 changes this fundamentally — roadside nodes detect any vehicle by RF signature, meaning any driver receives protection even if they don't have the app.",
  },
  {
    question: "How accurate are the alerts?",
    answer:
      "GPS-based detection achieves 3–5m position accuracy in clear conditions. We target <1% false positive rate (false alarms) and <0.1% miss rate. The system is tuned to err on the side of caution — a false positive is a mild inconvenience; a missed detection is unacceptable.",
  },
  {
    question: "Is this legal to use while driving?",
    answer:
      "BlindSight uses audio-primary alerts designed to be received without looking at the screen — identical in principle to navigation app voice guidance. The app can be mounted on the dashboard in phone holders, meeting the same requirements as Google Maps or Waze.",
  },
  {
    question: "How does BlindSight handle fog and rain?",
    answer:
      "Unlike physical mirrors or cameras, GPS-based detection is completely unaffected by weather conditions. Fog, rain, and darkness have no impact on the core detection capability. Phase 3 hardware uses RF signals that are equally unaffected.",
  },
  {
    question: "Is there a cost to use BlindSight?",
    answer:
      "The Phase 1 MVP will be available as a free download. Premium features (fleet management, priority routing, commercial API) will follow a SaaS model. Government and institutional partnerships have separate pricing.",
  },
] as const;

export const FEATURES_COMPARISON = [
  { feature: "Blind curve warning", mirror: false, waze: false, dashcam: false, blindsight: true },
  { feature: "Works in fog & rain", mirror: false, waze: null, dashcam: "partial", blindsight: true },
  { feature: "Real-time detection", mirror: false, waze: "partial", dashcam: false, blindsight: true },
  { feature: "Audio alert", mirror: false, waze: true, dashcam: false, blindsight: true },
  { feature: "500m detection range", mirror: false, waze: false, dashcam: false, blindsight: true },
  { feature: "No hardware needed", mirror: true, waze: true, dashcam: false, blindsight: true },
  { feature: "Works offline (Phase 3)", mirror: true, waze: false, dashcam: true, blindsight: true },
  { feature: "Rural mountain coverage", mirror: true, waze: false, dashcam: null, blindsight: true },
] as const;

export const BLIND_CURVE_LOCATIONS = [
  { name: "Vagamon Ghat", lat: 9.6858, lng: 76.9069, severity: "extreme", accidents: 47 },
  { name: "Munnar Hairpin Series", lat: 10.0889, lng: 77.0595, severity: "extreme", accidents: 63 },
  { name: "Idukki Dam Road", lat: 9.8467, lng: 76.9780, severity: "severe", accidents: 31 },
  { name: "Wayanad Kalpetta Pass", lat: 11.6074, lng: 76.0821, severity: "severe", accidents: 28 },
  { name: "Rajamala Road", lat: 10.1293, lng: 77.0740, severity: "extreme", accidents: 52 },
  { name: "Ponmudi Hill Station", lat: 8.7469, lng: 77.1209, severity: "moderate", accidents: 19 },
] as const;

export const WEATHER_SCENARIOS = [
  {
    id: "clear",
    label: "Clear",
    icon: "sun",
    description: "Normal operation. Standard 200m detection range.",
    alertDelay: 1200,
    detectionRange: 200,
    color: "#0ea5e9",
    condition: "Optimal visibility. Standard alert thresholds active.",
    alertLevel: "medium",
  },
  {
    id: "rain",
    label: "Rain",
    icon: "cloud-rain",
    description: "Enhanced sensitivity. 350m detection range. Earlier warnings.",
    alertDelay: 800,
    detectionRange: 350,
    color: "#38bdf8",
    condition: "Wet road conditions. Detection range extended. Braking distance alerts active.",
    alertLevel: "high",
  },
  {
    id: "fog",
    label: "Fog",
    icon: "cloud",
    description: "Maximum sensitivity. 500m detection range. Maximum alert level.",
    alertDelay: 500,
    detectionRange: 500,
    color: "#f59e0b",
    condition: "Severely reduced visibility. Maximum alert mode. Speed reduction advisory active.",
    alertLevel: "critical",
  },
] as const;
