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
    <div className="relative w-full h-full">
      {/* Biely štvorec v pozadí */}
      <div className="absolute bottom-0 right-0 w-11/12 h-5/6 bg-white rounded-lg"></div>
      
      {/* Hlavný kontajner pre obrázok a text */}
      <Link href={`/clanok/${id}`} className="relative block group w-full h-full p-4">
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute top-0 left-0 p-8 text-white w-full h-full flex flex-col justify-end">
            <h2 className="text-4xl font-bold leading-tight drop-shadow-lg">
              {title}
            </h2>
            <p className="text-sm text-zinc-300 mt-2">
              By {author} &bull; {readTime}
            </p>
            <p className="mt-4 text-zinc-200 hidden md:block max-w-lg text-base">
              {summary}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
