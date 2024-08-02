import { useDrawer } from "@/app/_components/header/MobileNavigation/DrawerProvider"

export const Overlay = () => {
  const { isDrawerOpen } = useDrawer()
  return (
    <div
      className={`
        absolute inset-x-0 top-0 z-10 h-svh bg-zinc-700 opacity-50 transition-all duration-300
        ${isDrawerOpen ? "block" : "hidden"}
      `}
    ></div>
  )
}
