import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blue Phoenix',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
