// context/HeaderContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react'

interface HeaderContextType {
  hideHeader: boolean
  setHideHeader: (value: boolean) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [hideHeader, setHideHeader] = useState(false)

  return (
    <HeaderContext.Provider value={{ hideHeader, setHideHeader }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeader = () => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }
  return context
}
