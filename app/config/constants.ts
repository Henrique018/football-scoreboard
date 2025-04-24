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
