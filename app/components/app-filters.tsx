'use client';

import { isToday, closestTo } from 'date-fns';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { DatePicker } from '@/components/date-picker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select';
import { LEAGUES } from '@/config/constants';

const today = new Date();

const getTodayOrClosestDate = (smartDates: string[]) => {
  let closestDate: string | Date | undefined;
  closestDate = smartDates.find((date) => isToday(date));
  if (!closestDate) {
    closestDate = closestTo(
      today,
      smartDates.map((date) => new Date(date)),
    );
  }
  return closestDate;
};

type AppFiltersProps = {
  smartDates?: string[]; // ISO strings
  showDatePicker?: boolean;
};

export default function AppFilters({ smartDates, showDatePicker = false }: AppFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);
  const date = searchParams.get('date'); // YYYYMMDD
  const league = searchParams.get('league') || 'bra.1';

  const retrievedDate = date
    ? new Date(
        parseInt(date.slice(0, 4), 10),
        parseInt(date.slice(4, 6), 10) - 1,
        parseInt(date.slice(6, 8), 10),
      )
    : today;

  const [selectedDate, setSelectedDate] = useState<Date>(retrievedDate);

  useEffect(() => {
    if (!date && smartDates?.length) {
      const closestDate = getTodayOrClosestDate(smartDates);

      if (closestDate) {
        const formattedLatestAvailableDate = new Date(closestDate)
          ?.toISOString()
          .split('T')[0]
          .replace(/-/g, '');
        router.push(`?date=${formattedLatestAvailableDate}`);
        setSelectedDate(new Date(closestDate));
      }
    }
  }, [date, smartDates, router]);

  useEffect(() => {
    if (!league) {
      const defaultLeague = Object.keys(LEAGUES)[0];
      params.set('league', defaultLeague);
      router.push(`?${params.toString()}`);
    }
  }, [league, params, router]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);

    const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');
    params.set('date', formattedDate);

    router.push(`?${params.toString()}`);
  };

  const handleLeagueChange = (leagueId: string) => {
    params.set('league', leagueId);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-fit">
      <Select defaultValue={league} onValueChange={handleLeagueChange}>
        <SelectTrigger className="w-full sm:w-[250px]">
          <SelectValue placeholder="Leagues" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(LEAGUES).map(([leagueName, leagueId]) => (
            <SelectItem key={leagueId} value={leagueId}>
              {leagueName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {showDatePicker && <DatePicker value={selectedDate} onChange={handleDateChange} />}
    </div>
  );
}
