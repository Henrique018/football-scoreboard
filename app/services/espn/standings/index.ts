import { ESPN_API_URL } from '@/config/constants';
import { mapStandings } from '@/utils/mappers/mapToStandings';

export const fetchStandings = async (leagueId: string = 'bra.1', season: number = 2025) => {
  let currentSeason = season;
  if (leagueId !== 'bra.1' && leagueId !== 'bra.2') {
    currentSeason = new Date().getFullYear() - 1;
  }

  const response = await fetch(
    `${ESPN_API_URL}/${leagueId}/standings?&contentorigin=deportes&season=${currentSeason}&sort=rank%3Aasc`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch standings');
  }

  const data = await response.json();

  const standings = mapStandings(data);

  return {
    standings,
  };
};
