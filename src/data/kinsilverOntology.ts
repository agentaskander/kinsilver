export type GateStatus = "blocked" | "pending" | "approved";
export type RoutePath =
  | "/"
  | "/story"
  | "/products"
  | "/personalization"
  | "/quality"
  | "/occasions"
  | "/journal"
  | "/faq"
  | "/waitlist";

export type BrandOntology = {
  name: string;
  meaning: string;
  mission: string;
  positioning: string;
  primaryLine: string;
  taglines: string[];
  homepageHero: string;
  homepageSubhead: string;
  tone: string[];
  emotionalThemes: string[];
  symbolism: string[];
  narrativeLanguage: string[];
  brandValues: string[];
  typography: {
    serif: string;
    sans: string;
  };
  palette: Record<string, string>;
  comingSoonMode: boolean;
  checkoutEnabled: boolean;
};

export const brand: BrandOntology = {
  name: "kinSilver",
  meaning: "Kin first. Silver second.",
  mission:
    "To help families give a first keepsake that carries memory, meaning, and continuity long after infancy.",
  positioning: "A US-first premium heirloom gifting brand, inspired by silver heritage and built around family memory.",
  primaryLine: "The beginning of an heirloom.",
  taglines: ["The beginning of an heirloom.", "Kin first. Silver second."],
  homepageHero: "Sterling silver memories for a brand new life.",
  homepageSubhead: "Personalized heirloom baby gifts crafted to be kept for generations.",
  tone: ["heirloom", "emotional", "understated", "premium", "timeless", "family-centered"],
  emotionalThemes: ["arrival", "lineage", "blessing", "memory", "continuity", "belonging"],
  symbolism: ["first spoon", "first table", "engraved name", "family archive", "gift box kept in a drawer"],
  narrativeLanguage: [
    "given at the beginning",
    "kept after the nursery years",
    "a small object with a long life",
    "made for the family record"
  ],
  brandValues: ["honest materials", "quiet beauty", "careful gifting", "supplier transparency", "lasting use"],
  typography: {
    serif: "Cormorant Garamond",
    sans: "Jost"
  },
  palette: {
    midnightInk: "#1a1510",
    warmGold: "#b8965a",
    silverwareGrey: "#9fa8a3",
    agedCream: "#f8f4ee",
    warmBrown: "#4a443c"
  },
  comingSoonMode: true,
  checkoutEnabled: false
};

export const routes: Array<{ path: RoutePath; label: string; title: string; description: string }> = [
  {
    path: "/",
    label: "Home",
    title: "kinSilver | Personalized Silver-Plated Baby Heirlooms",
    description: "Personalized silver-plated baby spoons and keepsake gift sets for premium heirloom gifting."
  },
  {
    path: "/story",
    label: "Story",
    title: "The kinSilver Story | Kin First. Silver Second.",
    description: "The emotional origin and US-first heirloom gifting vision behind kinSilver."
  },
  {
    path: "/products",
    label: "Products",
    title: "kinSilver Product Architecture | First Collection",
    description: "Future-ready product tiers for personalized silver-plated baby spoons and keepsake gift sets."
  },
  {
    path: "/personalization",
    label: "Personalization",
    title: "Personalized Baby Spoon Engraving | kinSilver",
    description: "Engraving examples for names, initials, dates, and personal keepsake messages."
  },
  {
    path: "/quality",
    label: "Quality",
    title: "Silver-Plated to Heirloom Standard | kinSilver Quality",
    description: ".999 fine silver over lead-free brass, 20 micron target plating, nickel-free and food-safe standards."
  },
  {
    path: "/occasions",
    label: "Occasions",
    title: "Baby Shower, Newborn & Godparent Gifts | kinSilver",
    description: "Premium keepsake gift ideas for baby showers, newborn arrivals, godparents, and first birthdays."
  },
  {
    path: "/journal",
    label: "Journal",
    title: "kinSilver Journal | Heirloom Baby Gift Guides",
    description: "Editorial guides to silver baby spoons, keepsake gifting, and family heirloom traditions."
  },
  {
    path: "/faq",
    label: "FAQ",
    title: "kinSilver FAQ | Materials, Engraving & Launch",
    description: "Answers about silver-plated materials, food-safe standards, engraving, and first collection timing."
  },
  {
    path: "/waitlist",
    label: "Waitlist",
    title: "Join the kinSilver First Collection Waitlist",
    description: "Get early access to kinSilver personalized heirloom baby gifts before inventory scales."
  }
];

export const products = [
  {
    id: "spoon",
    name: "Personalized silver-plated baby spoon",
    shortName: "The First Spoon",
    status: "first-collection",
    priceUsd: "$55-65",
    priceGbp: "£45-55",
    summary: "The entry heirloom: a personalized silver-plated baby spoon presented in a keepsake gift box.",
    description:
      "A personalized baby spoon silver-plated to heirloom standard with .999 fine silver over a lead-free brass core.",
    plating: ".999 fine silver plating, minimum 20 microns",
    materials: [".999 fine silver plating", "lead-free brass core", "zero nickel finish"],
    engraving: ["first name", "initials", "birth date", "short dedication"],
    packaging: "Aged cream keepsake gift box with warm gold paper and care card.",
    safety: ["food-safe supplier certification required", "nickel-free requirement", "smooth infant-use finish"],
    personalization: "Smooth handle prepared for precise laser engraving.",
    useOccasions: ["baby-shower", "newborn-arrival", "godparent-gift", "first-birthday"]
  },
  {
    id: "spoon-fork-set",
    name: "Personalized spoon + fork gift set",
    shortName: "The First Set",
    status: "planned",
    priceUsd: "$85-100",
    priceGbp: "£70-85",
    summary: "A paired keepsake set for a fuller premium baby gift.",
    description:
      "A coordinated spoon and fork set using honest silver-plated materials and restrained personalization.",
    plating: ".999 fine silver plating, minimum 20 microns",
    materials: [".999 fine silver plating", "lead-free brass core", "zero nickel finish"],
    engraving: ["matching monogram", "name and date", "giver initials"],
    packaging: "Two-piece presentation box with archival card insert.",
    safety: ["food-safe supplier certification required", "nickel-free requirement"],
    personalization: "Coordinated engraving across both pieces.",
    useOccasions: ["newborn-arrival", "christening", "naming-ceremony", "first-birthday"]
  },
  {
    id: "keepsake-set",
    name: "Baby keepsake gift set",
    shortName: "The Keepsake Set",
    status: "future",
    priceUsd: "$120-150",
    summary: "A premium boxed set pairing the first spoon with a personalized keepsake card and future companion object.",
    description: "A future premium keepsake set for registry and grandparent gifting.",
    plating: ".999 fine silver plating where applicable",
    materials: ["silver-plated keepsake object", "archival paper", "premium rigid box"],
    engraving: ["family name", "baby name", "date of arrival"],
    packaging: "Registry-ready presentation packaging.",
    safety: ["supplier certification required for any food-contact object"],
    personalization: "Designed for gift registry and grandparent gifting.",
    useOccasions: ["baby-shower", "newborn-arrival"]
  },
  {
    id: "argentium-line",
    name: "Future Argentium silver line",
    shortName: "The Argentium Line",
    status: "future-premium",
    priceUsd: "$150-200",
    priceGbp: "£120-160",
    summary: "A future premium collection for customers seeking a solid silver option.",
    description: "A future premium Argentium line, separate from the silver-plated first collection.",
    plating: "Not plated; future solid Argentium product line only after sourcing validation.",
    materials: ["Argentium silver"],
    engraving: ["family crest", "monogram", "christening date"],
    packaging: "Premium ceremony-ready presentation.",
    safety: ["separate supplier verification required"],
    personalization: "Designed for formal heirloom gifting.",
    useOccasions: ["christening", "baptism", "godparent-gift"]
  }
] as const;

export const customerPersonas = [
  {
    id: "grandmother",
    name: "Grandmother",
    motivation: "Wants a meaningful first gift that feels worthy of becoming part of the family archive.",
    emotionalTriggers: ["continuity", "legacy", "a name engraved forever"],
    priceTolerance: "$65-150",
    giftingOccasions: ["baby-shower", "newborn-arrival", "first-birthday"],
    likelyChannels: ["Google search", "Pinterest", "family recommendations"]
  },
  {
    id: "godparent",
    name: "Godparent",
    motivation: "Needs a serious, beautiful gift that says presence and commitment without feeling overly formal.",
    emotionalTriggers: ["honor", "promise", "belonging"],
    priceTolerance: "$85-200",
    giftingOccasions: ["godparent-gift", "christening", "baptism", "naming-ceremony"],
    likelyChannels: ["Google search", "Instagram", "gift guides"]
  },
  {
    id: "baby-shower-attendee",
    name: "Baby shower attendee",
    motivation: "Wants to stand apart from registry basics with a personalized gift the parents will keep.",
    emotionalTriggers: ["surprise", "thoughtfulness", "personalization"],
    priceTolerance: "$55-100",
    giftingOccasions: ["baby-shower"],
    likelyChannels: ["Google search", "TikTok search", "Pinterest"]
  },
  {
    id: "premium-gift-buyer",
    name: "Premium gift buyer",
    motivation: "Buys fewer gifts, but wants each one to feel elevated, tasteful, and complete.",
    emotionalTriggers: ["taste", "presentation", "quality signals"],
    priceTolerance: "$100-200",
    giftingOccasions: ["newborn-arrival", "first-birthday", "baby-shower"],
    likelyChannels: ["editorial gift guides", "Instagram", "Google Shopping later"]
  },
  {
    id: "sentimental-parent",
    name: "Sentimental parent",
    motivation: "Wants the baby's earliest objects to have a story, not just utility.",
    emotionalTriggers: ["firsts", "memory", "family identity"],
    priceTolerance: "$55-120",
    giftingOccasions: ["newborn-arrival", "naming-ceremony"],
    likelyChannels: ["Pinterest", "Instagram", "organic search"]
  },
  {
    id: "luxury-keepsake-buyer",
    name: "Luxury keepsake buyer",
    motivation: "Looks for understated, heirloom-quality objects with polished packaging and honest materials.",
    emotionalTriggers: ["scarcity", "craft", "permanence"],
    priceTolerance: "$150-300",
    giftingOccasions: ["christening", "baptism", "first-birthday"],
    likelyChannels: ["luxury gift guides", "Google search", "registry partnerships"]
  }
] as const;

export const occasions = [
  {
    id: "baby-shower",
    name: "Baby shower",
    headline: "A gift parents will still have after the registry items are outgrown.",
    intent: "standout personalized keepsake",
    priority: "primary US launch occasion"
  },
  {
    id: "newborn-arrival",
    name: "Newborn arrival",
    headline: "A first keepsake for the first weeks of family life.",
    intent: "welcome gift",
    priority: "primary"
  },
  {
    id: "godparent-gift",
    name: "Godparent gift",
    headline: "A small object with a serious promise behind it.",
    intent: "symbolic commitment",
    priority: "primary"
  },
  {
    id: "christening",
    name: "Christening",
    headline: "A silver heritage gift with modern material transparency.",
    intent: "ceremonial keepsake",
    priority: "secondary"
  },
  {
    id: "baptism",
    name: "Baptism",
    headline: "A personal keepsake for a meaningful family day.",
    intent: "ceremonial keepsake",
    priority: "secondary"
  },
  {
    id: "first-birthday",
    name: "First birthday",
    headline: "A keepsake for the first year, engraved for the years after.",
    intent: "milestone gift",
    priority: "primary"
  },
  {
    id: "naming-ceremony",
    name: "Naming ceremony",
    headline: "A named gift for the day a family gathers around identity.",
    intent: "name-led keepsake",
    priority: "secondary"
  }
] as const;

export const seoOntology = {
  keywords: [
    "personalized baby spoon",
    "engraved baby spoon",
    "heirloom baby gift",
    "silver baby spoon",
    "luxury baby keepsake",
    "baby shower heirloom gift",
    "newborn keepsake gift",
    "engraved christening spoon",
    "personalized newborn gift"
  ],
  metadata: routes.map((route) => ({
    path: route.path,
    title: route.title,
    description: route.description
  })),
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "kinSilver",
    slogan: "The beginning of an heirloom.",
    description: "Personalized silver-plated baby spoons and keepsake gift sets for premium baby gifting.",
    makesOffer: {
      "@type": "OfferCatalog",
      name: "kinSilver First Collection",
      itemListElement: [
        {
          "@type": "Product",
          name: "Personalized silver-plated baby spoon",
          material: ".999 fine silver plating over lead-free brass",
          category: "Personalized baby keepsake"
        }
      ]
    }
  },
  semanticHeadingMap: [
    "H1: route-specific emotional promise",
    "H2: occasion, quality, personalization, story pillars",
    "H3: product, persona, and article cards"
  ],
  articleRelationships: [
    "tradition articles link to quality and personalization",
    "baby shower articles link to waitlist and occasions",
    "keepsake articles link to products and story"
  ]
} as const;

export const qualityOntology = {
  brassCore: "Lead-free brass core",
  silverPlating: ".999 fine silver plating",
  minimumMicrons: 20,
  nickelFree: true,
  infantSafe: "Products are sourced only from suppliers meeting our safety requirements.",
  engravingReady: "Smooth handle reserved for laser engraving",
  packagingStandards: [
    "rigid keepsake gift box",
    "aged cream and warm gold presentation",
    "care and material transparency card",
    "shipping protection suitable for gifting"
  ],
  supplierVerification: [
    "brass base confirmed",
    "20 micron .999 silver plating verified",
    "food safety documentation received",
    "zero nickel confirmed",
    "samples shipped, engraved, and approved",
    "landed unit cost under $15"
  ]
} as const;

export const supplierOntology = {
  checkoutGate: "blocked" as GateStatus,
  suppliers: [
    {
      id: "supplier-a",
      name: "Supplier A",
      outreachStatus: "shortlist",
      moq: "TBD",
      certification: "requested",
      sampleStatus: "not ordered",
      platingVerification: "pending",
      landedCost: "pending",
      shippingSpeed: "pending",
      riskScore: 72
    },
    {
      id: "supplier-b",
      name: "Supplier B",
      outreachStatus: "research",
      moq: "TBD",
      certification: "not requested",
      sampleStatus: "not ordered",
      platingVerification: "pending",
      landedCost: "pending",
      shippingSpeed: "pending",
      riskScore: 80
    }
  ],
  launchGate: qualityOntology.supplierVerification
} as const;

export const supplierRequirements = supplierOntology.launchGate.map((label, index) => ({
  id: `supplier-gate-${index + 1}`,
  label,
  status: "pending" as GateStatus
}));

export const futureCollections = [
  "silver photo frames",
  "keepsake boxes",
  "baby cups",
  "heirloom utensils",
  "baptism collections",
  "family crest engraving",
  "luxury registry gifting",
  "monogram collections"
] as const;

export const journalArticles = [
  {
    slug: "why-silver-baby-spoons-became-heirlooms",
    title: "Why silver baby spoons became heirlooms",
    description: "A quiet look at why families kept silver baby spoons and how modern keepsakes can honor the tradition.",
    keywords: ["silver baby spoon", "heirloom baby gift"],
    relatedRoutes: ["/quality", "/story"] as RoutePath[],
    excerpt:
      "A silver baby spoon was never only about feeding. It marked arrival, care, and the hope that a child would inherit more than objects.",
    body: [
      "The silver spoon tradition lasted because it gave families a way to hold a beginning. Small enough to fit in a drawer and formal enough to feel important, the spoon became a record of a name, a date, and the people who gathered around a new life.",
      "For modern families, the value is not in pretending every object must be old or rare. The value is in choosing something personal, durable, and specific enough to be remembered.",
      "kinSilver carries that tradition forward with silver-plated pieces that state their materials clearly: .999 fine silver over lead-free brass, crafted for lasting keepsake use."
    ]
  },
  {
    slug: "baby-shower-gifts-that-last-a-lifetime",
    title: "Baby shower gifts that last a lifetime",
    description: "How to choose a baby shower gift that feels personal long after the practical gifts are outgrown.",
    keywords: ["baby shower heirloom gift", "personalized newborn gift"],
    relatedRoutes: ["/occasions", "/waitlist"] as RoutePath[],
    excerpt:
      "The most remembered shower gifts are rarely the loudest. They are the ones that become part of the family's story.",
    body: [
      "A baby shower often produces the necessary things: blankets, bottles, swaddles, and tiny clothes. Those gifts matter, but many are used quickly and passed on.",
      "A lasting baby shower gift does something different. It names the moment. It gives parents a physical reminder of who welcomed the child and how loved the arrival already was.",
      "An engraved silver-plated baby spoon works because it is intimate, compact, and ceremonial without becoming impractical."
    ]
  },
  {
    slug: "meaning-behind-the-silver-spoon-tradition",
    title: "The meaning behind the silver spoon tradition",
    description: "The symbolism of silver spoons as family gifts, reinterpreted for modern heirloom gifting.",
    keywords: ["silver baby spoon", "engraved christening spoon"],
    relatedRoutes: ["/story", "/personalization"] as RoutePath[],
    excerpt:
      "The phrase may be famous, but the object itself has a gentler meaning: welcome, care, and continuity.",
    body: [
      "Silver has long carried ceremonial weight because it catches light, ages with use, and feels different from ordinary household objects.",
      "A baby spoon adds scale and tenderness to that symbolism. It is small, personal, and tied to firsts: first meals, first celebrations, first family stories.",
      "Modern silver gifting is strongest when it is honest. A silver-plated keepsake should say it is silver-plated, and then let engraving carry the emotional value."
    ]
  },
  {
    slug: "personalized-baby-gifts-worth-keeping",
    title: "Personalized baby gifts worth keeping",
    description: "What separates a keepsake from a novelty when choosing personalized baby gifts.",
    keywords: ["personalized baby spoon", "personalized newborn gift"],
    relatedRoutes: ["/personalization", "/products"] as RoutePath[],
    excerpt:
      "Personalization lasts when it feels restrained, legible, and connected to a real family moment.",
    body: [
      "A personalized baby gift can become precious or disposable depending on restraint. The best examples do not shout. They mark the name, the date, or the relationship clearly.",
      "Materials matter because keepsakes are handled, moved, stored, and rediscovered. Packaging matters because the first presentation often becomes part of the memory.",
      "A smooth engraved handle gives the personalization room to breathe, which is why kinSilver begins with a spoon designed around the name."
    ]
  },
  {
    slug: "heirloom-gifts-for-newborns",
    title: "Heirloom gifts for newborns",
    description: "A guide to newborn gifts made for memory, symbolism, and family continuity.",
    keywords: ["heirloom baby gift", "newborn keepsake gift"],
    relatedRoutes: ["/occasions", "/story"] as RoutePath[],
    excerpt:
      "A newborn heirloom should feel intimate now and understandable decades later.",
    body: [
      "The best newborn heirlooms are not complicated. They are clear, beautiful, and anchored to the child's arrival.",
      "A name, date, and giver can turn a small object into a family reference point. The gift becomes less about possession and more about remembering who was there at the beginning.",
      "That is why kinSilver treats the spoon as an entry point into a larger language of family keepsakes."
    ]
  },
  {
    slug: "what-makes-a-keepsake-actually-last",
    title: "What makes a keepsake actually last",
    description: "The practical and emotional qualities that help a baby keepsake survive time, moves, and changing taste.",
    keywords: ["luxury baby keepsake", "heirloom baby gift"],
    relatedRoutes: ["/quality", "/products"] as RoutePath[],
    excerpt:
      "A keepsake lasts when material, story, size, and presentation work together.",
    body: [
      "Keepsakes survive for practical reasons as much as sentimental ones. They need to be easy to store, pleasant to hold, and specific enough that future family members understand why they mattered.",
      "Overly themed gifts can date quickly. Loud personalization can feel temporary. Understated engraving and quiet materials tend to age better.",
      "kinSilver builds around that balance: premium presentation, honest silver-plated materials, and a story centered on family continuity."
    ]
  }
] as const;

export const faq = [
  {
    question: "Is kinSilver solid sterling silver?",
    answer:
      "The first collection is not solid sterling. It is silver-plated to heirloom standard: .999 fine silver over a lead-free brass core."
  },
  {
    question: "Is the spoon food-safe?",
    answer:
      "The product is designed around food-safe infant use, but checkout remains disabled until supplier food-safety certification is received and approved."
  },
  {
    question: "When will the first collection launch?",
    answer:
      "kinSilver is currently in first collection mode. The waitlist is open while supplier confirmation, sample approval, plating verification, and landed cost validation are completed."
  },
  {
    question: "What can be engraved?",
    answer:
      "Names, initials, dates, short dedications, and future monogram formats are planned for the smooth spoon handle."
  },
  {
    question: "Is this mainly a christening gift?",
    answer:
      "No. kinSilver is US-first and designed for baby showers, newborn arrivals, grandparents, godparents, first birthdays, and family keepsake gifting. Christening and baptism remain supported occasions, but they are not the whole brand."
  }
] as const;

export const launchActions = [
  "Validate US demand through waitlist conversion and article-led search traffic",
  "Shortlist suppliers able to document lead-free brass and .999 fine silver plating",
  "Request food safety, nickel-free, and 20 micron plating documentation",
  "Order engraved samples from at least two suppliers",
  "Approve plating, finish, engraving, packaging, and infant-use smoothness",
  "Confirm landed cost under $15 for the entry spoon",
  "Prepare Shopify product objects without enabling checkout until the gate is approved"
] as const;

export const kinsilverOntology = {
  brand,
  routes,
  products,
  customerPersonas,
  occasions,
  seoOntology,
  qualityOntology,
  supplierOntology,
  futureCollections,
  journalArticles,
  faq,
  launchActions
} as const;
