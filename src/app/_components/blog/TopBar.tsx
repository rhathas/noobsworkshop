import CaretDownIcon from "@/statics/icons/caret-down.svg"
export const TopBar = () => {
  return (
    <div className={"mt-2 flex flex-row gap-2"}>
      <div className={"flex grow flex-row items-center justify-between rounded bg-card p-4"}>
        <p className={"font-semibold text-gray-200"}>Tags</p>
        <CaretDownIcon className={"size-4 fill-gray-200"} />
      </div>
      {/*<div className={"flex flex-row items-center rounded bg-card px-5 py-4"}>*/}
      {/*  <SearchIcon className={"fill-gray-200"} />*/}
      {/*</div>*/}
    </div>
  )
}
