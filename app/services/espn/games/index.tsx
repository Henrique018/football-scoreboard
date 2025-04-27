import { mapToGames } from '@/utils/mappers/mapToGames';

export const getGames = async (
  dates: string,
  league: string = 'bra.1',
  region?: string,
  lang?: string,
) => {
  const res = await fetch(
    `https://site.web.api.espn.com/apis/personalized/v2/scoreboard/header?sport=soccer&league=${league}&region=${
      lang || 'br'
    }&lang=${
      region || 'pt'
    }&contentorigin=deportes&configuration=SITE_DEFAULT&platform=web&tz=America%2FNew_York&postalCode=01101-080&dates=${dates}`,
    // {
    //   cache: 'force-cache',
    // },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return mapToGames(data.sports[0]);
};
