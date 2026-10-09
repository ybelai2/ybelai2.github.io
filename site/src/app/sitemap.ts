import type { MetadataRoute } from "next";
import profile from "@/data/profile.json";
import notes from "@/data/notes.json";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      lastModified: profile.updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...notes.map((note) => ({
      url: `${profile.siteUrl}/notes/${note.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
