import { ESPN_API_URL } from '@/config/constants';
import { mapStandings } from '@/utils/mappers/mapToStandings';

export const fetchStandings = async (leagueId: string = 'bra.1', season: number = 2025) => {
  const response = await fetch(
    `${ESPN_API_URL}/${leagueId}/standings?&contentorigin=deportes&season=${season}&sort=rank%3Aasc`,
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
