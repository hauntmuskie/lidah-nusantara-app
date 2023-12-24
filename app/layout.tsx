import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lidah Nusantara',
  description: 'Lidah Nusantara adalah sebuah website yang menyediakan berbagai macam resep masakan nusantara',
  keywords: 'resep, masakan, nusantara, indonesia, makanan, lidah, nusantara, lidah nusantara',
  applicationName: 'Lidah Nusantara',
  authors: [
    {
      name: 'Kelompok 3 R5Q @unindra 2023',
      url: 'https://lidahnusantara.pages.dev',
    },
  ],
  robots: 'index, follow',
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
