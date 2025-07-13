import Image from 'next/image';
import Link from 'next/link';

type SideFeaturedCardProps = {
  id: number;
  title: string;
  imageUrl: string;
};

export default function SideFeaturedCard({ id, title, imageUrl }: SideFeaturedCardProps) {
  return (
    <Link href={`/clanok/${id}`} className="relative block group w-full h-full overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
}
