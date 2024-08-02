import { useDrawer } from "@/app/_components/header/MobileNavigation/DrawerProvider"

export const MobileNavigationMenuButton = () => {
  const { isDrawerOpen, handleDrawerToggle } = useDrawer()
  return (
    <>
      <span className="sr-only">Open navigation menu</span>
      <button
        onClick={handleDrawerToggle}
        className={`
          z-10 flex flex-col items-center justify-center
          lg:hidden
        `}
      >
        <span
          className={`
            block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out
            ${isDrawerOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"}
          `}
        ></span>
        <span
          className={`
            my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out
            ${isDrawerOpen ? "opacity-0" : "opacity-100"}
          `}
        ></span>
        <span
          className={`
            block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out
            ${isDrawerOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"}
          `}
        ></span>
      </button>
    </>
  )
}
