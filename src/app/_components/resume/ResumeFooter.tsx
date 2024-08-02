"use client"

import CaretUp from "@/statics/icons/caret-up.svg"

export const ResumeFooter = () => {
  const toTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    console.log("scrollToTop")
  }
  return (
    <div
      className="mt-4 flex cursor-pointer flex-row items-center justify-center gap-2 rounded bg-card p-4 text-secondary"
      onClick={() => toTopHandler()}
    >
      <p>Top</p>
      <CaretUp className={"fill-secondary"} />
    </div>
  )
}
