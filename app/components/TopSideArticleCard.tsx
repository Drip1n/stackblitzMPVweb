import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopSideArticleCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    <div className="bg-zinc-800/90 rounded-lg p-6 h-full flex flex-col text-white shadow-lg">
      <p className="text-zinc-300 text-base mb-4 flex-grow">{summary}</p>
      <Link href={`/clanok/${id}`} className="relative block group w-full h-40 overflow-hidden rounded-lg mt-auto">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold leading-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
