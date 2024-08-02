import Link from "next/link"

export const DesktopNavBarLinks = () => {
  return (
    <ul
      className={`
        hidden flex-row gap-8
        lg:flex
      `}
    >
      <li>
        <Link
          href={"/blog"}
          className={`
            transition-all duration-200 ease-in-out
            hover:text-primary
          `}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href={"/resume"}
          className={`
            transition-all duration-200 ease-in-out
            hover:text-primary
          `}
        >
          Resume
        </Link>
      </li>
    </ul>
  )
}
