import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Devy Portfolio',
  description: 'A portfolio website made by Yuto-dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
