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

      {/* === 2. Stredná lišta: Logo, Search, Menu (zatiaľ prázdna) === */}
      <div className="mt-4 h-16 bg-zinc-800/50 rounded-lg">
        {/* TODO: Príde neskôr */}
      </div>

      {/* === 3. Spodná lišta: Navigácia, Info (zatiaľ prázdna) === */}
      <div className="mt-4 h-12 bg-zinc-800/50 rounded-lg">
        {/* TODO: Príde neskôr */}
      </div>
    </header>
  );
}
