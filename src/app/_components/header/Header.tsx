"use client"

import { DesktopNavBarLinks } from "@/app/_components/header/DesktopNavBarLinks"
import { MobileNavigation } from "@/app/_components/header/MobileNavigation"
import { Logo } from "@/app/_components/header/Logo"

const Header = () => {
  return (
    <header
      className={`
        relative flex flex-row justify-between rounded bg-card p-4
        lg:px-8
      `}
    >
      <Logo />
      <DesktopNavBarLinks />
      <MobileNavigation />
    </header>
  )
}

export default Header
