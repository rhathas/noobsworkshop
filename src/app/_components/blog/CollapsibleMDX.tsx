"use client"

import { ReactNode, useState } from "react"
import CaretDown from "@/statics/icons/caret-down.svg"
import CaretUp from "@/statics/icons/caret-up.svg"
import { clsx } from "clsx"

type CollapsibleMDXProps = {
  title: string
  children: ReactNode
}

export const CollapsibleMDX = ({ title, children }: CollapsibleMDXProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const handleToggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed)
  }
  console.log("CollapsibleMDX children: ", children)
  return (
    <>
      <div
        className={`
          mt-2 flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded border border-gray-600 p-2
          text-secondary transition-all duration-200 ease-in-out
          hover:text-primary
        `}
        onClick={handleToggleCollapse}
      >
        <p className={"not-prose"}>{title}</p>
        {collapsed ? <CaretDown className={"fill-secondary"} /> : <CaretUp className={"fill-secondary"} />}
      </div>
      <div
        className={clsx(
          "overflow-hidden bg-root transition-all duration-300 ease-in-out",
          collapsed ? "max-h-0" : "max-h-[4000px]",
        )}
      >
        {children}
      </div>
    </>
  )
}
