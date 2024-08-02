import { createContext, useCallback, useContext, useMemo, useState } from "react"

interface DrawerContextType {
  isDrawerOpen: boolean
  handleDrawerToggle: () => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Use useCallback to memoize the function
  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((prevState) => !prevState)
  }, [])

  // Use useMemo to memoize the context value
  const value = useMemo(
    () => ({
      isDrawerOpen,
      handleDrawerToggle,
    }),
    [isDrawerOpen, handleDrawerToggle],
  )

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export const useDrawer = (): DrawerContextType => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider")
  }
  return context
}
