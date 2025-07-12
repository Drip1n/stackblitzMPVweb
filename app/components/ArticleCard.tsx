import Image from 'next/image';
import Link from 'next/link';

// Pridali sme 'id' do props
type ArticleCardProps = {
  id: number;
  title: string;
  imageUrl: string;
};

export default function ArticleCard({ id, title, imageUrl }: ArticleCardProps) {
  return (
    <Link href={`/clanok/${id}`} className="block group">
      <article className="rounded-lg overflow-hidden shadow-lg bg-zinc-800/50 h-full">
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