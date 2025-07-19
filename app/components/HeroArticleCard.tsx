import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id: number;
  title: string;
  imageUrl: string;
  summary: string;
  author: string;
  readTime: string;
};

export default function HeroArticleCard({ id, title, imageUrl, summary, author, readTime }: CardProps) {
  return (
    // =======================================================================
    // === KROK 1: Z bieleho podkladu spravíme flex kontajner ===
    // =======================================================================
    <div className="
      bg-white
      rounded-none
      h-full w-full
      p-3 md:p-5
      
      flex items-top justify-center // ✨ ZMENA: Tieto triedy vycentrujú vnorený obrázok na stred.
    ">
      {/* =======================================================================
          === KROK 2: OVLÁDANIE VÝŠKY OBRÁZKA JE TERAZ TU ===
          =======================================================================
      */}
      <Link href={`/clanok/${id}`} className="
        relative block group
        w-full // Šírka ostáva 100%
        h-[82%] md:h-[100%] // 📏 VÝŠKA OBRÁZKA: Tu priamo ovládaš výšku obrázka.
                          //    `h-[90%]` znamená, že na mobile bude obrázok vysoký 90% z celkovej výšky karty.
                          //    `md:h-[95%]` znamená, že na desktope bude vysoký 95%.
                          //    Skús hodnoty `h-[80%]`, `h-full`, `h-[50%]` atď.
        rounded-none overflow-hidden
      ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white w-full">
          <h2 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 mt-2">
            By {author} &bull; {readTime}
          </p>
          <p className="mt-2 text-zinc-200 text-xs md:text-base line-clamp-2 md:line-clamp-3">
            {summary}
          </p>
        </div>
      </Link>
    </div>
  );
}