import "@/app/globals.css"
import { ReactNode } from "react"

export default function BlogPostsLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <article
      className={`
        prose prose-stone prose-invert bg-card my-2 max-w-none rounded p-4 pb-8
        lg:prose-xl lg:p-8 lg:pb-12
      `}
    >
      {children}
    </article>
  )
}
