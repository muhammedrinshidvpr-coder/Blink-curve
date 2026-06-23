export const MOCK_ALERTS = [
  {
    id: "alert-001",
    location: "Vagamon Hairpin Bend #3",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    severity: "critical" as const,
    vehicleType: "bus",
    distance: 45,
    speed: 32,
    resolved: false,
  },
  {
    id: "alert-002",
    location: "Munnar Rajamala Road KM 12",
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    severity: "high" as const,
    vehicleType: "truck",
    distance: 110,
    speed: 28,
    resolved: true,
  },
  {
    id: "alert-003",
    location: "Idukki Bypass Curve",
    timestamp: new Date(Date.now() - 22 * 60 * 1000),
    severity: "medium" as const,
    vehicleType: "car",
    distance: 185,
    speed: 45,
    resolved: true,
  },
];

export const MOCK_ROUTE = {
  origin: "Kochi",
  destination: "Munnar",
  distance: "130 km",
  estimatedTime: "3h 45m",
  dangerZones: 8,
  currentSpeed: 48,
  nextHazard: {
    name: "Hairpin Bend — Neriamangalam",
    distance: 12.4,
    severity: "high" as const,
    estimatedArrival: "16 min",
  },
};

export const MOCK_VEHICLE_DETECTIONS = [
  { id: "v1", angle: 15, distance: 180, type: "car" as const, speed: 42 },
  { id: "v2", angle: -10, distance: 320, type: "truck" as const, speed: 28 },
  { id: "v3", angle: 5, distance: 95, type: "bus" as const, speed: 35 },
];

export const MOCK_STATS_LIVE = {
  totalAlertsSent: 12847,
  accidetsPrevented: 23,
  activeUsers: 847,
  curvesMonitored: 312,
  successRate: 99.7,
};

export const MOCK_SETTINGS = {
  alertVolume: 85,
  detectionSensitivity: "high" as const,
  language: "English",
  alertMode: "audio_visual" as const,
  speedRecommendation: true,
  emergencyContact: "+91 98765 43210",
  nightMode: true,
  fleetMode: false,
  offlineMapRegion: "Kerala",
};

export const MOCK_HAZARDS = [
  {
    id: "hz-1",
    name: "Vagamon Hairpin #3",
    type: "blind_curve" as const,
    severity: "extreme" as const,
    distance: 0.8,
    accidents: 47,
    lastAlert: "2 min ago",
  },
  {
    id: "hz-2",
    name: "Fog Zone — Munnar Upper",
    type: "fog_zone" as const,
    severity: "high" as const,
    distance: 2.4,
    accidents: 12,
    lastAlert: "15 min ago",
  },
  {
    id: "hz-3",
    name: "Rajamala Road Descent",
    type: "steep_descent" as const,
    severity: "severe" as const,
    distance: 5.1,
    accidents: 31,
    lastAlert: "1 hr ago",
  },
];
