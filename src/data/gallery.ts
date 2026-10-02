import { projects } from "@/data/projects";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

const operations: GalleryImage[] = [
  {
    src: "/hero/slide-1.png",
    alt: "FixIt facility management team in work gear at a transport terminal",
    caption: "Our team on site",
  },
  {
    src: "/brand/98.png",
    alt: "FixIt operator driving a ride-on sweeper in a covered terminal",
    caption: "Mechanised floor sweeping",
  },
  {
    src: "/brand/105.png",
    alt: "FixIt operator using a ride-on floor scrubber on a pedestrian bridge",
    caption: "Floor scrubbing",
  },
  {
    src: "/brand/104.png",
    alt: "FixIt sanitation specialist performing disinfection in protective gear",
    caption: "Disinfection",
  },
  {
    src: "/brand/106.png",
    alt: "FixIt team carrying out waste management and fumigation",
    caption: "Waste management and fumigation",
  },
  {
    src: "/brand/107.png",
    alt: "FixIt team clearing waste at a facility site",
    caption: "Site clean-up",
  },
  {
    src: "/brand/100.png",
    alt: "FixIt technician servicing HVAC equipment",
    caption: "HVAC maintenance",
  },
  {
    src: "/brand/101.png",
    alt: "FixIt technician operating facility equipment",
    caption: "Technical support",
  },
  {
    src: "/brand/103.jpg",
    alt: "FixIt staff training session",
    caption: "Staff training",
  },
  {
    src: "/brand/99.jpg",
    alt: "FixIt management and team briefing",
    caption: "Team briefing",
  },
  {
    src: "/brand/97.png",
    alt: "FixIt facility management team supporting a busy public facility",
    caption: "Facility operations",
  },
];

const sites: GalleryImage[] = projects.map((project) => ({
  src: project.image,
  alt: `${project.name} in ${project.location}`,
  caption: project.name,
}));

export const galleryImages: GalleryImage[] = [...operations, ...sites];
