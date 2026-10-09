import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tropical Snow',
  description: 'Hawaiian-style shave ice, cheesesteaks, wings, shrimp & fish.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
