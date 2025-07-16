import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; author: string; readTime: string; summary: string; };

export default function BottomSideArticleCard({ id, title, imageUrl, author, readTime, summary }: CardProps) {
  return (
    // 1. Odkaz obaľuje celý kontajner
    // Tento komponent nemá vlastné pozadie, preberá ho od rodiča v `page.tsx` (div s bg-white)
    <Link href={`/clanok/${id}`} className="group flex items-center gap-4 p-4 h-full">
      {/* 2. Obrázok */}
      <div className="relative w-32 h-full flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* 3. Textová časť */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-zinc-800 leading-tight group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          By {author} &bull; {readTime}
        </p>
        {/* Súhrn je skrytý na najmenších obrazovkách (hidden), zobrazí sa od `sm` breakpointu (sm:block) */}
        <p className="text-sm text-zinc-600 mt-2 hidden sm:block">
          {summary}
        </p>
      </div>
    </Link>
  );
}