import Link from "next/link"
import { useDrawer } from "@/app/_components/header/MobileNavigation/DrawerProvider"
import { clsx } from "clsx"

export const MobileMenuDrawer = () => {
  const { isDrawerOpen, handleDrawerToggle } = useDrawer()
  return (
    <div
      className={clsx(
        "absolute right-0 top-14 z-10 overflow-hidden transition-all duration-300",
        isDrawerOpen ? "max-h-96" : "max-h-0",
      )}
    >
      <ul className={"flex flex-col gap-1"}>
        <li
          className={`
            flex flex-col items-center justify-center rounded bg-card px-8 py-4 transition-all duration-200 ease-in-out
            hover:text-primary
          `}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`
            flex flex-col items-center justify-center rounded bg-card px-8 py-4 transition-all duration-200 ease-in-out
            hover:text-primary
          `}
        >
          <Link href={"/blog"} onClick={() => handleDrawerToggle()}>
            Blog
          </Link>
        </li>
        <li
          className={`
            flex flex-col items-center justify-center rounded bg-card px-8 py-4 transition-all duration-200 ease-in-out
            hover:text-primary
          `}
        >
          <Link href={"/resume"} onClick={() => handleDrawerToggle()}>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  )
}
