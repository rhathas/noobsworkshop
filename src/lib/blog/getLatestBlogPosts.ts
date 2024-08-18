import fs from "fs"
import path from "path"
import { typedMatter } from "@/lib/typedMatter"
import readingTime from "reading-time"

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export const getLatestBlogPosts = () => {
  const lastYear = fs
    .readdirSync("src/app/blog/(posts)", { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => {
      const match = folder.name.match(/\(([\w\s]*)\)/)
      return match ? Number(match[1]) : null
    })
    .filter((folder): folder is number => !!folder)
    .reduce((max, current) => (current > max ? current : max), -Infinity)

  const lastMonth = fs
    .readdirSync(`src/app/blog/(posts)/(${lastYear})`, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => {
      const match = folder.name.match(/\(([\w\s]*)\)/)
      return match ? match[1] : null
    })
    .filter((folder): folder is string => typeof folder === "string" && monthNames.includes(folder))
    .reduce((max, current) => (monthNames.indexOf(current) > monthNames.indexOf(max) ? current : max), monthNames[0])

  const latestPostsList = fs
    .readdirSync(`src/app/blog/(posts)/(${lastYear})/(${lastMonth})`, { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => {
      return {
        path: `src/app/blog/(posts)/(${lastYear})/(${lastMonth})/${folder.name}`,
        creationDate: fs.statSync(`src/app/blog/(posts)/(${lastYear})/(${lastMonth})/${folder.name}/page.mdx`)
          .birthtime,
      }
    })
    .sort((prev, next) => next.creationDate.getTime() - prev.creationDate.getTime())
    .slice(0, 4)

  return latestPostsList.map((file) => {
    const filePath = `${file.path}/page.mdx`
    const matterData = typedMatter<BlogMetaDataType>(fs.readFileSync(filePath))
    return {
      slug: path.parse(file.path).name,
      path: filePath,
      data: { ...matterData.data, readingTime: readingTime(matterData.content).text },
    }
  })
}
