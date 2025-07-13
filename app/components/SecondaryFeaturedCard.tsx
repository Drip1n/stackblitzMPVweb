import Link from 'next/link';

type SecondaryFeaturedCardProps = {
  id: number;
  title: string;
};

export default function SecondaryFeaturedCard({
  id,
  title,
}: SecondaryFeaturedCardProps) {
  return (
    <Link
      href={`/clanok/${id}`}
      className="block group p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors h-full flex flex-col justify-center"
    >
      <h3 className="text-xl font-bold group-hover:text-white/80">
        {title}
      </h3>
    </Link>
  );
}
