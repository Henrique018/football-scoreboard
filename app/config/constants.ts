import { BallIcon } from '@/icons/ball';
import { TrophyIcon } from '@/icons/trophy';

export const routes = {
  '/': {
    icon: BallIcon,
    label: 'Games',
  },
  '/standings': {
    icon: TrophyIcon,
    label: 'Standings',
  },
};

export const ESPN_API_URL = 'https://site.web.api.espn.com/apis/v2/sports/soccer';

export const LEAGUES = {
  'Campeonato brasileiro série A': 'bra.1',
  'Campeonato brasileiro série B': 'bra.2',
  'Premier League': 'eng.1',
  'La Liga': 'esp.1',
  'Serie A': 'ita.1',
  Bundesliga: 'ger.1',
  'Ligue 1': 'fra.1',
};
