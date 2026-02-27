import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kalimero.ink/",
      lastModified: new Date(),
    },
  ];
}
