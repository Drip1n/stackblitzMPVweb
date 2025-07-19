import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; author: string; readTime: string; summary: string; };

export default function BottomSideArticleCard({ id, title, imageUrl, author, readTime, summary }: CardProps) {
  return (
    <Link href={`/clanok/${id}`} className="group relative block h-full overflow-hidden ml-[-1rem] md:ml-[-2rem]">
      
      {/* =====================================================================
          === 🖼️ KONTROLA OBRÁZKA ===
          =====================================================================
      */}
      <div className="
        absolute left-0
        rounded-none overflow-hidden
        transition-all duration-300

        /* --- ŠÍRKA OBRÁZKA --- */
        w-28 md:w-48  // 📏 Mobil: `w-28` (112px), Desktop: `w-48` (192px).
                      //    Zmeň `w-28` na `w-24` (užší) alebo `w-32` (širší) pre mobil.
                      //    Zmeň `md:w-48` na `md:w-40` alebo `md:w-52` pre desktop.

        /* --- VÝŠKA OBRÁZKA --- */
        top-0 bottom-20 md:top-4 md:bottom-5 // 📏 Medzera hore a dole. Menšie číslo = vyšší obrázok.
                                            //    `top-0 bottom-0` = plná výška.
      ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* =====================================================================
          === ✍️ KONTROLA TEXTU ===
          =====================================================================
      */}
      <div className="
        h-full flex flex-col justify-center transition-all duration-300

        /* --- ŠÍRKA TEXTOVÉHO PRIESTORU --- */
        ml-28 md:ml-48  // 📏 Musí byť rovnaké číslo ako v `w-` obrázka!
                        //    Ak zmeníš `w-28` na `w-32`, tu zmeň `ml-28` na `ml-32`.
        
        pl-3 pr-3 md:pl-4 md:pr-4 // Odsadenie textu od obrázka a pravého okraja.
      ">
        {/* --- Veľkosť nadpisu --- */}
        <h3 className="
          text-sm md:text-lg // ✍️ VEĽKOSŤ PÍSMA
          font-bold text-zinc-800 leading-tight group-hover:text-brand-blue transition-colors
        ">
          {title}
        </h3>
        {/* --- Veľkosť textu autora --- */}
        <p className="
          text-[6px] // ✍️ VEĽKOSŤ PÍSMA
          text-zinc-500 mt-1
        ">
          By {author} &bull; {readTime}
        </p>
        {/* --- Veľkosť preview textu --- */}
        <p className="
          text-xs md:text-sm // ✍️ VEĽKOSŤ PÍSMA
          text-zinc-600 mt-2
          line-clamp-2 md:line-clamp-3 // Obmedzenie počtu riadkov
        ">
          {summary}
        </p>
      </div>
    </Link>
  );
}