import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      // TODO: Add your icons hosted on S3
      // {
      //   src: "https://your-s3-bucket.s3.amazonaws.com/images/icon-vector.svg",
      //   type: "image/svg+xml",
      //   sizes: "any",
      //   purpose: "any",
      // },
      // {
      //   src: "https://your-s3-bucket.s3.amazonaws.com/images/icon-192x192.png",
      //   type: "image/png",
      //   sizes: "192x192",
      //   purpose: "any",
      // },
      // {
      //   src: "https://your-s3-bucket.s3.amazonaws.com/images/icon-512x512.png",
      //   type: "image/png",
      //   sizes: "512x512",
      //   purpose: "any",
      // },
      // {
      //   src: "https://your-s3-bucket.s3.amazonaws.com/images/maskable-icon.png",
      //   type: "image/png",
      //   sizes: "512x512",
      //   purpose: "maskable",
      // },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      // TODO: Add your screenshots hosted on S3
      // {
      //   src: "https://your-s3-bucket.s3.amazonaws.com/images/screenshot-mobile-dark.webp",
      //   type: "image/webp",
      //   sizes: "440x956",
      //   form_factor: "narrow",
      // },
      // {
      //   src: "https://your-s3-bucket.s3.amazonaws.com/images/screenshot-desktop-dark.webp",
      //   type: "image/webp",
      //   sizes: "1920x1080",
      //   form_factor: "wide",
      // },
    ],
  };
}
