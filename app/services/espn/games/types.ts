export interface Root {
  sports: Sport[];
}

export interface Sport {
  id: string;
  uid: string;
  guid: string;
  name: string;
  slug: string;
  logos: Logo[];
  leagues: League[];
}

export interface Logo {
  href: string;
  alt: string;
  rel: string[];
  width: number;
  height: number;
}

export interface League {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  shortName: string;
  slug: string;
  tag: string;
  isTournament: boolean;
  smartdates: string[];
  events: Event[];
}

export interface Event {
  id: string;
  uid: string;
  guid: string;
  date: string;
  timeValid: boolean;
  recent: boolean;
  name: string;
  shortName: string;
  links: Link[];
  gamecastAvailable: boolean;
  playByPlayAvailable: boolean;
  commentaryAvailable: boolean;
  wallclockAvailable: boolean;
  onWatch: boolean;
  competitionId: string;
  location: string;
  season: number;
  seasonStartDate: string;
  seasonEndDate: string;
  seasonType: string;
  seasonTypeHasGroups: boolean;
  group: Group;
  link: string;
  status: string;
  summary: string;
  period: number;
  clock: string;
  addedClock: number;
  odds: Odds;
  fullStatus: FullStatus;
  competitors: Competitor[];
  neutralSite: boolean;
  conferenceCompetition: boolean;
  appLinks: AppLink[];
  situation?: Situation;
}

export interface Link {
  rel: string[];
  href: string;
  text: string;
}

export interface Group {
  groupId: string;
  name: string;
  abbreviation: string;
  shortName: string;
}

export interface Odds {
  provider: Provider;
  awayTeamOdds: AwayTeamOdds;
  homeTeamOdds: HomeTeamOdds;
  drawOdds: DrawOdds;
  bettingOdds?: BettingOdds;
  links: Link2[];
  details?: string;
  overUnder?: number;
  spread?: number;
  overOdds?: number;
  underOdds?: number;
  home?: Home;
  away?: Away;
  draw?: Draw;
}

export interface Provider {
  id: string;
  name: string;
  priority: number;
  logos: Logo2[];
}

export interface Logo2 {
  href: string;
  rel: string[];
}

export interface AwayTeamOdds {
  odds?: Odds2;
  team: Team;
  favorite?: boolean;
  favoriteAtOpen?: boolean;
  underdog?: boolean;
  moneyLine?: number;
  spreadOdds?: number;
}

export interface Odds2 {
  summary: string;
  value: number;
  handicap: number;
}

export interface Team {
  id: string;
  abbreviation: string;
  displayName: string;
  name: string;
}

export interface HomeTeamOdds {
  odds?: Odds3;
  team: Team2;
  favorite?: boolean;
  favoriteAtOpen?: boolean;
  underdog?: boolean;
  moneyLine?: number;
  spreadOdds?: number;
}

export interface Odds3 {
  summary: string;
  value: number;
  handicap: number;
}

export interface Team2 {
  id: string;
  abbreviation: string;
  displayName: string;
  name: string;
}

export interface DrawOdds {
  summary?: string;
  value?: number;
  handicap?: number;
  moneyLine?: number;
}

export interface BettingOdds {
  awayTeam: AwayTeam;
  homeTeam: HomeTeam;
}

export interface AwayTeam {
  id: string;
  abbreviation: string;
  displayName: string;
  name: string;
}

export interface HomeTeam {
  id: string;
  abbreviation: string;
  displayName: string;
  name: string;
}

export interface Link2 {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
}

export interface Home {
  moneyLine: number;
}

export interface Away {
  moneyLine: number;
}

export interface Draw {
  moneyLine: number;
}

export interface FullStatus {
  clock: number;
  addedClock: number;
  displayClock: string;
  period: number;
  displayPeriod?: string;
  type: Type;
}

export interface Type {
  id: string;
  name: string;
  state: string;
  completed: boolean;
  description: string;
  detail: string;
  shortDetail: string;
}

export interface Competitor {
  id: string;
  guid: string;
  uid: string;
  type: string;
  order: number;
  homeAway: string;
  winner: boolean;
  form: string;
  displayName: string;
  name: string;
  abbreviation: string;
  location: string;
  color?: string;
  alternateColor?: string;
  score: string;
  isNational: boolean;
  links: Link3[];
  record: string;
  group: string;
  recordStats: RecordStats;
  logo: string;
  logoDark: string;
  goalieSummary: GoalieSummary[];
  scoringSummary?: ScoringSummary[];
}

export interface Link3 {
  language: string;
  rel: string[];
  href: string;
  text: string;
  shortText: string;
  isExternal: boolean;
  isPremium: boolean;
  isHidden: boolean;
}

export interface RecordStats {
  awayPointsFor: AwayPointsFor;
  pointsAgainst: PointsAgainst;
  awayGamesPlayed: AwayGamesPlayed;
  awayWins: AwayWins;
  losses: Losses;
  points: Points;
  homeWins: HomeWins;
  pointDifferential: PointDifferential;
  homePointsAgainst: HomePointsAgainst;
  gamesPlayed: GamesPlayed;
  ties: Ties;
  awayLosses: AwayLosses;
  rank: Rank;
  homePointsFor: HomePointsFor;
  awayTies: AwayTies;
  wins: Wins;
  homeTies: HomeTies;
  pointsFor: PointsFor;
  homeLosses: HomeLosses;
  streak: Streak;
  homeGamesPlayed: HomeGamesPlayed;
  awayPointsAgainst: AwayPointsAgainst;
}

export interface AwayPointsFor {
  value: number;
}

export interface PointsAgainst {
  value: number;
}

export interface AwayGamesPlayed {
  value: number;
}

export interface AwayWins {
  value: number;
}

export interface Losses {
  value: number;
}

export interface Points {
  value: number;
}

export interface HomeWins {
  value: number;
}

export interface PointDifferential {
  value: number;
}

export interface HomePointsAgainst {
  value: number;
}

export interface GamesPlayed {
  value: number;
}

export interface Ties {
  value: number;
}

export interface AwayLosses {
  value: number;
}

export interface Rank {
  value: number;
}

export interface HomePointsFor {
  value: number;
}

export interface AwayTies {
  value: number;
}

export interface Wins {
  value: number;
}

export interface HomeTies {
  value: number;
}

export interface PointsFor {
  value: number;
}

export interface HomeLosses {
  value: number;
}

export interface Streak {
  value: number;
}

export interface HomeGamesPlayed {
  value: number;
}

export interface AwayPointsAgainst {
  value: number;
}

export interface GoalieSummary {
  displayValue: string;
  athlete: Athlete;
}

export interface Athlete {
  id: string;
  displayName: string;
  shortName: string;
  fullName: string;
  lastName: string;
  jersey: string;
  team: Team3;
  position: string;
}

export interface Team3 {
  id: string;
}

export interface ScoringSummary {
  displayValue: string;
  athlete: Athlete2;
}

export interface Athlete2 {
  id: string;
  displayName: string;
  shortName: string;
  fullName: string;
  jersey: string;
  team: Team4;
  links: Link4[];
  position: string;
  headshot?: string;
}

export interface Team4 {
  id: string;
}

export interface Link4 {
  rel: string[];
  href: string;
  isHidden: boolean;
}

export interface AppLink {
  rel: string[];
  href: string;
  text: string;
  shortText: string;
}

export interface Situation {
  lastPlay: LastPlay;
}

export interface LastPlay {
  sequence: number;
  text: string;
  clock: Clock;
}

export interface Clock {
  value: number;
  displayValue: string;
}
