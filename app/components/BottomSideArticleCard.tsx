import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; author: string; readTime: string; summary: string; };

export default function BottomSideArticleCard({ id, title, imageUrl, author, readTime, summary }: CardProps) {
  return (
    <Link href={`/clanok/${id}`} className="group relative block h-full overflow-hidden ml-[-1rem] md:ml-[-2rem]">
      
      {/* =====================================================================
          === 🖼️ OBRÁZOK: Responzívna Šírka a Výška ===
          =====================================================================
      */}
      <div className="
        absolute left-0
        rounded-none overflow-hidden
        transition-all duration-300

        /* --- ŠÍRKA OBRÁZKA --- */
        w-28 md:w-48  // Mobil: `w-24` (96px), Desktop: `w-48` (192px)
                      // Zmeň `w-24` na `w-20` (užší) alebo `w-28` (širší) pre mobil
                      // Zmeň `w-48` na `w-40` alebo `w-52` pre desktop

        /* --- VÝŠKA OBRÁZKA --- */
        top-40 bottom-4          // Mobil: Začína 16px od vrchu a končí 16px pred spodkom (je menší a centrovaný)
        md:top-0 md:bottom-4    // Desktop: Začína úplne hore a končí 16px pred spodkom
                                // Zmeň `top-4` na `top-2` alebo `top-6` pre posun na mobile
      ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* =====================================================================
          === ✍️ TEXTOVÁ ČASŤ: Responzívna Šírka (cez margin) a Výška (cez padding) ===
          =====================================================================
      */}
      <div className="
        h-full
        flex flex-col
        justify-center
        transition-all duration-300

        /* --- ŠÍRKA TEXTOVÉHO PRIESTORU (nepriamo cez margin) --- */
        ml-28 md:ml-48  // Mobil: Okraj `ml-24`, aby sedel s obrázkom `w-24`
                        // Desktop: Okraj `ml-48`, aby sedel s obrázkom `w-48`
                        // Hodnota `ml-` by mala byť rovnaká ako `w-` obrázka

        /* --- VÝŠKA TEXTOVÉHO PRIESTORU (nepriamo cez padding) --- */
        py-2 md:py-4    // Mobil: Vertikálny padding `py-2` (menší)
                        // Desktop: Vertikálny padding `py-4` (väčší)
                        // `py` ovplyvňuje, ako ďaleko od horného/spodného okraja text začne
        
        pl-4 pr-4       // Odsadenie textu od obrázka a pravého okraja
      ">
        <h3 className="text-lg font-bold text-zinc-800 leading-tight group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          By {author} &bull; {readTime}
        </p>

        <p className="text-sm text-zinc-600 mt-2">
          {summary}
        </p>
      </div>
    </Link>
  );
}