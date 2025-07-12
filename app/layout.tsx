import type { Metadata } from 'next';
import './globals.css';
import Header from '../app/components/Header';

export const metadata: Metadata = {
  title: 'Martin pre Vás',
  description: 'Správy a podujatia z Martina a okolia.',
};

// ...
export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body className="bg-zinc-900 text-zinc-50">
        <Header /> {/* TOTO SME PRIDALI */}
        {children}
      </body>
    </html>
  );
}
