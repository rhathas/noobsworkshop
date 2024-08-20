import Link from "next/link"
import { BlogItemInfo, BlogItemInfoProps } from "@/app/_components/blog/BlogItemInfo"
import CaretRight from "@/statics/icons/caret-right.svg"
import ExportedImage from "next-image-export-optimizer"

type BlogListItemProps = {
  title: string
  description: string
  previewImage: string
  slug: string
} & BlogItemInfoProps

export const BlogListItem = ({ title, description, previewImage, slug, date, readingTime }: BlogListItemProps) => {
  return (
    <div
      className={`
        flex w-full flex-col gap-4 rounded bg-card p-4
        lg:px-8
      `}
    >
      <Link href={`/blog/${slug}`} className={"relative aspect-video w-full"}>
        <ExportedImage
          className={`
            m-0 object-contain
            lg:m-0
          `}
          src={previewImage}
          alt={`${title} Preview Image`}
          fill
          sizes={
            "(min-width: 1024px) 960px, (min-width: 768px) 736px, (min-width: 640px) 608px, " +
            "(min-width: 480px) 448px, 100vw"
          }
        />
      </Link>

      <div className={"flex flex-col gap-2"}>
        <Link href={`/blog/${slug}`}>
          <h3 className={"text-lg font-semibold text-primary"}>{title}</h3>
        </Link>
        <BlogItemInfo date={date} readingTime={readingTime} />
        <p className={"text-gray-200"}>{description}</p>
        <Link
          href={`/blog/${slug}`}
          className={`
            flex flex-row items-center justify-center gap-2 self-center text-secondary transition-all duration-200
            ease-in-out
            hover:fill-primary hover:text-primary
            lg:w-fit
          `}
        >
          <p>Read this Article</p>
          <CaretRight
            className={`
              size-4 fill-secondary transition-all duration-200 ease-in-out
              hover:fill-primary
            `}
          />
        </Link>
      </div>
    </div>
  )
}
