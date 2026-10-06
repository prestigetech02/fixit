import type { MetadataRoute } from "next";
import { getProjectHref, projects } from "@/data/projects";
import { getServiceHref, services } from "@/data/services";
import { getTeamMemberHref, team } from "@/data/team";
import { siteConfig } from "@/lib/seo";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const staticRoutes: {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/what-we-do", changeFrequency: "weekly", priority: 0.9 },
  { path: "/our-projects", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/company/who-we-are", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/company/our-management",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/company/our-gallery",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/company/our-csr",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const teamPages: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${siteConfig.url}${getTeamMemberHref(member.slug)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}${getServiceHref(service.slug)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}${getProjectHref(project.slug)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...servicePages, ...projectPages, ...teamPages];
}
