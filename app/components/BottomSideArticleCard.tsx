import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; author: string; readTime: string; summary: string; };

export default function BottomSideArticleCard({ id, title, imageUrl, author, readTime, summary }: CardProps) {
  return (
    // Používame záporný margin, aby sa karta posunula na úplný okraj bieleho pozadia.
    <Link href={`/clanok/${id}`} className="group relative block h-full overflow-hidden ml-[-2rem]">
      
      {/* =====================================================================
          === 🖼️ OBRÁZOK - ZMENA VÝŠKY ZOSPODU ===
          =====================================================================
          `bottom-0` sme zmenili na `bottom-4`. To znamená, že obrázok skončí
          4 jednotky (1rem alebo 16px) NAD spodným okrajom karty.
          Skús hodnoty `bottom-6`, `bottom-8` pre ešte väčšiu medzeru.
      */}
      <div className="absolute left-0 top-0 bottom-4 w-48 rounded-none overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. TEXTOVÁ ČASŤ */}
      <div className="
        h-full
        flex flex-col
        pt-4
        ml-48 pl-4 pr-4
      ">
        <h3 className="text-lg font-bold text-zinc-800 leading-tight group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          By {author} &bull; {readTime}
        </p>

        {/* =================================================================
            === ✨ OPRAVA: PREVIEW TEXT (SÚHRN) JE VLOŽENÝ TU ===
            =================================================================
            Tento riadok v tvojom poslednom kóde chýbal.
        */}
        <p className="text-sm text-zinc-600 mt-2">
          {summary}
        </p>
      </div>
    </Link>
  );
}