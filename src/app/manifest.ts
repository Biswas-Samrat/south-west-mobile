import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "South West Mobile - Mobile Mechanic",
    short_name: "South West Mobile",
    description: "Mobile mechanic based in Weston-super-Mare, North Somerset. We come to you!",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f1d",
    theme_color: "#e11d48",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
