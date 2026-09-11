export type Service = {
  slug: string;
  title: string;
  heading: string;
  image: string;
  summary: string;
  writeup: string[];
};

export const services: Service[] = [
  {
    slug: "custodial-environmental-hygiene",
    title: "Custodial and Environmental Hygiene",
    heading: "Clean spaces. Healthier facilities.",
    image: "/services/custodial.png",
    summary:
      "Professional cleaning and hygiene programmes that keep public and commercial spaces safe, presentable, and ready for daily use.",
    writeup: [
      "FixIt delivers disciplined custodial and environmental hygiene services across high-traffic terminals, offices, and commercial facilities. Our teams combine trained manpower, industrial equipment, and clear service schedules to maintain consistent standards every day.",
      "From deep cleaning and floor care to restroom sanitation and surface disinfection, we focus on visible cleanliness and healthier indoor environments. We tailor scope, frequency, and reporting to each site so operations stay uninterrupted while hygiene remains non-negotiable.",
    ],
  },
  {
    slug: "landscaping-beautification",
    title: "Landscaping & Beautification",
    heading: "Grounds that make a strong first impression.",
    image: "/services/landscaping.jpg",
    summary:
      "Outdoor grounds care and beautification that strengthen first impressions and keep facility exteriors well maintained.",
    writeup: [
      "Our landscaping and beautification teams maintain lawns, planting beds, pathways, and outdoor amenity areas with a practical focus on safety, appearance, and seasonal upkeep.",
      "Whether supporting a transport hub plaza or a commercial campus, FixIt plans routine maintenance, soft landscaping refreshes, and presentation standards that match the quality of the built environment.",
    ],
  },
  {
    slug: "security-access-control",
    title: "Security and Access Control Management",
    heading: "Controlled access. Confident operations.",
    image: "/services/security.jpg",
    summary:
      "Access control and security coordination that protect people, assets, and orderly movement across your facilities.",
    writeup: [
      "FixIt supports facility security through structured access control practices, monitoring coordination, and clear operating procedures for staff and visitors.",
      "We work with site leadership to define entry points, response protocols, and daily security routines that reduce risk without creating friction for legitimate users of the facility.",
    ],
  },
  {
    slug: "waste-management-fumigation",
    title: "Waste Management & Fumigation Solutions",
    heading: "Cleaner sites, fewer disruptions.",
    image: "/services/waste-fumigation.png",
    summary:
      "Reliable waste handling and fumigation programmes that keep facilities clean, compliant, and free from pest risk.",
    writeup: [
      "Our waste management teams handle collection, segregation support, bin servicing, and site cleanliness around refuse points, including high-volume public environments.",
      "Integrated fumigation and pest control routines protect buildings and open areas from infestations. Together, these services keep facilities hygienic, presentable, and operationally resilient.",
    ],
  },
  {
    slug: "sustainable-energy",
    title: "Sustainable Energy Solutions",
    heading: "Smarter energy for lasting performance.",
    image: "/services/energy.jpg",
    summary:
      "Practical energy solutions that improve efficiency, reduce operating costs, and support more sustainable facility performance.",
    writeup: [
      "FixIt helps facilities pursue smarter energy use through assessments, efficiency-minded operations support, and sustainable power solutions suited to real site conditions.",
      "From day-to-day energy discipline to longer-term improvement initiatives, we align technical recommendations with reliability, cost control, and environmental responsibility.",
    ],
  },
  {
    slug: "water-treatment",
    title: "Water Treatment",
    heading: "Protected systems. Dependable water quality.",
    image: "/services/water.jpg",
    summary:
      "Water treatment support that protects system performance, water quality, and dependable facility operations.",
    writeup: [
      "Clean, well-managed water systems are essential to facility health and uptime. FixIt provides water treatment support focused on system care, quality, and preventive attention.",
      "Our approach helps reduce scale, contamination risk, and avoidable downtime, keeping plant rooms and water-dependent services performing as intended.",
    ],
  },
  {
    slug: "hvac-operations",
    title: "HVAC Operations and Preventive Maintenance",
    heading: "Comfort maintained. Downtime reduced.",
    image: "/services/hvac.png",
    summary:
      "HVAC operations and preventive maintenance that protect comfort, air quality, and equipment lifespan.",
    writeup: [
      "FixIt's technical teams support HVAC operations with scheduled inspections, preventive maintenance, and responsive attention to faults that affect comfort and uptime.",
      "By maintaining condensers, air handlers, and related systems before failures escalate, we help facilities stay comfortable for users while controlling lifecycle costs.",
    ],
  },
  {
    slug: "electrical-maintenance",
    title: "Electrical System Maintenance and Repairs",
    heading: "Power kept safe and available.",
    image: "/services/electrical.jpg",
    summary:
      "Electrical maintenance and repairs that keep critical systems safe, compliant, and continuously available.",
    writeup: [
      "From routine checks to targeted repairs, FixIt supports electrical systems that power lighting, equipment, and essential facility infrastructure.",
      "Our technicians work to diagnose issues quickly, restore safe operation, and recommend preventive actions that reduce recurrence and protect people and property.",
    ],
  },
  {
    slug: "training-services",
    title: "Training Services",
    heading: "Skilled teams. Stronger standards.",
    image: "/services/training.jpg",
    summary:
      "Practical training programmes that build competence, safety awareness, and service excellence across facility teams.",
    writeup: [
      "FixIt delivers training that strengthens operational standards, covering hygiene practice, equipment handling, safety, and service delivery discipline.",
      "Sessions are designed for real facility contexts so teams leave with skills they can apply immediately, improving consistency and accountability on site.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceHref(slug: string): string {
  return `/what-we-do/${slug}`;
}
