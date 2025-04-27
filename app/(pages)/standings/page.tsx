import { Suspense } from 'react';

import { fetchStandings } from '@/services/espn/standings';
import Table from '@/components/table';
import { columns } from './columns';
import AppFilters from '@/components/app-filters';

type StandingsPageProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function StandingsPage({ searchParams }: StandingsPageProps) {
  const { league } = await searchParams;
  const { standings } = await fetchStandings(league);

  return (
    <div className="flex flex-col px-4 container mx-auto md:pt-8 mb-20 sm:mb-6">
      <div className="flex items-center justify-between mb-4 sm:mb-8">
        <h1 className="hidden sm:block text-2xl font-mono">Standings</h1>

        <Suspense>
          <AppFilters />
        </Suspense>
      </div>

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Table columns={columns} data={standings} />
      </Suspense>
    </div>
  );
}
