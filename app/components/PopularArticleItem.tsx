import Image from 'next/image';
import Link from 'next/link';

type PopularArticleItemProps = {
  id: number;
  title: string;
  readTime: string;
  imageUrl: string; // Pridali sme imageUrl
};

export default function PopularArticleItem({
  id,
  title,
  readTime,
  imageUrl,
}: PopularArticleItemProps) {
  return (
    <Link href={`/clanok/${id}`} className="group flex items-start gap-4">
      {/* Kontajner pre obrázok s fixnou veľkosťou */}
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={title}
          fill // Atribút 'fill' vyplní celý rodičovský kontajner
          className="object-cover" // Zabezpečí, že sa obrázok nedeformuje
        />
      </div>
      {/* Kontajner pre text */}
      <div>
        <p className="font-semibold group-hover:text-white/80 text-sm leading-tight">
          {title}
        </p>
        <p className="text-xs text-zinc-400 mt-1">{readTime}</p>
      </div>
    </Link>
  );
}
