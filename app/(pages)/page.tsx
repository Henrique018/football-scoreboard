import { Suspense } from 'react';
import { unstable_cacheLife as cacheLife } from 'next/cache';

import { getGames } from '@/services/espn/games';
import GameCard from '@/components/game-card';
import DateFilters from '@/components/date-filters';
import { Skeleton } from '@/components/skeleton';

export default async function Home() {
  'use cache';
  cacheLife('hours');

  const { events } = await getGames('20250426');

  console.log(events);

  return (
    <div className="flex flex-col p-4 container mx-auto md:pt-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-mono">Games</h1>

        <Suspense>
          <DateFilters />
        </Suspense>
      </div>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 md:gap-6">
        <Suspense fallback={<Skeleton className="h-[150px] w-full rounded-2xl" />}>
          {events.map((game) => (
            <GameCard
              key={game.id}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              status={game.status}
              time={game.time}
              location={game.location}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
