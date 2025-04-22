import { ColumnDef } from "@tanstack/react-table";

type StandingsColumn = {
  rank: number;
  team: string;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
};

export const useColumns = () => {
  const columns: ColumnDef<StandingsColumn>[] = [
    {
      header: "Rank",
      accessorKey: "rank",
    },
    {
      header: "Team",
      accessorKey: "team",
    },
    {
      header: "G",
      accessorKey: "gamesPlayed",
    },
    {
      header: "W",
      accessorKey: "wins",
    },
    {
      header: "D",
      accessorKey: "draws",
    },
    {
      header: "L",
      accessorKey: "losses",
    },
    {
      header: "GF",
      accessorKey: "goalsFor",
    },
    {
      header: "GA",
      accessorKey: "goalsAgainst",
    },
    {
      header: "GD",
      accessorKey: "goalDifference",
    },
    {
      header: "PTS",
      accessorKey: "points",
    },
  ];

  return columns;
};
