import { ReadTimeResults } from "reading-time"

type BlogMetaDataType = {
  title: string
  description: string
  previewImage: string
  authors: [{ name: string }]
  date: `${number}${number}${number}${number}-${number}${number}-${number}${number}`
}
