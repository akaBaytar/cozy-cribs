'use client';

import { Fragment, useEffect } from 'react';

import BookingContainer from './BookingContainer';
import BookingCalendar from './BookingCalendar';

import { Booking } from '@/types';
import { useProperty } from '@/store';

type PropTypes = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

const BookingWrapper = ({ bookings, price, propertyId }: PropTypes) => {
  useEffect(() => {
    useProperty.setState({ price, bookings, propertyId });
  }, [price, bookings, propertyId]);

  return (
    <Fragment>
      <BookingCalendar />
      <BookingContainer />
    </Fragment>
  );
};

export default BookingWrapper;
