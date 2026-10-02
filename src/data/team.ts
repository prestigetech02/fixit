export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  /** Leave empty until confirmed; the detail page falls back to the general inbox. */
  email: string;
};

export const fallbackTeamEmail = "info@fixitmulticoncepts.com";

export const team: TeamMember[] = [
  {
    slug: "temi-fashesin",
    name: "Temi Fashesin",
    role: "Fractional COO",
    image: "/team/member-1.png",
    email: "",
  },
  {
    slug: "folorunsho-ogunleye",
    name: "Folorunsho Ogunleye",
    role: "Accountant",
    image: "/team/member-2.jpg",
    email: "",
  },
  {
    slug: "segun-oyesanmi",
    name: "Segun Oyesanmi",
    role: "Operations Manager",
    image: "/team/member-3.jpg",
    email: "",
  },
  {
    slug: "olajumoke-togun",
    name: "Olajumoke Togun",
    role: "Head, People and Talents",
    image: "/team/member-4.jpg",
    email: "",
  },
  {
    slug: "silifat-ogundipe",
    name: "Silifat Ogundipe",
    role: "Admin and Social Media Officer",
    image: "/team/silifat.jpeg",
    email: "",
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
