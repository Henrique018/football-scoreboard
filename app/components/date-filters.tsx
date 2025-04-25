'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { DatePicker } from '@/components/date-picker';

const today = new Date();

export default function DateFilters() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date'); // YYYYMMDD
  const retrievedDate = date
    ? new Date(
        parseInt(date.slice(0, 4), 10),
        parseInt(date.slice(4, 6), 10) - 1,
        parseInt(date.slice(6, 8), 10),
      )
    : today;

  const [selectedDate, setSelectedDate] = useState<Date>(retrievedDate);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const params = new URLSearchParams(window.location.search);

    const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');
    params.set('date', formattedDate);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  };

  return (
    <div>
      <DatePicker disablePast={true} value={selectedDate} onChange={handleDateChange} />
    </div>
  );
}
