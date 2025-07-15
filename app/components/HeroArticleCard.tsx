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
    // 1. Vonkajší kontajner, ktorý je BIELYM RÁMIKOM.
    // Padding (p-4) vytvára biely priestor okolo vnútorného obsahu.
    <div className="bg-white rounded-lg h-full w-full p-4">
      {/* 2. Odkaz s obrázkom a textom. */}
      <Link href={`/clanok/${id}`} className="relative block group w-full h-full rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        {/* Jemný gradient na obrázku pre lepšiu čitateľnosť textu */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Kontajner pre text */}
        <div className="absolute bottom-0 left-0 p-8 text-white w-full">
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
      </Link>
    </div>
  );
}
