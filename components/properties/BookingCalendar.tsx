'use client';

import { Fragment, useState } from 'react';

import Title from './Title';
import { DateRange } from 'react-day-picker';
import { Calendar } from '../ui/calendar';

const BookingCalendar = () => {
  const currentDate = new Date();
  const selectedRange: DateRange = { from: undefined, to: undefined };

  const [range, setRange] = useState<DateRange | undefined>(selectedRange);

  return (
    <Fragment>
      <Title text='Make a Reservation' />
      <Calendar
        mode='range'
        defaultMonth={currentDate}
        selected={range}
        onSelect={setRange}
        className='border rounded-md'
      />
    </Fragment>
  );
};

export default BookingCalendar;
