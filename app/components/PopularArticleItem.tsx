import Link from 'next/link';

type PopularArticleItemProps = {
  id: number;
  title: string;
  readTime: string;
};

export default function PopularArticleItem({
  id,
  title,
  author,
  readTime,
}: { id: number; title: string; author: string; readTime: string; }) {
  return (
    <Link href={`/clanok/${id}`} className="group block">
      <h3 className="text-lg font-bold text-zinc-800 leading-tight group-hover:text-brand-blue transition-colors">
        {title}
      </h3>
      <p className="text-xs text-zinc-500 mt-1">
        By {author} &bull; {readTime}
      </p>
    </Link>
  );
}
