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
        prose prose-stone prose-invert my-2 max-w-none rounded bg-card p-4 pb-8
        lg:prose-xl lg:p-8 lg:pb-12
        prose-h1:mb-8
      `}
    >
      {children}
    </article>
  )
}
