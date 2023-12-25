import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lidah Nusantara | Home',
  description: 'Lidah Nusantara adalah sebuah website yang menyediakan berbagai macam resep masakan nusantara',
  creator: 'Rionggo Rahardi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/assets/images/icon/team-icon.png" sizes="any" />
      </head>

      <body className={inter.className}>{children}</body>

    </html>
  )
}