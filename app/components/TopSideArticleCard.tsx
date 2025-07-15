import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopSideArticleCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    // Hlavný kontajner so svetlosivým pozadím
    <div className="bg-zinc-100 rounded-lg p-6 h-full flex flex-col text-zinc-800 shadow-lg">
      <p className="text-zinc-600 text-base mb-4 flex-grow">{summary}</p>
      
      {/* Obrázková časť s nadpisom */}
      <Link href={`/clanok/${id}`} className="relative block group w-full h-40 overflow-hidden rounded-lg mt-auto">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
