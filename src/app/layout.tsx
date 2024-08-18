import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/_components/header/Header"
import { ReactNode } from "react"
import { Footer } from "@/app/_components/footer/Footer"
import { clsx } from "clsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://noobsworkshop.com"),
  title: "noob's workshop",
  description: "Personal developer blog by Ogulcan Gündüz.",
  authors: { name: "Ogulcan Gündüz" },
  creator: "Ogulcan Gündüz",
  publisher: "Ogulcan Gündüz",
  openGraph: {
    title: "noob's workshop",
    description: "Personal developer blog by Ogulcan Gündüz.",
    url: process.env.BASE_URL,
    siteName: "noob's Workshop - Ogulcan Gündüz",
    locale: "en_US",
    type: "article",
    authors: ["Ogulcan Gündüz"],
    // image: `${process.env.BASE_URL}/${frontmatterData.previewImage}`,
    // imageAlt: "Preview Image for noob's Workshop - Ogulcan Gündüz",
  },
  twitter: {
    card: "summary_large_image",
    title: "noob's workshop",
    description: "Personal developer blog by Ogulcan Gündüz.",
    creator: "Ogulcan Gündüz",
    // image: `${process.env.BASE_URL}/${frontmatterData.previewImage}`,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          `
            mx-auto bg-root
            md:container
          `,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
