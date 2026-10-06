export type ProjectStatus = "ongoing" | "completed";

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  /** Self-hosted video, e.g. `/projects/videos/oshodi.mp4`. */
  | { type: "video"; src: string; title: string; poster?: string }
  /** YouTube video ID, e.g. the `abc123` in `youtube.com/watch?v=abc123`. */
  | { type: "youtube"; id: string; title: string };

export type ProjectHighlight = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  category: string;
  /** Cover photo used on cards, the gallery, and as the first carousel slide. */
  image: string;
  /** One or two sentences for project cards. */
  summary: string;
  /** Detail page write-up, one string per paragraph. */
  description: string[];
  highlights: ProjectHighlight[];
  scope: string[];
  /** Extra photos and videos shown after the cover photo in the detail carousel. */
  media?: ProjectMedia[];
  /** Team member slug for the on-site facility manager, if they have a profile. */
  managerSlug?: string;
};

export const projectStatusLabel: Record<ProjectStatus, string> = {
  ongoing: "Ongoing",
  completed: "Completed",
};

const terminalScope = [
  "Janitorial and cleaning services",
  "Passenger area and concourse upkeep",
  "Waste collection and handling",
  "Restroom and shared facility hygiene",
  "Daily service quality supervision",
];

const buildingScope = [
  "Office cleaning and janitorial services",
  "Common area and reception upkeep",
  "Waste handling",
  "Day-to-day facility support",
];

const allProjects: Project[] = [
  {
    slug: "ikeja-bus-terminal",
    name: "Ikeja Bus Terminal",
    location: "Lagos",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/55.png",
    summary:
      "Janitorial and facility support across approximately 11,468 square metres of one of Lagos's key mainland transport hubs.",
    description: [
      "Ikeja Bus Terminal is one of the main public transport hubs on the Lagos Mainland, connecting commuters to routes across the city every day. FixIt has managed janitorial services at the terminal since it first commenced operations.",
      "Our teams look after approximately 11,468 square metres of passenger areas, concourses and shared facilities, keeping the terminal clean, presentable and ready for continuous public use from the first departure of the day to the last.",
    ],
    highlights: [
      { label: "Area covered", value: "≈11,468 m²" },
      { label: "Engagement", value: "Since first operations" },
    ],
    scope: terminalScope,
  },
  {
    slug: "oshodi-bus-terminal",
    name: "Oshodi Bus Terminal",
    location: "Lagos",
    status: "ongoing",
    category: "Transport interchange",
    image: "/brand/52.png",
    summary:
      "End-to-end facility support for the Oshodi Transport Interchange, one of Nigeria's busiest transit hubs, serving over 25,000 commuters daily.",
    description: [
      "Located in the heart of Lagos, the Oshodi Transport Interchange is one of Nigeria's largest and busiest transit hubs. The multi-storey facility comprises three major terminals and serves over 25,000 commuters every day.",
      "FixIt provides end-to-end facility support across the interchange, from cleaning and waste handling to the operational upkeep of concourses, walkways and passenger areas. A uniformed on-site team keeps this high-volume, multi-storey environment safe, clean and running smoothly.",
    ],
    highlights: [
      { label: "Daily commuters", value: "25,000+" },
      { label: "Terminals", value: "3" },
    ],
    scope: terminalScope,
    media: [
      {
        type: "image",
        src: "/hero/terminal-3.jpg",
        alt: "BRT buses outside Terminal 3 at the Oshodi Transport Interchange",
      },
      {
        type: "image",
        src: "/brand/oshodi-brt.png",
        alt: "Oshodi bus terminal and BRT corridor",
      },
      {
        type: "image",
        src: "/hero/floor-care.jpg",
        alt: "FixIt staff with industrial floor scrubbers on a terminal walkway",
      },
      {
        type: "image",
        src: "/hero/team.jpg",
        alt: "FixIt cleaning and maintenance team in uniform on site",
      },
    ],
    managerSlug: "micheal-adewale-hanz",
  },
  {
    slug: "challenge-bus-terminal",
    name: "Challenge Bus Terminal",
    location: "Ibadan, Oyo State",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/54.png",
    summary:
      "Cleanliness, order and disciplined facility operations for over 12,000 daily commuters in Ibadan.",
    description: [
      "Challenge Bus Terminal is one of Ibadan's busiest transport centres, linking travellers across the South West. The terminal serves over 12,000 commuters daily.",
      "A dedicated FixIt workforce of over 32 staff keeps passenger-facing areas and shared spaces clean, orderly and efficient, so the terminal stays safe and presentable throughout the day.",
    ],
    highlights: [
      { label: "Daily commuters", value: "12,000+" },
      { label: "On-site staff", value: "32+" },
    ],
    scope: terminalScope,
  },
  {
    slug: "ojoo-bus-terminal",
    name: "Ojoo Bus Terminal",
    location: "Ibadan, Oyo State",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/58.png",
    summary:
      "Reliable facility management for a key Ibadan hub connecting major routes, serving over 5,000 commuters daily.",
    description: [
      "Ojoo Bus Terminal is a key Ibadan transport hub connecting major routes in and out of the city, serving over 5,000 commuters every day.",
      "FixIt provides reliable facility management that supports smooth passenger flow, a well-presented site and consistent day-to-day operations for travellers and transport operators alike.",
    ],
    highlights: [{ label: "Daily commuters", value: "5,000+" }],
    scope: terminalScope,
  },
  {
    slug: "benin-central-bus-terminal",
    name: "Benin Central Bus Terminal",
    location: "Benin City, Edo State",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/59.png",
    summary:
      "Intercity gateway operations supported by 50+ FixIt personnel, accommodating over 18,000 daily commuters.",
    description: [
      "Benin Central Bus Terminal is a major intercity gateway, accommodating over 18,000 commuters daily as they travel to and from Benin City.",
      "More than 50 FixIt personnel support the terminal, with a focus on hygiene, order and dependable facility upkeep across this high-volume public transport environment.",
    ],
    highlights: [
      { label: "Daily commuters", value: "18,000+" },
      { label: "On-site staff", value: "50+" },
    ],
    scope: terminalScope,
  },
  {
    slug: "ekiti-bus-terminal",
    name: "Ekiti Bus Terminal",
    location: "Ado-Ekiti, Ekiti State",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/57.png",
    summary:
      "Seamless daily operations with 40+ staff, serving more than 10,000 commuters daily in Ado-Ekiti.",
    description: [
      "Ekiti Bus Terminal in Ado-Ekiti serves more than 10,000 commuters daily and is a central point for travel within and beyond Ekiti State.",
      "A team of over 40 FixIt staff maintains cleaning standards, passenger areas and operational readiness, with daily operations led on site by our Ado-Ekiti Facility Manager.",
    ],
    highlights: [
      { label: "Daily commuters", value: "10,000+" },
      { label: "On-site staff", value: "40+" },
    ],
    scope: terminalScope,
    managerSlug: "adepoju-adekunle",
  },
  {
    slug: "iwo-central-bus-terminal",
    name: "Iwo Central Bus Terminal 1 and 2",
    location: "Ibadan, Oyo State",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/iwo-terminal.png",
    summary:
      "Facility standards across both terminals of Ibadan's modern Iwo Road transport facility.",
    description: [
      "The Iwo Road Bus Terminal, branded Ibadan Central Bus Terminal, is a modern transportation facility designed to provide an organised, safe and efficient environment for passengers and transport operators.",
      "Terminal 1 and Terminal 2 serve as an important hub for commuters within Ibadan and on connecting routes. FixIt supports facility standards across both terminals, keeping loading bays, concourses and passenger areas clean and orderly.",
    ],
    highlights: [{ label: "Terminals", value: "2" }],
    scope: terminalScope,
  },
  {
    slug: "umuahia-bus-terminal",
    name: "Umuahia Bus Terminal",
    location: "Umuahia, Abia State",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/umuahia-terminal.jpg",
    summary:
      "Disciplined facility operations at Abia State's modern, multi-modal Umuahia Central Bus Terminal.",
    description: [
      "The Umuahia Central Bus Terminal is a modern, multi-modal transport hub in Abia State. It replaces disorganised roadside motor parks with a centralised facility that improves safety, reduces congestion and supports the state's green transit programme.",
      "FixIt contributes disciplined facility operations within this upgraded public transport environment, helping the terminal deliver on its promise of a cleaner, safer travel experience.",
    ],
    highlights: [{ label: "Facility type", value: "Multi-modal hub" }],
    scope: terminalScope,
  },
  {
    slug: "kugbo-bus-terminal",
    name: "Kugbo Bus Terminal",
    location: "Abuja, FCT",
    status: "ongoing",
    category: "Transport terminal",
    image: "/brand/kugbo-terminal.png",
    summary:
      "Disciplined facility care at one of Abuja's newest transport terminals, built to handle thousands of passengers daily.",
    description: [
      "Kugbo Bus Terminal is one of Abuja's modern transport terminals, developed by the FCT Administration to improve public transportation and passenger safety across the capital.",
      "Designed to handle thousands of passengers daily, the terminal relies on FixIt for disciplined facility care and consistent service delivery across its passenger and operational areas.",
    ],
    highlights: [{ label: "Developer", value: "FCT Administration" }],
    scope: terminalScope,
  },
  {
    slug: "nrs-abuja",
    name: "NRS Abuja",
    location: "Abuja, FCT",
    status: "completed",
    category: "Institutional headquarters",
    image: "/brand/nrs-abuja.png",
    summary:
      "Facility support at the national headquarters of the Nigeria Revenue Service in Abuja.",
    description: [
      "The Nigeria Revenue Service (NRS) Abuja is the national headquarters and central operational hub for tax administration and revenue collection in Nigeria, following the transition from FIRS under the Federal Government's tax reform agenda.",
      "FixIt supported facility performance across this high-profile institutional environment, maintaining the standards expected of a national headquarters building.",
    ],
    highlights: [{ label: "Client", value: "Nigeria Revenue Service" }],
    scope: buildingScope,
  },
  {
    slug: "enugu-bus-terminals",
    name: "Enugu Bus Terminals",
    location: "Enugu State",
    status: "completed",
    category: "Transport terminals",
    image: "/brand/enugu-terminal.png",
    summary:
      "Clean, orderly passenger environments across four Enugu terminals handling over 14,000 commuters daily.",
    description: [
      "The Enugu Bus Terminals, comprising Gariki, Abakpa, and Holy Ghost 1 and 2, form a modern transport network supporting both intra-state and inter-state travel. Together, the terminals handle over 14,000 commuters daily.",
      "FixIt helped maintain clean, orderly and functional passenger environments across all four sites, applying consistent standards across a multi-terminal operation.",
    ],
    highlights: [
      { label: "Daily commuters", value: "14,000+" },
      { label: "Terminals", value: "4" },
    ],
    scope: terminalScope,
  },
  {
    slug: "mabushi-bus-terminal",
    name: "Mabushi Bus Terminal",
    location: "Abuja, FCT",
    status: "completed",
    category: "Transport terminal",
    image: "/brand/mabushi-terminal.png",
    summary:
      "Facility management for an ultra-modern central Abuja terminal built to replace unauthorised roadside parks.",
    description: [
      "Strategically situated in central Abuja, Mabushi Bus Terminal is an ultra-modern facility introduced to eliminate unauthorised roadside parks and address rising security concerns across the capital.",
      "FixIt supported facility management standards that kept the terminal organised, presentable and operationally ready for the commuters and operators who depend on it.",
    ],
    highlights: [{ label: "Facility type", value: "Ultra-modern terminal" }],
    scope: terminalScope,
  },
  {
    slug: "nrs-lagos-buildings",
    name: "NRS Lagos Buildings - 10 Stations",
    location: "Lagos",
    status: "completed",
    category: "Commercial buildings",
    image: "/brand/nrs-lagos.png",
    summary:
      "Multi-site facility management across NRS (formerly FIRS) tax offices in the Lagos Mainland East region, recognised with a Best Service Provider award.",
    description: [
      "FixIt managed a portfolio of NRS (formerly FIRS) tax offices across the Lagos Mainland East region, including Ojodu, Ikeja, Yaba, Alimosho, Allen, Oregun, Ikeja III, Agege and Ikorodu.",
      "Our dedicated team kept each facility operating at a high standard through consistent cleaning, maintenance coordination and day-to-day operational support. Within a year of the contract, FixIt was named Best Service Provider (Contractor) by the State Administrator Office, Lagos Mainland East.",
    ],
    highlights: [
      { label: "Sites", value: "10 stations" },
      { label: "Recognition", value: "Best Service Provider" },
    ],
    scope: [...buildingScope, "Maintenance coordination"],
  },
  {
    slug: "planet-project-limited",
    name: "Planet Project Limited",
    location: "Lagos",
    status: "completed",
    category: "Corporate offices",
    image: "/brand/planet-project.png",
    summary:
      "Facility management support for the offices of a leading Nigerian infrastructure and transport engineering company.",
    description: [
      "Planet Project Limited is a leading Nigerian infrastructure development and transport engineering company, specialising in the design, development and management of modern transportation and infrastructure projects.",
      "FixIt provided facility management support across key office locations, aligned with the client's operational standards. Planet Projects has since provided a recommendation letter for our work.",
    ],
    highlights: [{ label: "Sector", value: "Infrastructure" }],
    scope: buildingScope,
  },
  {
    slug: "galaxy-backbone",
    name: "Galaxy Backbone Ltd",
    location: "Abuja, FCT",
    status: "completed",
    category: "Corporate headquarters",
    image: "/brand/galaxy-backbone.png",
    summary:
      "Facility support at the Abuja headquarters of the Federal Government's ICT and digital infrastructure provider.",
    description: [
      "Galaxy Backbone is the Federal Government of Nigeria's ICT and digital infrastructure provider, headquartered in the Central Business District of Abuja. The organisation operates modern office complexes, data centres, fibre-optic networks and cloud infrastructure that support digital services across government institutions nationwide.",
      "FixIt supported facility excellence on site, helping keep a technology-critical headquarters clean, well-maintained and ready for daily operations.",
    ],
    highlights: [{ label: "Sector", value: "Government ICT" }],
    scope: buildingScope,
  },
];

/** Ongoing projects first, then completed, each group in its listed order. */
export const projects: Project[] = [
  ...allProjects.filter((project) => project.status === "ongoing"),
  ...allProjects.filter((project) => project.status === "completed"),
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectHref(slug: string): string {
  return `/our-projects/${slug}`;
}

export function getProjectMedia(project: Project): ProjectMedia[] {
  return [
    {
      type: "image",
      src: project.image,
      alt: `${project.name}, ${project.location}`,
    },
    ...(project.media ?? []),
  ];
}
