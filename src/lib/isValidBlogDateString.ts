export function isValidBlogDateString(date: string): date is BlogMetaDataType["date"] {
  return /^\d{4}-\d{2}-\d{2}$/.test(date)
}
