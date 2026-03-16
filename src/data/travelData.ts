import type { TransportMode, BudgetLevel, TravelerType } from "@/components/DestinationInput";

// ─── Transport ───────────────────────────────────────────────
export interface TransportInfo {
  name: string;
  price: string;
  tip: string;
  review: string;
  rating: number;
}

const transportData: Record<TransportMode, Record<BudgetLevel, TransportInfo>> = {
  car: {
    budget: { name: "Economy Car Rental", price: "$25-40/day", tip: "Book compact cars in advance, use toll-free routes", review: "Great for flexibility, fuel costs add up", rating: 3.8 },
    "mid-range": { name: "Standard SUV Rental", price: "$50-80/day", tip: "GPS included, consider full insurance coverage", review: "Comfortable for families, good storage space", rating: 4.2 },
    luxury: { name: "Premium/Luxury Vehicle", price: "$120-200/day", tip: "Mercedes, BMW available, valet parking at hotels", review: "Exceptional comfort, turns heads everywhere", rating: 4.8 },
  },
  bus: {
    budget: { name: "Local City Buses", price: "$1-3/ride", tip: "Get a day pass for unlimited rides, download local transit app", review: "Cheapest option, can be crowded", rating: 3.5 },
    "mid-range": { name: "Express/Intercity Bus", price: "$15-30/trip", tip: "FlixBus or regional carriers, book online for discounts", review: "Reliable, WiFi on most routes", rating: 4.0 },
    luxury: { name: "Private Coach Transfer", price: "$80-150/trip", tip: "Door-to-door service, WiFi and refreshments included", review: "Stress-free travel, premium comfort", rating: 4.7 },
  },
  train: {
    budget: { name: "Regional/Slow Trains", price: "$10-25/trip", tip: "Book in advance, consider rail passes for multiple trips", review: "Scenic routes, sometimes delayed", rating: 3.7 },
    "mid-range": { name: "High-Speed Rail", price: "$40-80/trip", tip: "First class available, reserve seats for peak times", review: "Fast and efficient, great views", rating: 4.4 },
    luxury: { name: "First Class/Private Cabin", price: "$100-250/trip", tip: "Lounge access, meal service, priority boarding", review: "Ultimate train experience, worth every penny", rating: 4.9 },
  },
  flight: {
    budget: { name: "Low-Cost Carriers", price: "$50-150/flight", tip: "Pack light, book early, consider nearby airports", review: "No frills but gets you there", rating: 3.4 },
    "mid-range": { name: "Full-Service Airlines", price: "$200-400/flight", tip: "Baggage included, seat selection, meals on long flights", review: "Comfortable, reliable service", rating: 4.3 },
    luxury: { name: "Business/First Class", price: "$500-1500/flight", tip: "Lounge access, lie-flat seats, priority everything", review: "Arrive refreshed, exceptional service", rating: 4.9 },
  },
};

export const getTransportInfo = (transport: TransportMode, budget: BudgetLevel): TransportInfo =>
  transportData[transport][budget];

// ─── Hotels ──────────────────────────────────────────────────
export interface HotelInfo {
  name: string;
  price: string;
  rating: string;
  features: string;
  type: "hotel" | "hostel" | "resort" | "boutique" | "airbnb";
}

const hotelData: Record<BudgetLevel, Record<TravelerType, HotelInfo[]>> = {
  budget: {
    tourist: [
      { name: "Hostel / Budget Inn", price: "$20-40/night", rating: "⭐⭐⭐", features: "Shared spaces, social atmosphere, basic amenities", type: "hostel" },
      { name: "Budget Airbnb Room", price: "$25-45/night", rating: "⭐⭐⭐", features: "Local neighborhood, kitchen access, authentic experience", type: "airbnb" },
    ],
    business: [
      { name: "Business Budget Hotel", price: "$40-60/night", rating: "⭐⭐⭐", features: "WiFi, desk space, near transit", type: "hotel" },
    ],
    family: [
      { name: "Family Budget Motel", price: "$50-70/night", rating: "⭐⭐⭐", features: "Family rooms, parking, basic kitchen", type: "hotel" },
      { name: "Family Airbnb Apartment", price: "$55-80/night", rating: "⭐⭐⭐", features: "Full kitchen, washer, kid-friendly", type: "airbnb" },
    ],
    backpacker: [
      { name: "Backpacker Hostel", price: "$15-30/night", rating: "⭐⭐", features: "Dorm beds, communal kitchen, travel tips", type: "hostel" },
    ],
    friend: [
      { name: "Shared Hostel Room", price: "$20-35/night", rating: "⭐⭐⭐", features: "Social vibe, group discounts, pub crawl events", type: "hostel" },
      { name: "Group Airbnb", price: "$15-25/person", rating: "⭐⭐⭐", features: "Split costs, common area, self-catering", type: "airbnb" },
    ],
  },
  "mid-range": {
    tourist: [
      { name: "Boutique Hotel", price: "$80-150/night", rating: "⭐⭐⭐⭐", features: "Unique design, central location, breakfast included", type: "boutique" },
      { name: "Airbnb Entire Home", price: "$90-160/night", rating: "⭐⭐⭐⭐", features: "Full privacy, local vibe, self-catering", type: "airbnb" },
    ],
    business: [
      { name: "Business Class Hotel", price: "$120-200/night", rating: "⭐⭐⭐⭐", features: "Meeting rooms, express checkout, airport shuttle", type: "hotel" },
    ],
    family: [
      { name: "Family Resort Hotel", price: "$100-180/night", rating: "⭐⭐⭐⭐", features: "Kids club, pool, family suites, activities", type: "resort" },
    ],
    backpacker: [
      { name: "Private Room Hostel", price: "$50-80/night", rating: "⭐⭐⭐⭐", features: "Private bath, social areas, tours desk", type: "hostel" },
    ],
    friend: [
      { name: "Boutique Group Stay", price: "$60-100/night", rating: "⭐⭐⭐⭐", features: "Fun common areas, bar on-site, group activities", type: "boutique" },
      { name: "Airbnb Large Flat", price: "$40-70/person", rating: "⭐⭐⭐⭐", features: "Multiple rooms, central location, great for groups", type: "airbnb" },
    ],
  },
  luxury: {
    tourist: [
      { name: "5-Star Luxury Hotel", price: "$300-600/night", rating: "⭐⭐⭐⭐⭐", features: "Spa, fine dining, concierge, stunning views", type: "hotel" },
      { name: "Luxury Airbnb Villa", price: "$350-700/night", rating: "⭐⭐⭐⭐⭐", features: "Private pool, chef service, panoramic views", type: "airbnb" },
    ],
    business: [
      { name: "Executive Suite Hotel", price: "$350-700/night", rating: "⭐⭐⭐⭐⭐", features: "Club lounge, chauffeur service, boardroom access", type: "hotel" },
    ],
    family: [
      { name: "Luxury Family Resort", price: "$400-900/night", rating: "⭐⭐⭐⭐⭐", features: "Villa suites, nanny service, private beach, kids programs", type: "resort" },
    ],
    backpacker: [
      { name: "Luxury Boutique Stay", price: "$200-400/night", rating: "⭐⭐⭐⭐⭐", features: "Unique experience, rooftop bar, design forward", type: "boutique" },
    ],
    friend: [
      { name: "Luxury Villa Group", price: "$150-300/person", rating: "⭐⭐⭐⭐⭐", features: "Private pool, party-friendly, concierge, chef option", type: "airbnb" },
      { name: "Premium Boutique Hotel", price: "$250-500/night", rating: "⭐⭐⭐⭐⭐", features: "Rooftop lounge, spa, nightlife district location", type: "boutique" },
    ],
  },
};

export const getHotelInfo = (budget: BudgetLevel, travelerType: TravelerType): HotelInfo[] =>
  hotelData[budget][travelerType];

// ─── Food / Restaurants ──────────────────────────────────────
export interface FoodInfo {
  type: string;
  price: string;
  tip: string;
  distance: string;
}

const foodData: Record<BudgetLevel, FoodInfo[]> = {
  budget: [
    { type: "Street Food Stalls", price: "$2-5/meal", tip: "Look for busy stalls with high turnover", distance: "< 0.5 km" },
    { type: "Local Markets", price: "$5-10/meal", tip: "Fresh produce, authentic flavors, great for picnics", distance: "< 1 km" },
    { type: "Fast Casual", price: "$8-12/meal", tip: "Quick and affordable, local chains often better", distance: "< 0.3 km" },
  ],
  "mid-range": [
    { type: "Casual Dining", price: "$15-30/meal", tip: "Reservations recommended for popular spots", distance: "< 1 km" },
    { type: "Bistros & Trattorias", price: "$20-40/meal", tip: "Set lunch menus offer great value", distance: "< 1.5 km" },
    { type: "Food Halls", price: "$15-25/meal", tip: "Variety of cuisines under one roof", distance: "< 0.5 km" },
  ],
  luxury: [
    { type: "Fine Dining", price: "$80-200/meal", tip: "Book weeks ahead, dress code applies", distance: "< 2 km" },
    { type: "Michelin Starred", price: "$150-400/meal", tip: "Tasting menus, wine pairings, unforgettable", distance: "< 3 km" },
    { type: "Chef's Table", price: "$200-500/meal", tip: "Exclusive experience, limited seats", distance: "Varies" },
  ],
};

export const getFoodInfo = (budget: BudgetLevel): FoodInfo[] => foodData[budget];

// ─── Attractions & Landmarks ────────────────────────────────
export interface AttractionInfo {
  name: string;
  type: "attraction" | "landmark";
  entryFee: string;
  duration: string;
  bestFor: TravelerType[];
}

export const getAttractions = (destination: string): AttractionInfo[] => [
  { name: `${destination} Historic Center`, type: "landmark", entryFee: "Free", duration: "2-3 hrs", bestFor: ["tourist", "backpacker", "family", "friend"] },
  { name: `${destination} National Museum`, type: "attraction", entryFee: "$10-20", duration: "2-4 hrs", bestFor: ["tourist", "family", "friend"] },
  { name: `${destination} Observation Deck`, type: "landmark", entryFee: "$15-30", duration: "1-2 hrs", bestFor: ["tourist", "family", "business", "friend"] },
  { name: `${destination} Cultural Quarter`, type: "attraction", entryFee: "Free", duration: "3-4 hrs", bestFor: ["tourist", "backpacker", "friend"] },
  { name: `${destination} Botanical Gardens`, type: "attraction", entryFee: "$5-10", duration: "1-2 hrs", bestFor: ["tourist", "family"] },
  { name: `${destination} Grand Cathedral`, type: "landmark", entryFee: "Free - $8", duration: "1 hr", bestFor: ["tourist", "backpacker", "family"] },
  { name: `${destination} Nightlife District`, type: "attraction", entryFee: "Free", duration: "3-5 hrs", bestFor: ["friend", "backpacker"] },
  { name: `${destination} Adventure Park`, type: "attraction", entryFee: "$20-40", duration: "4-6 hrs", bestFor: ["friend", "family"] },
];

// ─── Place Highlights ────────────────────────────────────────
export const getPlaceHighlights = (destination: string): string[] => [
  `${destination} is known for its vibrant local culture and warm hospitality`,
  `The city offers a unique blend of traditional architecture and modern innovation`,
  `Famous for its world-class cuisine scene with options for every budget`,
  `Rich historical significance with UNESCO World Heritage connections`,
  `Excellent public transport network connecting all major attractions`,
  `Year-round events and festivals celebrating local traditions`,
];

// ─── Total Package / Budget Summary ─────────────────────────
export interface BudgetSummary {
  accommodation: string;
  transport: string;
  food: string;
  activities: string;
  total: string;
}

export const getBudgetSummary = (budget: BudgetLevel, days: number): BudgetSummary => {
  const perDay: Record<BudgetLevel, { accom: number; transport: number; food: number; activities: number }> = {
    budget: { accom: 35, transport: 15, food: 20, activities: 10 },
    "mid-range": { accom: 120, transport: 50, food: 60, activities: 30 },
    luxury: { accom: 450, transport: 150, food: 200, activities: 80 },
  };

  const d = perDay[budget];
  return {
    accommodation: `$${d.accom * days}`,
    transport: `$${d.transport * days}`,
    food: `$${d.food * days}`,
    activities: `$${d.activities * days}`,
    total: `$${(d.accom + d.transport + d.food + d.activities) * days}`,
  };
};

// ─── App Links ───────────────────────────────────────────────
export interface AppLink {
  name: string;
  url: string;
  icon: string;
  description: string;
}

export const getAppLinks = (destination: string): AppLink[] => [
  { name: "Skyscanner", url: `https://www.skyscanner.com/transport/flights/anywhere/${encodeURIComponent(destination)}`, icon: "✈️", description: "Compare flight prices across airlines" },
  { name: "Airbnb", url: `https://www.airbnb.com/s/${encodeURIComponent(destination)}`, icon: "🏠", description: "Unique stays & local experiences" },
  { name: "MakeMyTrip", url: `https://www.makemytrip.com/`, icon: "🧳", description: "Flights, hotels & holiday packages" },
];

// ─── Travel Timing ───────────────────────────────────────────
export interface TravelTiming {
  bestTime: string;
  peakSeason: string;
  offSeason: string;
  suggestedStart: string;
  suggestedEnd: string;
  checkIn: string;
  checkOut: string;
}

export const getTravelTiming = (): TravelTiming => ({
  bestTime: "March - May & September - November",
  peakSeason: "June - August (crowded, higher prices)",
  offSeason: "December - February (fewer tourists, deals available)",
  suggestedStart: "8:00 AM - Start sightseeing early",
  suggestedEnd: "10:00 PM - Return to hotel",
  checkIn: "2:00 PM (standard) / 12:00 PM (early, request ahead)",
  checkOut: "11:00 AM (standard) / 1:00 PM (late, subject to availability)",
});

// ─── Day Activities (non-repeating) ──────────────────────────
export const morningActivities = [
  ["🥐 Traditional breakfast at a local café", "📸 Walking tour of historic district", "🏛️ Visit the main cultural landmark"],
  ["🧘 Sunrise yoga at scenic viewpoint", "🍳 Brunch at a trendy local spot", "🎨 Explore local art galleries"],
  ["🚶 Early morning market exploration", "☕ Coffee tasting at artisan roaster", "🏰 Guided tour of ancient sites"],
  ["🌅 Watch sunrise from famous viewpoint", "🥞 Breakfast with panoramic views", "🌿 Stroll through botanical gardens"],
  ["🚴 Morning bike tour of the city", "🥯 Local bakery experience", "📚 Visit historic library or museum"],
  ["🏊 Morning swim at natural pool or beach", "🍽️ Beachside breakfast", "🐚 Coastal path exploration"],
  ["🎭 Morning theater or cultural show", "🍜 Traditional cuisine cooking class", "🛍️ Artisan craft workshop"],
];

export const afternoonActivities = [
  ["🍝 Lunch at recommended restaurant", "🚶 Explore vibrant neighborhoods", "🎭 Catch a local performance"],
  ["🍣 Food tour through culinary district", "🏞️ Visit scenic overlook point", "📷 Photography walk in old town"],
  ["🥗 Farm-to-table lunch experience", "🚡 Cable car or scenic transport ride", "🏺 Museum of local history"],
  ["🌮 Street food adventure", "🌳 Relax in famous city park", "🎪 Local festival or market visit"],
  ["🍕 Hidden gem restaurant discovery", "⛵ Harbor or waterfront exploration", "🎨 Contemporary art museum"],
  ["🥘 Traditional lunch with locals", "🏔️ Scenic nature hike", "🍷 Wine or tea tasting session"],
  ["🍱 Picnic at scenic location", "🎢 Adventure activity experience", "🛒 Shopping in local boutiques"],
];

export const eveningActivities = [
  ["🌆 Sunset from iconic viewpoint", "🍷 Wine bar experience", "🌃 Fine dining at top restaurant"],
  ["🎵 Live music at local venue", "🍸 Craft cocktail bar visit", "🌙 Night market exploration"],
  ["🎭 Evening theater or show", "🍾 Rooftop bar with city views", "🌉 Illuminated landmark tour"],
  ["🎪 Cultural night show", "🍻 Local brewery tour", "🌌 Stargazing experience"],
  ["🎸 Underground music venue", "🥂 Champagne tasting", "🏮 Lantern-lit dinner cruise"],
  ["💃 Dance or cultural performance", "🍹 Sunset drinks", "🌠 Night photography walk"],
  ["🎬 Open-air cinema or event", "🍴 Chef's table experience", "🎆 City lights observation"],
];
