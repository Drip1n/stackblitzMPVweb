'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import {
  Clock,
  Sun,
  Sparkles,
  Calendar,
  MapPin,
  MousePointerClick,
  Search,
  Globe,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const userName = 'Milan';
  const quote = 'Každý deň je nová príležitosť zmeniť svoj život.';
  const formattedTime = currentTime.toLocaleTimeString('sk-SK', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedDate = currentTime.toLocaleDateString('sk-SK', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      {/* KĽÚČOVÁ ZMENA JE TU:
        - Odstránil som vnorený 'div' kontajner.
        - Všetko sa teraz riadi šírkou tohto hlavného <header> elementu.
        - Nastavil som `max-w-7xl` pre viditeľne širší vzhľad.
        - TÚTO JEDNU TRIEDU (`max-w-7xl`) MÔŽEŠ MENIŤ, ABY SI OVLÁDAL ŠÍRKU.
      */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-8 pt-6 pb-4">
        {/* === 1. Horná lišta: Pozdrav, citát a čiara === */}
        <div className="text-center mb-5">
          <p className="text-lg">Dobrý deň, {userName} (:</p>
          <p className="text-sm italic text-zinc-400 mt-1">{quote}</p>
          <div className="w-48 h-px bg-brand-blue mx-auto mt-3"></div>
        </div>

        {/* === 2. Stredná lišta: Logo, Search, Menu === */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logowithtext.png"
              alt="Logo a nápis Martin pre Vás"
              width={280}
              height={70}
              priority
            />
          </Link>
          <div className="hidden md:flex items-center cursor-pointer">
            <div className="bg-brand-blue text-white pl-12 pr-8 py-2.5 rounded-l-md text-sm opacity-75">
              hľadaj v článkoch
            </div>
            <div className="bg-white text-black px-4 py-2.5 rounded-r-md font-bold text-sm flex items-center gap-2">
              hľadaj
              <Search size={16} />
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-6 w-8 flex-col justify-between"
          >
            <span className="h-0.5 w-full rounded-full bg-white"></span>
            <span className="h-0.5 w-full rounded-full bg-white"></span>
            <span className="h-0.5 w-full rounded-full bg-white"></span>
          </button>
        </div>

        {/* === 3. Spodná lišta: Info panel === */}
        <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-lg bg-zinc-800/70 p-5">
          {/* Navigácia */}
          <nav className="relative flex items-center gap-6 text-xl font-bold bg-zinc-900/50 p-1 rounded-md">
            <div
              className={`absolute top-0 bottom-0 h-full w-1/2 bg-brand-blue rounded-md transition-transform duration-300 ease-in-out ${
                pathname === '/podujatia' ? 'translate-x-full' : 'translate-x-0'
              }`}
            ></div>
            <Link
              href="/"
              className="relative z-10 flex items-center gap-2 px-5 py-1.5"
            >
              <MousePointerClick size={18} className="opacity-70" />
              Správy
            </Link>
            <Link
              href="/podujatia"
              className="relative z-10 flex items-center gap-2 px-5 py-1.5"
            >
              Podujatia
              <MousePointerClick size={18} className="opacity-70" />
            </Link>
          </nav>

          {/* Info Mriežka */}
          <div className="grid grid-cols-3 gap-x-10 gap-y-3 text-base text-zinc-300">
            <span className="flex items-center gap-2">
              <Clock size={16} /> {formattedTime}
            </span>
            <span className="flex items-center gap-2">
              <Sun size={16} /> 24 °C
            </span>
            <span className="flex items-center gap-2">
              <Sparkles size={16} /> Patrik, Patrícia
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Martin
            </span>
            <span className="flex items-center gap-2">
              <Globe size={16} /> Deň bozku
            </span>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
