import allArticles from '@/app/lib/articles'; // Zmena: bez {} zátvoriek
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = allArticles.find(
    (article) => article.id === parseInt(params.id)
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-screen-md mx-auto px-8 py-12">
      <Link href="/" className="text-zinc-400 hover:text-white mb-8 block">
        &larr; Späť na všetky správy
      </Link>
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
        {article.title}
      </h1>
      <div className="flex items-center gap-4 text-zinc-400 mb-8">
        <span>By {article.author}</span>
        <span>&bull;</span>
        <span>{article.readTime}</span>
      </div>
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={768}
        height={432}
        className="w-full rounded-lg mb-8"
        priority
      />
      <div className="prose prose-invert prose-lg max-w-none">
        <p>{article.content}</p>
      </div>
    </main>
  );
}