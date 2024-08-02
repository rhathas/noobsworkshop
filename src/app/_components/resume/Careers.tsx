import careersData from "@/data/resume/career.json"
import { CareerItem } from "@/app/_components/resume/CareerItem"
export const Careers = () => {
  return (
    <div>
      <h2 className={"my-2 px-4 text-xl font-semibold text-gray-400"}>CAREER HISTORY</h2>
      <div className={"flex flex-col gap-2"}>
        {careersData.map((career) => (
          <CareerItem item={career} key={career.id} />
        ))}
      </div>
    </div>
  )
}
