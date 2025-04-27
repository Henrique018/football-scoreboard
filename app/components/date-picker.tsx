'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Matcher } from 'react-day-picker';

import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { cn } from '@/lib/utils';

type DatePickerProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  disablePast?: boolean;
  disabled?: boolean;
  disableCalendarDates?: Matcher;
  buttonClasses?: string;
  label?: string;
};
export function DatePicker({
  value,
  onChange,
  disableCalendarDates,
  disablePast,
  disabled,
}: DatePickerProps) {
  const defaultValue = value ? new Date(value) : undefined;

  const [date, setDate] = useState<Date | undefined>(defaultValue);

  const handleSelect = (day: Date | undefined, selectedDay: Date) => {
    setDate(selectedDay);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(selectedDay);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full sm:w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 background-linear border-contrast"
        align="start"
        sideOffset={8}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          disabled={disabled}
          disablePast={disablePast}
          disableDates={disableCalendarDates}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
