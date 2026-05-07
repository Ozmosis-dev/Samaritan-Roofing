import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato-google',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Roofing Contractor Dahlonega GA | Samaritan Roofing',
  description:
    'Samaritan Roofing is your trusted roofing contractor in Dahlonega, GA offering roof replacement, repairs, gutters & more across North Georgia.',
  keywords:
    'roofing contractor Dahlonega GA, roof replacement, roof repair, North Georgia roofing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
