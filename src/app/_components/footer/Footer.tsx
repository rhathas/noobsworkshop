import Link from "next/link"
import GithubIcon from "@/statics/icons/github.svg"

export const Footer = () => {
  return (
    <div className={"mt-8 flex w-full flex-col items-center gap-4 rounded bg-card p-4 pb-6"}>
      <div className={"flex flex-col items-center text-sm text-mid-gray"}>
        <p>
          <span className={"font-light"}>&copy;</span> 2024 Ogulcan Gündüz
        </p>
        <p>All rights Reserved.</p>
      </div>
      <Link
        href={"https://github.com/rhathas"}
        target="_blank"
        rel="noopener"
        className={"flex flex-row items-center gap-2"}
      >
        <GithubIcon className={"size-5 fill-gray-50"} />
        <p>Source Code</p>
      </Link>
    </div>
  )
}
