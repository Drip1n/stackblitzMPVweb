import Link from 'next/link';

type MobileMenuProps = {
  onClose: () => void; // Funkcia na zatvorenie menu
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const menuItems = ['Profil', 'Nastavenia', 'Kontakt', 'Odhlásiť sa'];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
      <div className="fixed top-4 right-4 w-[calc(100%-2rem)] max-w-xs bg-zinc-900 rounded-lg shadow-lg p-6 z-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {menuItems.map(item => (
            <Link key={item} href="#" onClick={onClose} className="text-lg hover:text-white/80 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
