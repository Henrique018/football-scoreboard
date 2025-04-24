'use client';

import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { Standings } from '@/utils/mappers/mapToStandings';

export const columns: ColumnDef<Standings[0]>[] = [
  {
    header: 'Rank',
    accessorKey: 'rank',
  },
  {
    header: 'Team',
    accessorKey: 'team',
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Image
          src={row.original.logo}
          alt={`${row.original.team} logo`}
          width={28}
          height={28}
          className="mr-2 hidden sm:inline-block"
        />
        <span className="font-semibold">{row.original.team}</span>
      </div>
    ),
  },
  {
    header: 'G',
    accessorKey: 'gamesPlayed',
  },
  {
    header: 'W',
    accessorKey: 'wins',
  },
  {
    header: 'D',
    accessorKey: 'draws',
  },
  {
    header: 'L',
    accessorKey: 'losses',
  },
  {
    header: 'GF',
    accessorKey: 'goalsFor',
  },
  {
    header: 'GA',
    accessorKey: 'goalsAgainst',
  },
  {
    header: 'GD',
    accessorKey: 'goalDifference',
  },
  {
    header: 'PTS',
    accessorKey: 'points',
  },
];
