import Image from 'next/image';
import Link from 'next/link';

type CardProps = { id: number; title: string; imageUrl: string; };

export default function MainFeaturedCard({ id, title, imageUrl }: CardProps) {
  return (
    <Link href={`/clanok/${id}`} className="relative block group w-full h-full overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h2 className="text-4xl font-bold leading-tight drop-shadow-md">
          {title}
        </h2>
      </div>
    </Link>
  );
}
