import Image from 'next/image';
import Link from 'next/link';

type FeaturedArticleCardProps = {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
};

export default function FeaturedArticleCard({
  id,
  title,
  summary,
  imageUrl,
}: FeaturedArticleCardProps) {
  return (
    <Link href={`/clanok/${id}`} className="block group">
      <article className="flex flex-col overflow-hidden rounded-lg bg-zinc-800/50">
        <div className="overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={450}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl group-hover:text-white/80">
            {title}
          </h2>
          <p className="mt-4 text-zinc-300">{summary}</p>
        </div>
      </article>
    </Link>
  );
}