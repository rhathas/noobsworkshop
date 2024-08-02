import { CollapsibleCareerDetails } from "@/app/_components/resume/CollapsibleCareerDetails"

type CareerItemType = {
  id: string
  startDate: `${number}-${number}` | string
  endDate: `${number}-${number}` | string
  jobTitle: string
  companyName?: string | null
  location: string
  details: string[]
}

const formatDateToMonthYear = (date: Date) => {
  return date.toLocaleDateString("en-GB", { year: "numeric", month: "short" })
}
const parseYearMonthToDate = (yearMonth: `${number}-${number}` | string) => {
  const [year, month] = yearMonth.split("-").map(Number)
  return new Date(year, month - 1)
}

function calculateTimeDifference(startDate: Date, endDate: Date) {
  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()

  if (months < 0) {
    years--
    months += 12
  }

  return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`
}
export const CareerItem = ({ item }: { item: CareerItemType }) => {
  const startDateObject = parseYearMonthToDate(item.startDate)
  const endDateObject = parseYearMonthToDate(item.endDate)
  return (
    <div id={"career-" + item.id} className={"bg-card flex flex-col rounded p-4"}>
      <div className={"text-secondary flex flex-row gap-2 text-sm"}>
        <p>
          {formatDateToMonthYear(startDateObject)} - {formatDateToMonthYear(endDateObject)}
        </p>
        <p>({calculateTimeDifference(startDateObject, endDateObject)})</p>
      </div>
      <div>
        <p className={"text-primary text-xl font-semibold"}>{item.jobTitle}</p>
        {item.companyName && <p className={"text-gray-200"}>{item.companyName}</p>}
        <p className={"text-sm text-gray-400"}>{item.location}</p>
      </div>
      <CollapsibleCareerDetails details={item.details} id={item.id} />
    </div>
  )
}
