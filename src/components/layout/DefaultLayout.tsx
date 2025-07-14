'use client'

import React, { ReactNode } from 'react'
import { TheFooter } from './TheFooter'
import TheHeader from './TheHeader'
import TheSidebar from './TheSidebar'
import { MenuProvider } from '../context/MenuContext'
import { HeaderProvider, useHeader } from '../context/HeaderContext'

interface DefaultLayoutProps {
  children: ReactNode
}

const LayoutContent = ({ children }: DefaultLayoutProps) => {
  const { hideHeader } = useHeader()

  return (
    <div className="w-full max-w-[600px] md:w-[600px]">
      {!hideHeader && <TheHeader />}
      <TheSidebar />
      <div className={`${hideHeader ? 'pt-0' : 'pt-16'} pb-16`}>{children}</div>
      <TheFooter />
    </div>
  )
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="mx-auto h-screen w-full max-w-[600px] bg-white font-pretendard md:w-[600px] md:h-screen">
      <MenuProvider>
        <HeaderProvider>
          <LayoutContent>{children}</LayoutContent>
        </HeaderProvider>
      </MenuProvider>
    </div>
  )
}
