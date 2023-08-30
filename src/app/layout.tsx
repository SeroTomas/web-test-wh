import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children, }: Props) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
