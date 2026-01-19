import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://hubcapstickers.com";
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/#features`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#how-it-works`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#showcase`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#pricing`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#faq`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        // External shop pages for reference (optional - search engines may or may not index these)
        {
            url: `${baseUrl}/stickers/wheel-emblems/`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];
}
