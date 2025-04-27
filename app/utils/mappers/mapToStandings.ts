import { StandingsRoot } from '@/services/espn/standings/types';

export const mapStandings = (standings: StandingsRoot) => {
  if (!standings || !standings.children?.[0]?.standings?.entries) {
    return [];
  }

  const entries = standings.children?.[0].standings.entries.map((entry, idx) => {
    const stats = entry.stats.reduce((acc, stat) => {
      acc[stat.name] = Number(stat.value) || 0;
      return acc;
    }, {} as Record<string, number>);

    return {
      rank: idx + 1,
      teamId: entry.team.id,
      logo: entry.team?.logos[0].href || '',
      team: entry.team.displayName,
      gamesPlayed: stats.gamesPlayed,
      wins: stats.wins,
      draws: stats.ties,
      losses: stats.losses,
      goalsFor: stats.pointsFor,
      goalsAgainst: stats.pointsAgainst,
      goalDifference: stats.pointDifferential,
      points: stats.points,
    };
  });

  return entries;
};

export type Standings = ReturnType<typeof mapStandings>;
