import Image from 'next/image';

type TeamProps = {
  id: string;
  name: string;
  logo: string;
  score: number;
};

export type GameStatus =
  | 'STATUS_SCHEDULED'
  | 'STATUS_FULL_TIME'
  | 'STATUS_SECOND_HALF'
  | 'STATUS_FIRST_HALF';

type GameCardProps = {
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  status: {
    type: GameStatus;
    completed: boolean;
    clock: string;
    period: number;
  };
  time: string;
  location: string;
};

export default function GameCard({
  homeTeam,
  awayTeam,
  status,
  time,
  location,
}: GameCardProps) {
  const formattedTime = new Date(time).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex items-center justify-between gap-3 w-full rounded-2xl background-linear p-3 sm:p-5 border border-contrast text-white">
      <div className="flex flex-col items-center text-center">
        <Image
          src={homeTeam.logo}
          alt={`${homeTeam.name} logo`}
          width={48}
          height={48}
          className="w-12 h-12 mb-2"
        />
        <h2 className="sm:text-base font-bold">{homeTeam.name}</h2>
        {status.type !== 'STATUS_SCHEDULED' && (
          <p className="sm:text-base font-bold">{homeTeam.score}</p>
        )}
      </div>

      {status.type === 'STATUS_SCHEDULED' ? (
        <div className="flex flex-col items-center text-center text-sm font-mono mx-1">
          <p>{formattedTime}</p>
          <p className="mt-1 text-xs uppercase font-semibold">{location}</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center text-center text-sm font-mono mx-1">
            {status.completed ? (
              <p>Final</p>
            ) : (
              <>
                <p className="mt-1 text-xs uppercase font-semibold mb-1 whitespace-nowrap">{`${status.period}º half`}</p>
                <p className="text-xs">{status.clock}</p>

                <div className="flex items-center mt-4 gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <p className="text-xs font-semibold">Live</p>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <div className="flex flex-col items-center text-center">
        <Image
          src={awayTeam.logo}
          alt={`${awayTeam.name} logo`}
          width={48}
          height={48}
          className="w-12 h-12 mb-2"
        />
        <h2 className="sm:text-base font-bold">{awayTeam.name}</h2>
        {status.type !== 'STATUS_SCHEDULED' && (
          <p className="sm:text-base font-bold">{awayTeam.score}</p>
        )}
      </div>
    </div>
  );
}
