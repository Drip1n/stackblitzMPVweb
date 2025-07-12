import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'; // Uistite sa, že cesta je správna
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Martin pre Vás',
  description: 'Správy a podujatia z Martina a okolia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${inter.variable} bg-zinc-900 text-zinc-50 font-sans`}
      >
        <Header />
        <Footer />
        {children}
      </body>
    </html>
  )
}