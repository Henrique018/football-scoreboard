import { Suspense } from 'react';
import { unstable_cacheLife as cacheLife } from 'next/cache';

import { fetchStandings } from '@/services/espn';
import Table from '@/components/table';
import { columns } from './columns';

export default async function StandingsPage() {
  'use cache';
  cacheLife('minutes');

  const { standings } = await fetchStandings();

  return (
    <div className="flex flex-col px-4 container mx-auto md:pt-8 mb-20 sm:mb-6">
      <h1 className="hidden sm:block text-2xl font-mono mb-4 sm:mb-8">Standings</h1>

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Table columns={columns} data={standings} />
      </Suspense>
    </div>
  );
}
