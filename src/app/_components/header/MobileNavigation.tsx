import { MobileNavigationMenuButton } from "@/app/_components/header/MobileNavigation/MobileNavigationMenuButton"
import { DrawerProvider } from "@/app/_components/header/MobileNavigation/DrawerProvider"
import { MobileMenuDrawer } from "@/app/_components/header/MobileNavigation/MobileMenuDrawer"
import { Overlay } from "@/app/_components/header/MobileNavigation/Overlay"

export const MobileNavigation = () => {
  return (
    <DrawerProvider>
      <Overlay />
      <MobileNavigationMenuButton />
      <MobileMenuDrawer />
    </DrawerProvider>
  )
}
