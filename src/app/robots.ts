export const dynamic = "force-static";
import type { MetadataRoute } from "next";

const SITE_URL = "https://apexbyte.cloud";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
