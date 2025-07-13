import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; summary: string; };

export default function RightFeaturedCard({ id, title, summary, imageUrl }: CardProps) {
  return (
    <Link href={`/clanok/${id}`} className="relative block group w-full h-full">
      {/* Biely štvorec v pozadí */}
      <div className="absolute bottom-0 right-0 w-11/12 h-5/6 bg-white rounded-lg"></div>
      
      {/* Hlavný kontajner pre obrázok a text */}
      <div className="relative w-full h-full p-4">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="text-3xl font-bold leading-tight">{title}</h2>
            <p className="mt-2 text-zinc-200 hidden md:block max-w-lg">{summary}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
