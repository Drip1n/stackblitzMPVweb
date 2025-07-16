import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopSideArticleCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    // Hlavný kontajner, ktorý definuje "pôvodný" priestor karty
    <div className="relative h-full">

      {/* Sivé pozadie (bez zmeny) */}
      <div className='
        absolute z-0 
        bg-zinc-800
        rounded-none 
        shadow-lg
        top-0 right-0 bottom-[-3.25rem] left-[-2rem]
      ' />
      
      {/* =========================================================================
          === KĽÚČOVÁ ZMENA JE TU: Kontajner s obsahom teraz kopíruje pozadie ===
          =========================================================================
          Tento `div` už nie je `relative h-full`, ale je tiež `absolute` a má
          rovnaké rozmery (top, right, bottom, left) ako sivé pozadie za ním.
          Vďaka tomu sa text a obrázok roztiahnu na celú plochu.
      */}
      <div className='
        absolute z-10
        top-0 right-0 bottom-[-3rem] left-[-2rem]
        
        p-5 flex gap-5
      '>
        
        {/* --- ✍️ Ľavá (textová) časť --- */}
        {/* Žiadne zmeny vnútri tejto časti */}
        <div className="
          flex flex-col 
          w-1/2         
          text-white
        ">
          <p className='text-white text-base flex-grow'>
            {summary}
          </p>
          <p className="text-sm text-white mb-2">
              Zistite viac o tomto príbehu. Inspiruj sa tymto zaujimavym clankom a pozri sa co sa mozes docitat viac
          </p>
          <Link href={`/clanok/${id}`} className="text-brand-blue font-semibold hover:underline">
            Čítať viac &rarr;
          </Link>
        </div>

        {/* --- 🖼️ Pravá (obrázková) časť s nadpisom --- */}
        {/* Žiadne zmeny vnútri tejto časti */}
        <Link href={`/clanok/${id}`} className='w-1/2 relative rounded-none overflow-hidden group'>
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