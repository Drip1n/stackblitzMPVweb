import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopSideArticleCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    // 1. Hlavný kontajner so svetlosivým pozadím
    <div className="bg-zinc-900 rounded- p-6 h-full flex flex-col text-zinc-800/70 shadow-lg">
      {/* 2. Text súhrnu */}
      {/* flex-grow zabezpečí, že text zaberie dostupný priestor a odtlačí obrázok dolu */}
      <p className="text-zinc-600 text-base mb-4 flex-grow">{summary}</p>
      
      {/* 3. Obrázková časť s nadpisom */}
      <Link href={`/clanok/${id}`} className="relative block group w-full h-40 overflow-hidden rounded-lg mt-auto">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Stmavenie obrázku pre lepšiu čitateľnosť */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}