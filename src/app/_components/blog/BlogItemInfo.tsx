export type BlogItemInfoProps = {
  date: string
  readingTime: string
}

export const BlogItemInfo = ({ date, readingTime }: BlogItemInfoProps) => {
  const dateText = new Date(date).toLocaleDateString("en-GB", { day: "numeric", year: "numeric", month: "long" })
  return (
    <div className={"text-sm text-mid-gray"}>
      <p className={"m-0 italic"}>{dateText}</p>
      <p className={"my-2"}>{readingTime}</p>
    </div>
  )
}
