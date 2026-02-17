import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      // Blog post redirects — WordPress served posts at root, new site nests under /blog/
      { source: "/here-comes-rain-gutter-cleaning-time", destination: "/blog/here-comes-rain-gutter-cleaning-time", permanent: true },
      { source: "/spring-cleaning-2020", destination: "/blog/spring-cleaning-2020", permanent: true },
      { source: "/rental-property-maintenance", destination: "/blog/rental-property-maintenance", permanent: true },
      { source: "/wouldnt-you-rather-be-at-the-lake", destination: "/blog/wouldnt-you-rather-be-at-the-lake", permanent: true },
      { source: "/moss-removal-roof-cleaning", destination: "/blog/moss-removal-roof-cleaning", permanent: true },
      { source: "/reach-for-the-sky", destination: "/blog/reach-for-the-sky", permanent: true },
      { source: "/selling-your-home-let-us-help", destination: "/blog/selling-your-home-let-us-help", permanent: true },
      { source: "/we-got-you-covered", destination: "/blog/we-got-you-covered", permanent: true },
      { source: "/prepare-for-pressure-washing", destination: "/blog/prepare-for-pressure-washing", permanent: true },
      { source: "/spring-pressure-washing-2018", destination: "/blog/spring-pressure-washing-2018", permanent: true },
      { source: "/spring-cleaning-2017", destination: "/blog/spring-cleaning-2017", permanent: true },
      { source: "/we-are-all-about-pressure-washing", destination: "/blog/we-are-all-about-pressure-washing", permanent: true },
      { source: "/pure-pressure-has-a-big-announcement", destination: "/blog/pure-pressure-has-a-big-announcement", permanent: true },

      // Category redirects
      { source: "/category/:slug", destination: "/blog?category=:slug", permanent: true },

      // WordPress pagination
      { source: "/blog/page/:num", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
