import { siteConfig } from "@/config";
import { getNews } from "@/lib/DAL";
import { NewsType } from "@/types";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news: NewsType[] = await getNews();

  const newsEntries: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${siteConfig.baseUrl}/news/${n.slug}`,
    lastModified: n.createdAt ? new Date(n.createdAt) : new Date(),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/about`,
      changeFrequency: "never" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.baseUrl}/appointments`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.baseUrl}/leadership`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.baseUrl}/contact`,
      changeFrequency: "never" as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.baseUrl}/doctors`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.baseUrl}/locations`,
      changeFrequency: "never" as const,
      priority: 0.6,
    },
    {
      url: `${siteConfig.baseUrl}/news`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...newsEntries,
  ];
}
