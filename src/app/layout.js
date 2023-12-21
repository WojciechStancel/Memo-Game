import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aviation Memory Game',
  description: 'This is a simple game which helps you to train your memory',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/plane.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
