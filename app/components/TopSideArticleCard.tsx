import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopSideArticleCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    <div className="relative h-full">
      {/* Sivé pozadie (jeho veľkosť je riadená hodnotami `bottom` a `left`) */}
      <div className='absolute z-0 bg-zinc-800 rounded-none shadow-lg top-0 right-0 bottom-[-0.6rem] md:bottom-[-1.6rem] left-[-1rem] md:left-[-2rem]' />
      
      {/* Kontajner s obsahom */}
      <div className='absolute z-10 top-0 right-0 bottom-[-0.6rem] md:bottom-[-1.6rem] left-[-1rem] md:left-[-2rem] p-3 md:p-5 flex gap-3 md:gap-5 items-center'>
        
        {/* =====================================================================
            === ✍️ KONTROLA TEXTU ===
            =====================================================================
        */}
        <div className="
          flex flex-col h-full justify-center
          w-2/5 // 📏 ŠÍRKA TEXTU: Zaberá 1/2. Zmeň na `w-3/5` (viac miesta) alebo `w-2/5` (menej miesta).
          text-white
        ">
          <Link href={`/clanok/${id}`} className="text-white hover:text-zinc-300 transition-colors">
            {/* --- Veľkosť preview textu --- */}
            <p className='
              text-[10px] md:text-base // ✍️ VEĽKOSŤ PÍSMA: Mobil `text-xs`, Desktop `text-base`.
              line-clamp-3 md:line-clamp-none
            '>
              {summary}...
            </p>
          </Link>
        </div>

        {/* =====================================================================
            === 🖼️ KONTROLA OBRÁZKA ===
            =====================================================================
        */}
        <Link href={`/clanok/${id}`} className='
          relative rounded-none overflow-hidden group
          w-3/5 // 📏 ŠÍRKA OBRÁZKA: Zaberá 1/2. Musí dopĺňať šírku textu (ak je text `w-3/5`, obrázok daj `w-2/5`).
          h-full // 📏 VÝŠKA OBRÁZKA: `h-full` znamená, že vyplní celú výšku rodiča.
                 //    Pre menší obrázok skús `h-[80%]` alebo `h-5/6`.
        '>
          <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-2 md:p-4 text-white">
              {/* --- Veľkosť nadpisu --- */}
              <h3 className="
                text-sm md:text-lg // ✍️ VEĽKOSŤ PÍSMA: Mobil `text-base`, Desktop `text-lg`.
                font-bold leading-tight drop-shadow-md
              ">
                  {title}
              </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}