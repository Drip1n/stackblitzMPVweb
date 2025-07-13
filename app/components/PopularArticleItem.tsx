import Link from 'next/link';

type PopularArticleItemProps = {
  id: number;
  title: string;
  readTime: string;
};

export default function PopularArticleItem({
  id,
  title,
  readTime,
}: PopularArticleItemProps) {
  return (
    <Link href={`/clanok/${id}`} className="group block">
      <p className="font-semibold group-hover:text-white/80 leading-tight">
        {title}
      </p>
      {/* Čas čítania môžeme skryť, ak nie je v dizajne, alebo nechať */}
      {/* <p className="text-sm text-zinc-400 mt-1">{readTime}</p> */}
    </Link>
  );
}
