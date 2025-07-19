import Image from 'next/image';
import Link from 'next/link';

type EventCardProps = {
  id: number;
  title: string;
  imageUrl: string;
};

export default function EventCard({ id, title, imageUrl }: EventCardProps) {
  return (
    <Link href={`/podujatie/${id}`} className="block group">
      <article className="overflow-hidden rounded-lg bg-zinc-800/50">
        <div className="overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </article>
    </Link>
  );
}