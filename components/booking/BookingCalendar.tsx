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

  const bookings = useProperty((state) => state.bookings);

  const { toast } = useToast();

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const unavailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);

    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);

        toast({ description: 'Some dates you selected are booked.' });

        return true;
      }

      return false;
    });

    useProperty.setState({ range });
  }, [range, toast, unavailableDates]);

  return (
    <Fragment>
      <Title text='Make a Reservation' />
      <Calendar
        mode='range'
        defaultMonth={currentDate}
        selected={range}
        onSelect={setRange}
        className='mb-4 border rounded-md'
        disabled={blockedPeriods}
      />
    </Fragment>
  );
};

export default BookingCalendar;
