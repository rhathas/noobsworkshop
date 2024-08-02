import { getAllBlogPosts } from "@/lib/blog/getAllBlogPosts"
import { BlogListItem } from "@/app/_components/blog/BlogListItem"
import { Pagination } from "@/app/_components/blog/Pagination"
import { notFound } from "next/navigation"

type PaginatedBlogProps = {
  params: {
    page: string
  }
}

const PER_PAGE = 10

const allBlogPosts = getAllBlogPosts()
const totalPages = Math.ceil(allBlogPosts.length / PER_PAGE)

export default function PaginatedBlog({ params }: PaginatedBlogProps) {
  const blogPosts = allBlogPosts.slice((Number(params.page) - 1) * PER_PAGE, Number(params.page) * PER_PAGE)
  if (Number(params.page) > totalPages) {
    notFound()
  }
  return (
    <main className="mt-2 flex min-h-screen flex-col gap-2">
      {blogPosts &&
        blogPosts.length > 0 &&
        blogPosts.map((post, index) => (
          <BlogListItem
            key={`${index}-${post.data.title}`}
            title={post.data.title}
            description={post.data.description}
            previewImage={post.data.previewImage}
            slug={post.slug}
            date={post.data.date}
            readingTime={post.data.readingTime}
          />
        ))}
      {totalPages > PER_PAGE && <Pagination currentPage={Number(params.page)} totalPages={totalPages} />}
    </main>
  )
}

export const generateStaticParams = () => {
  // const allBlogPosts = getAllBlogPosts()
  return Array.from({ length: totalPages }).map((_, i) => i + 1)
}
