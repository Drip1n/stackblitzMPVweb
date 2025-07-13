'use client';

import { useState } from 'react';
import EventCard from '../components/EventCard';
import allEvents from '../lib/events';

const INITIAL_COUNT = 3; // Koľko kariet zobraziť na začiatku

export default function EventsPage() {
  const [visibleMpvCount, setVisibleMpvCount] = useState(INITIAL_COUNT);
  const [visibleMestoCount, setVisibleMestoCount] = useState(INITIAL_COUNT);

  const martinPreVasEvents = allEvents.filter(
    (event) => event.organizer === 'Martin pre Vás'
  );
  const mestoMartinEvents = allEvents.filter(
    (event) => event.organizer === 'Mesto Martin'
  );

  const visibleMpvEvents = martinPreVasEvents.slice(0, visibleMpvCount);
  const hasMoreMpvEvents = visibleMpvCount < martinPreVasEvents.length;

  const visibleMestoEvents = mestoMartinEvents.slice(0, visibleMestoCount);
  const hasMoreMestoEvents = visibleMestoCount < mestoMartinEvents.length;

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-4">Podujatia v Martine</h1>
      <p className="text-lg text-zinc-400 mb-12">
        Prehľad športových, kultúrnych a spoločenských akcií.
      </p>

      {/* Sekcia Martin pre Vás */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-2">Martin pre Vás</h2>
        <p className="text-zinc-400 mb-8">
          Športové, kultúrne a spoločenské podujatia a akcie od Martin pre Vás.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMpvEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
        {hasMoreMpvEvents && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleMpvCount((prev) => prev + 3)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Zobraziť viac
            </button>
          </div>
        )}
      </section>

      {/* Sekcia Mesto Martin */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Mesto Martin</h2>
        <p className="text-zinc-400 mb-8">
          Mestské podujatia a akcie pre verejnosť.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMestoEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
        {hasMoreMestoEvents && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleMestoCount((prev) => prev + 3)}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Zobraziť viac
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
