import type { MetadataRoute } from "next";
import profile from "@/data/profile.json";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      lastModified: profile.updated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
