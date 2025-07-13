import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function TopRightFeaturedCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    <div className="bg-zinc-100 rounded-lg p-6 h-full flex flex-col text-zinc-800">
      <h2 className="text-2xl font-bold leading-tight mb-2">{title}</h2>
      <p className="text-zinc-600 text-sm mb-4 flex-grow">{summary}</p>
      <Link href={`/clanok/${id}`} className="relative block group w-full h-32 overflow-hidden rounded-lg mt-auto">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
    </div>
  );
}
