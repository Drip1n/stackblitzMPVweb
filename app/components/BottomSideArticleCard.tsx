import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; author: string; readTime: string; summary: string; };

export default function BottomSideArticleCard({ id, title, imageUrl, author, readTime, summary }: CardProps) {
  return (
    <Link href={`/clanok/${id}`} className="group flex items-center gap-4 p-4 h-full">
      <div className="relative w-32 h-full flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-zinc-800 leading-tight group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          By {author} &bull; {readTime}
        </p>
        <p className="text-sm text-zinc-600 mt-2 hidden sm:block">
          {summary}
        </p>
      </div>
    </Link>
  );
}
