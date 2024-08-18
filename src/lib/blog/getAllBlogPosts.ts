import { globSync } from "glob"
import path from "path"
import fs from "fs"
import readingTime from "reading-time"
import { typedMatter } from "@/lib/typedMatter"

export const getAllBlogPosts = () => {
  console.warn("### getAllBlogPosts executed! ###")
  return globSync("src/app/blog/(posts)/*/*/*", { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => {
      const folderPath = path.join(folder.parentPath.slice(folder.parentPath.indexOf("src/")), folder.name)
      const filePath = path.join(folderPath, "page.mdx")
      const matterData = typedMatter<BlogMetaDataType>(fs.readFileSync(filePath))
      return {
        slug: path.parse(folderPath).name,
        path: filePath,
        data: { ...matterData.data, readingTime: readingTime(matterData.content).text },
      }
    })
    .sort((prev, next) => new Date(next.data.date).getTime() - new Date(prev.data.date).getTime())
}
