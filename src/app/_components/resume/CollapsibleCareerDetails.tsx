"use client"

import CaretDown from "@/statics/icons/caret-down.svg"
import CaretUp from "@/statics/icons/caret-up.svg"
import { useState } from "react"
import { clsx } from "clsx"

type CollapsibleCareerDetailsProps = {
  details: string[]
  id: string
}
export const CollapsibleCareerDetails = ({ details, id }: CollapsibleCareerDetailsProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const handleToggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed)
  }
  return (
    <>
      <div
        className={`
          mt-2 flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded border border-gray-600 py-2
          text-secondary transition-all duration-200 ease-in-out
          hover:text-primary
        `}
        onClick={handleToggleCollapse}
      >
        <p>Details... </p>
        {collapsed ? <CaretDown className={"fill-secondary"} /> : <CaretUp className={"fill-secondary"} />}
      </div>
      <ul
        className={clsx(
          `
            mt-2 flex list-inside list-disc flex-col gap-1 overflow-hidden text-gray-100 transition-all duration-300
            ease-in-out
            marker:text-secondary
          `,
          collapsed ? "max-h-0" : "max-h-[2000px]",
        )}
      >
        {details.map((detail, index) => (
          <li key={id + "detail" + index}>{detail}</li>
        ))}
      </ul>
    </>
  )
}
