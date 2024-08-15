'use client';

import { Fragment, useState, useEffect } from 'react';

import { DateRange } from 'react-day-picker';

import Title from '../properties/Title';
import { Calendar } from '../ui/calendar';
import { useToast } from '../ui/use-toast';

import { useProperty } from '@/store';

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';

const BookingCalendar = () => {
  const currentDate = new Date();

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  useEffect(() => {
    useProperty.setState({ range });
  }, [range]);

  return (
    <Fragment>
      <Title text='Make a Reservation' />
      <Calendar
        mode='range'
        defaultMonth={currentDate}
        selected={range}
        onSelect={setRange}
        className='mb-4 border rounded-md'
      />
    </Fragment>
  );
};

export default BookingCalendar;
