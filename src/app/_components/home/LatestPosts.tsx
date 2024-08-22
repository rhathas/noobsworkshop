import { getLatestBlogPosts } from "@/lib/blog/getLatestBlogPosts"
import { BlogListItem } from "@/app/_components/blog/BlogListItem"

export const LatestPosts = () => {
  const latestBlogPosts = getLatestBlogPosts()

  return (
    <div>
      <h2
        className={`
          px-4 py-2 text-2xl font-semibold text-gray-400
          lg:px-8
        `}
      >
        Latest Blog Posts:
      </h2>
      <div className={"flex flex-col gap-4"}>
        {latestBlogPosts.map((post, index) => (
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
      </div>
    </div>
  )
}
