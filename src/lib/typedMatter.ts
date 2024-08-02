import matter from "gray-matter"

export const typedMatter = <T = any>(markdown: string | Buffer | { content: string | Buffer }) => {
  const rawMatter = matter(markdown)

  return {
    ...rawMatter,
    data: rawMatter.data as T,
  }
}
