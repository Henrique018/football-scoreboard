import { GameStatus } from '@/components/game-card';
import { Sport } from '@/services/espn/games/types';

export const mapToGames = (sport: Sport) => {
  const events = sport.leagues[0].events.map((event) => {
    const homeTeam = event.competitors.find((team) => team.homeAway === 'home');
    const awayTeam = event.competitors.find((team) => team.homeAway === 'away');

    return {
      id: event.id,
      homeTeam: {
        id: homeTeam?.id || '',
        name: homeTeam?.displayName || '',
        logo: homeTeam?.logo || '',
        score: Number(homeTeam?.score) || 0,
      },
      awayTeam: {
        id: awayTeam?.id || '',
        name: awayTeam?.displayName || '',
        logo: awayTeam?.logo || '',
        score: Number(awayTeam?.score) || 0,
      },
      status: {
        type: event.fullStatus.type.name as GameStatus,
        completed: event.fullStatus.type.completed,
        clock: event.fullStatus.displayClock,
        period: event.fullStatus.period,
      },
      time: event.date,
      location: event.location || '',
    };
  });

  return events;
};
