import { ReactNode } from "react"
import { TopBar } from "@/app/_components/blog/TopBar"

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      {/*<TopBar />*/}
      {children}
    </>
  )
}
