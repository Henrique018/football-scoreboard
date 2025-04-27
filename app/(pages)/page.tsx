import { Suspense } from 'react';

import { getGames } from '@/services/espn/games';
import GameCard from '@/components/game-card';
import AppFilters from '@/components/app-filters';
import { Skeleton } from '@/components/skeleton';

type HomePageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { league, date } = await searchParams;
  const { leagueName, events, smartDates } = await getGames(date || '', league);

  return (
    <div className="flex flex-col p-4 container mx-auto md:pt-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="hidden sm:block text-2xl font-mono">{leagueName}</h1>

        <Suspense>
          <AppFilters showDatePicker smartDates={smartDates} />
        </Suspense>
      </div>

      {events.length === 0 && (
        <div className="flex items-center justify-center w-full h-[150px]">
          <h2 className="text-lg font-mono">No games available for this date</h2>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        <Suspense
          fallback={
            <>
              <Skeleton className="h-[150px] w-full rounded-2xl" />
              <Skeleton className="h-[150px] w-full rounded-2xl" />
              <Skeleton className="h-[150px] w-full rounded-2xl" />
            </>
          }
        >
          {events?.map((game) => (
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
