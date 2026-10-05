export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** Leave unset until a photo is supplied; cards and profiles show initials instead. */
  image?: string;
  /** Leave empty until confirmed; the detail page falls back to the general inbox. */
  email: string;
  /** Short staff bio, one string per paragraph. */
  bio: string[];
};

export const fallbackTeamEmail = "info@fixitmulticoncepts.com";

export const team: TeamMember[] = [
  {
    slug: "temilade-fashesin",
    name: "Temilade Fashesin",
    role: "General Manager",
    image: "/team/member-1.png",
    email: "",
    bio: [
      "Temilade Fashesin brings 14 years of experience in operations, project delivery and business management across facilities management, healthcare, manufacturing, real estate and technology. At FixIt Multiconcepts, she leads the systems and teams that keep complex, multi-site operations running effectively.",
    ],
  },
  {
    slug: "segun-oyesanmi",
    name: "Segun Oyesanmi",
    role: "Operations Manager",
    image: "/team/member-3.jpg",
    email: "",
    bio: [
      "Segun Oyesanmi is a Facilities and Operations Management professional at FixIt Multiconcepts Limited, with practical experience in multi-site facility management and service delivery. He is certified in Facility Management and Project Management, and currently oversees operations across 14 stations in Nigeria, covering major terminals, government and commercial facilities.",
      "He manages and coordinates over 369 janitors and support personnel across multiple locations. He is experienced in workforce management, client relations, vendor coordination, resource planning, service quality and operational problem-solving, with a strong track record in multi-site operations, team leadership, stakeholder management and delivering consistent service standards.",
    ],
  },
  {
    slug: "olajumoke-togun",
    name: "Olajumoke Togun",
    role: "Head, People and Talents",
    image: "/team/olajumoke-togun.jpg",
    email: "",
    bio: [
      "Olajumoke Togun is an experienced HR and Executive Administrative professional with over 8 years of experience in HR operations, people management, executive support and business process improvement. At FixIt Multiconcepts Ltd, she supports HR and administrative operations and coordinates organisational activities.",
      "She has supported teams of 200+ employees across recruitment, onboarding, training, employee relations, performance management and process improvement. She is passionate about developing effective workplace systems, supporting employee growth and strengthening organisational performance through structured people management.",
    ],
  },
  {
    slug: "folorunso-ogunleye",
    name: "Folorunso Ogunleye",
    role: "Accountant",
    image: "/team/folorunso-ogunleye.jpg",
    email: "",
    bio: [
      "Folorunso Ogunleye is a dedicated and detail-oriented Finance professional at FixIt Multiconcepts Ltd, with several years of experience in accounting, financial management, reporting and expenditure control. He is skilled in managing financial transactions, preparing reports, monitoring budgets and expenses, reconciliations, petty cash management, payroll support and financial documentation.",
      "He supports the company's financial operations across various facilities and service locations, ensuring accountability, cost control and efficient use of resources. With strong analytical and organisational skills, he is committed to accuracy, financial compliance, integrity, confidentiality and continuous improvement of financial processes.",
    ],
  },
  {
    slug: "adebowale-precious-adesanmi",
    name: "Adebowale Precious Adesanmi",
    role: "Business Development Officer",
    image: "/team/adebowale-precious.jpg",
    email: "",
    bio: [
      "Adebowale Precious Adesanmi is a Business Development Officer at FixIt Multiconcepts Ltd, responsible for researching prospective clients and business partners, identifying new business opportunities, and supporting the organisation's growth and service delivery. She contributes to building valuable business relationships and strengthening the company's market presence through effective research, client engagement and business development initiatives.",
    ],
  },
  {
    slug: "silifat-ogundipe",
    name: "Silifat Ogundipe",
    role: "Admin and Social Media Officer",
    image: "/team/silifat.jpeg",
    email: "",
    bio: [
      "Silifat Ogundipe is an experienced Public Administration professional and serves as the Admin and Social Media Officer at FixIt Multiconcepts Limited. She has over five years of public-sector experience and two years of private-sector experience, with expertise in administration, coordination, documentation, stakeholder engagement, social media management and content creation.",
      "She supports the company's administrative operations, coordinates office activities, manages social media content, and contributes to the company's communication and brand visibility.",
    ],
  },
  {
    slug: "victor-chukwuemeka",
    name: "Victor Chukwuemeka",
    role: "Facility Manager, Abuja",
    image: "/team/victor-chukwuemeka.jpg",
    email: "",
    bio: [
      "Victor Chukwuemeka is a Facility Manager at FixIt Multiconcepts Ltd, with practical experience in facility operations, team coordination, service delivery, maintenance supervision and operational management.",
      "He previously managed facility-support operations at the Oshodi Transport Interchange, where he coordinated janitorial services and supervised power-management activities across the terminals. He now oversees facility operations in Abuja, coordinating people, resources, contractors and day-to-day services to ensure efficient, safe and well-maintained facilities.",
      "He is committed to professionalism, accountability, attention to detail and continuous improvement, with a hands-on approach to solving operational challenges and maintaining high standards of service delivery.",
    ],
  },
  {
    slug: "adepoju-adekunle",
    name: "Adepoju Adekunle",
    role: "Facility Manager, Ado-Ekiti",
    image: "/team/adepoju-adekunle.jpg",
    email: "",
    bio: [
      "Adepoju Adekunle is a dedicated Facility Management professional and the Facility Manager for the Ado-Ekiti branch. He oversees daily facility operations, cleaning services and maintenance activities, ensuring that client spaces remain clean, safe, functional and well-maintained.",
      "With hands-on experience in facility upkeep, team coordination and service delivery at Ado-Ekiti Bus Terminal and other locations, he is committed to high standards of hygiene, safety, operational efficiency and customer satisfaction. He coordinates teams, monitors service quality, and ensures that facility operations consistently meet required standards.",
    ],
  },
  {
    slug: "miracle-eke-amogu",
    name: "Miracle Eke Amogu",
    role: "Facility Manager, Umuahia",
    image: "/team/miracle-eke-amogu.jpg",
    email: "",
    bio: [
      "Miracle Eke Amogu, from Asaga, Ohafia in Abia State, is a Mechanical and Technical Engineering professional with six years of hands-on experience in mechanical systems, technical operations and facility management. He serves as Facility Manager at FixIt Multiconcepts Ltd for the Nnenna Oti Bus Terminal, Umuahia, where he oversees facility operations and ensures efficient service delivery.",
      "He is passionate about continuous professional development and is focused on advancing his career in Mechatronics Engineering.",
    ],
  },
  {
    slug: "micheal-adewale-hanz",
    name: "Micheal Adewale Hanz",
    role: "Facility Manager, Oshodi",
    image: "/team/micheal-adewale.jpg",
    email: "",
    bio: [
      "Micheal Adewale Hanz is a committed Facility Manager at FixIt Multiconcepts Ltd, overseeing the overall management, operations and maintenance of Oshodi Bus Terminal. He is experienced in staff supervision and welfare, safety and security, cleanliness and sanitation, infrastructure maintenance, and enforcement of operational standards.",
      "He is committed to smooth and efficient day-to-day operations, maintaining a safe, clean, well-organised and fully functional terminal environment that meets required service and operational standards.",
    ],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}

export function getTeamMemberHref(slug: string): string {
  return `/company/our-management/${slug}`;
}

export function getTeamMemberEmail(member: TeamMember): string {
  return member.email || fallbackTeamEmail;
}

export function getTeamMemberSummary(member: TeamMember, maxLength = 160): string {
  const text = member.bio[0] ?? `${member.name} is ${member.role} at FixIt Facility Management.`;
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}
