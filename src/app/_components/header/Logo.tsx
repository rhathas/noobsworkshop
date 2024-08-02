import Link from "next/link"
import { Rubik } from "next/font/google"
import { clsx } from "clsx"

const rubik = Rubik({ subsets: ["latin"] })
export const Logo = () => {
  return (
    <Link
      href={"/"}
      className={`
        transition-all duration-200 ease-in-out
        hover:text-primary
      `}
    >
      <p className={clsx(rubik.className, "font-semibold")}>
        noob
        <span
          className={`
            text-gray-300
            hover:text-secondary
          `}
        >
          &apos;
        </span>
        s workshop
      </p>
    </Link>
  )
}
