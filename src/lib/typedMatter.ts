import matter from "gray-matter"

export const typedMatter = <T = unknown>(markdown: string | Buffer | { content: string | Buffer }) => {
  const rawMatter = matter(markdown)

  return {
    ...rawMatter,
    data: rawMatter.data as T,
  }
}
