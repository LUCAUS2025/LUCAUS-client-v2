'use client';


import { MenuProvider } from '@/components/context/MenuContext';
import { ReactNode } from 'react';


export function Providers({ children }: { children: ReactNode }) {
  return <MenuProvider>{children}</MenuProvider>;
}
