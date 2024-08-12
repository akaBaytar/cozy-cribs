'use client';

import { useState } from 'react';

import { DateRange } from 'react-day-picker';
import { Calendar } from '../ui/calendar';

const BookingCalendar = () => {
  const currentDate = new Date();
  const selectedRange: DateRange = { from: undefined, to: undefined };

  const [range, setRange] = useState<DateRange | undefined>(selectedRange);

  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='border rounded-md'
    />
  );
};

export default BookingCalendar;
