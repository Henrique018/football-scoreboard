export interface Type {
  id: string;
  name: string;
  abbreviation: string;
  startDate: string;
  endDate: string;
  hasStandings: boolean;
}

export interface Season {
  year: number;
  startDate: string;
  endDate: string;
  displayName: string;
  types: Type[];
}

export interface Stat {
  name: string;
  displayName: string;
  shortDisplayName: string;
  description: string;
  abbreviation: string;
  type: string;
  value?: number;
  displayValue: string;
  id?: string;
  summary?: string;
}

export interface Logo {
  href: string;
  width: number;
  height: number;
  alt: string;
  rel: string[];
  lastUpdated: string;
}

export interface Team {
  id: string;
  uid: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  isActive: boolean;
  logos: Logo[];
  isNational: boolean;
}

export interface Entry {
  team: Team;
  stats: Stat[];
}

export interface Standings {
  id: string;
  name: string;
  displayName: string;
  season: number;
  seasonType: number;
  seasonDisplayName: string;
  entries: Entry[];
}

export interface StandingsRoot {
  uid: string;
  id: string;
  name: string;
  abbreviation: string;
  children: {
    uid: string;
    id: string;
    name: string;
    abbreviation: string;
    standings: Standings;
  }[];
  seasons: Season[];
}
