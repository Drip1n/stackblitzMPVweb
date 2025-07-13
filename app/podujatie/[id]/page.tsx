import allEvents from '@/app/lib/events';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = allEvents.find(
    (event) => event.id === parseInt(params.id)
  );

  if (!event) {
    notFound();
  }

  return (
    <main className="max-w-screen-md mx-auto px-8 py-12">
      <Link href="/podujatia" className="text-zinc-400 hover:text-white mb-8 block">
        &larr; Späť na všetky podujatia
      </Link>

      <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
        {event.title}
      </h1>

      <div className="flex items-center gap-4 text-zinc-400 mb-8">
        <span>Organizátor: {event.organizer}</span>
      </div>

      <Image
        src={event.imageUrl}
        alt={event.title}
        width={768}
        height={432}
        className="w-full rounded-lg mb-8"
        priority
      />

      <div className="prose prose-invert prose-lg max-w-none">
        <p>{event.description}</p>
      </div>
    </main>
  );
}
