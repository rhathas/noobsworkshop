import { permanentRedirect } from "next/navigation"

const BlogRedirectPage = () => {
  permanentRedirect("/blog/1")
}

export default BlogRedirectPage
