import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Martin pre Vás',
  description: 'Správy a podujatia z Martina a okolia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      {/* Celé pozadie je tmavé */}
      <body className={`${inter.variable} bg-zinc-900 text-zinc-50 font-sans`}>
        <Header />
        {/* Obsah stránky sa vloží sem */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
