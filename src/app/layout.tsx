import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '2025 LUCAUS : 청람',
  description: '중앙대학교 루카우스 축제 사이트',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
