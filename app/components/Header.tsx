'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, FormEvent, useEffect } from 'react'; // Pridali sme useEffect
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date()); // Stav pre aktuálny čas

  useEffect(() => {
    // Spustíme interval, ktorý každú sekundu aktualizuje čas
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Dôležité: vyčistíme interval, keď sa komponenta odpojí
    return () => clearInterval(timer);
  }, []); // Prázdne pole znamená, že sa efekt spustí iba raz po načítaní

  const userName = 'Milan';
  const quote = 'Každý deň je nová príležitosť zmeniť svoj život.';

  // Formátovanie dátumu a času
  const formattedTime = currentTime.toLocaleTimeString('sk-SK', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedDate = currentTime.toLocaleDateString('sk-SK', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/?search=${searchTerm}`);
  };

  return (
    <>
      <header className="max-w-screen-xl mx-auto px-8 py-4">
        {/* ... prvá a druhá časť hlavičky zostávajú rovnaké ... */}
        <div>
          <p className="text-base">Dobrý deň, {userName} (:</p>
          <p className="text-sm italic text-zinc-400">{quote}</p>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg bg-zinc-800/50 px-4 py-3">
          <div>
            <Image
              src="/logowithtext.png"
              alt="Logo a nápis Martin pre Vás"
              width={200}
              height={50}
              priority
            />
          </div>
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 rounded-lg bg-zinc-700 px-3 py-1.5"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Vyhľadaj v správach..."
              className="w-48 bg-transparent text-sm placeholder-zinc-400 focus:outline-none"
            />
            <button type="submit" className="text-zinc-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5"
              >
                <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </form>
          <button onClick={() => setIsMenuOpen(true)} className="flex h-6 w-8 flex-col justify-between">
            <span className="h-0.5 w-full rounded-full bg-white"></span>
            <span className="h-0.5 w-full rounded-full bg-white"></span>
            <span className="h-0.5 w-full rounded-full bg-white"></span>
          </button>
        </div>
        {/* === 3. Spodná lišta: Navigácia, Info === */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <nav className="flex items-center gap-2 rounded-full bg-zinc-800/50 p-1">
            <Link
              href="/"
              className={`rounded-full px-4 py-1.5 font-semibold transition-colors ${
                pathname === '/'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Správy
            </Link>
            <Link
              href="/podujatia"
              className={`rounded-full px-4 py-1.5 font-semibold transition-colors ${
                pathname === '/podujatia'
                  ? 'bg-white text-black'
                  : 'text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Podujatia
            </Link>
          </nav>
          {/* PRAVA STRANA: Info panel - teraz dynamický */}
          <div className="flex items-center gap-5 text-zinc-400">
            <span>{formattedTime} | {formattedDate}</span>
            <span>24 °C Martin</span>
            <span>Meniny: Patrik, Patrícia</span>
            <span>Deň bozku</span>
          </div>
        </div>
      </header>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
