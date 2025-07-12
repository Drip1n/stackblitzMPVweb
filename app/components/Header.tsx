import Image from 'next/image';

export default function Header() {
  // Dočasné dáta, neskôr budú dynamické
  const userName = 'Milan';
  const quote = 'Každý deň je nová príležitosť zmeniť svoj život.';

  return (
    <header className="max-w-screen-xl mx-auto px-8 py-4">
      {/* === 1. Horná lišta: Pozdrav a citát === */}
      <div>
        <p className="text-base">Dobrý deň, {userName} (:</p>
        <p className="text-sm italic text-zinc-400">{quote}</p>
      </div>

      {/* === 2. Stredná lišta: Logo, Search, Menu === */}
      <div className="mt-4 flex items-center justify-between rounded-lg bg-zinc-800/50 px-4 py-3">
        {/* LAVA STRANA: Logo */}
        <div>
          <Image
            src="/logowithtext.png"
            alt="Logo a nápis Martin pre Vás"
            width={200}
            height={50}
            priority
          />
        </div>

        {/* STRED: Vyhľadávanie */}
        <div className="flex items-center gap-2 rounded-lg bg-zinc-700 px-3 py-1.5">
          <input
            type="text"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* PRAVA STRANA: Hamburger Menu */}
        <button className="flex h-6 w-8 flex-col justify-between">
          <span className="h-0.5 w-full rounded-full bg-white"></span>
          <span className="h-0.5 w-full rounded-full bg-white"></span>
          <span className="h-0.5 w-full rounded-full bg-white"></span>
        </button>
      </div>

      {/* === 3. Spodná lišta: Navigácia, Info === */}
      <div className="mt-4 flex items-center justify-between text-sm">
        {/* LAVA STRANA: Navigácia */}
        <nav className="flex items-center gap-2 rounded-full bg-zinc-800/50 p-1">
          <a
            href="#"
            className="rounded-full bg-white px-4 py-1.5 font-semibold text-black"
          >
            Správy
          </a>
          <a
            href="#"
            className="rounded-full px-4 py-1.5 text-zinc-300 hover:bg-zinc-700"
          >
            Podujatia
          </a>
        </nav>

        {/* PRAVA STRANA: Info panel */}
        <div className="flex items-center gap-5 text-zinc-400">
          <span>13:40 | 06.07.2025</span>
          <span>24 °C Martin</span>
          <span>Meniny: Patrik, Patrícia</span>
          <span>Deň bozku</span>
        </div>
      </div>
    </header> // <-- TENTO RIADOK CHÝBAL
  );
}