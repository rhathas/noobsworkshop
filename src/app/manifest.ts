import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "noob's Workshop",
    short_name: "noob's Workshop",
    description: "Personal developer blog by Ogulcan Gündüz.",
    theme_color: "#66fcf1",
    background_color: "#202833",
    icons: [
      { src: "/icons/apple-icon.png", sizes: "any", type: "image/png" },
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    orientation: "portrait",
    display: "standalone",
    dir: "auto",
    lang: "en-US",
    start_url: "/",
    scope: "/",
  }
}
