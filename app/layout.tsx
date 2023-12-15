import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, NavBar } from './component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <NavBar/>
      <main className='relative overflow-hidden mt-20 '>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
