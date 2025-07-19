import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopSideArticleCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    <div className="relative h-full">

      {/* =====================================================================
          === 1. SIVÉ POZADIE - KONTROLA VÝŠKY ZOSPODU ===
          =====================================================================
          `bottom-[-1rem]`: Toto je tvoja hodnota. Tu môžeš presne meniť,
          o koľko podklad presahuje dole. Napr. `bottom-[-2rem]`, `bottom-0`, atď.
      */}
      <div className='
        absolute z-0 
        bg-zinc-800
        rounded-none 
        shadow-lg
        top-0 right-0 bottom-[-0.7rem] left-[-2rem]
      ' />
      
      {/* Kontajner s obsahom - musí mať rovnaké rozmery ako pozadie */}
      <div className='
        absolute z-10
        top-0 right-0 bottom-[-1rem] left-[-2rem]
        
        p-5 flex gap-5
        items-center // ✨ ZMENA: Táto trieda vertikálne vycentruje textovú aj obrázkovú časť.
      '>
        
        {/* --- ✍️ Ľavá (textová) časť --- */}
        <div className="flex flex-col w-1/2 text-white h-full justify-top">
          
          {/* =========================================================================
              === 2. ZMENA: Celý text je teraz jeden klikateľný odkaz ===
              =========================================================================
          */}
          <Link href={`/clanok/${id}`} className="text-white hover:text-zinc-300 transition-colors">
            <p className='text-base'>
              {summary}... {/* Pridané tri bodky na koniec */}
            </p>
          </Link>
        </div>

        {/* --- 🖼️ Pravá (obrázková) časť s nadpisom --- */}
        <Link href={`/clanok/${id}`} className='w-1/2 h-full relative rounded-none overflow-hidden group'>
          <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg font-bold leading-tight drop-shadow-md">
                  {title}
              </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}