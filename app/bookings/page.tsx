import Link from 'next/link';

import EmptyList from '@/components/home/EmptyList';
import DeleteBooking from '@/components/booking/DeleteBooking';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { formatDate } from '@/helpers/formatDate';
import { formatCurrency } from '@/helpers/formatCurrency';

import { fetchBookings } from '@/actions/fetchBookings';

const Bookings = async () => {
  const bookings = await fetchBookings();

  if (bookings.length < 1)
    return (
      <EmptyList
        heading='Your booking list is empty'
        message='Browse the properties and make a reservation the ones you’re interested in.'
        buttonText='Browse the Properties'
      />
    );

  return (
    <div className='mt-8'>
      <h4 className='mb-8 font-semibold'>Total Booking: {bookings.length}</h4>
      <Table className='text-xs text-center'>
        <TableCaption className='text-xs mb-6'>
          A list of your recent bookings
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center min-w-24'>Name</TableHead>
            <TableHead className='text-center min-w-24'>Country</TableHead>
            <TableHead className='text-center min-w-24'>Nights</TableHead>
            <TableHead className='text-center min-w-24'>Total</TableHead>
            <TableHead className='text-center min-w-24'>Check In</TableHead>
            <TableHead className='text-center min-w-24'>Check Out</TableHead>
            <TableHead className='text-center min-w-24'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map(
            ({ id, checkIn, checkOut, orderTotal, totalNights, property }) => (
              <TableRow key={id} className='max-h-8'>
                <TableCell>
                  <Link
                    href={`/properties/${property.id}`}
                    className='underline text-muted-foreground'>
                    {property.name}
                  </Link>
                </TableCell>
                <TableCell>{property.country}</TableCell>
                <TableCell className='font-semibold'>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatDate(checkIn)}</TableCell>
                <TableCell>{formatDate(checkOut)}</TableCell>
                <TableCell className='grid place-content-center'>
                  <DeleteBooking bookingId={id} />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Bookings;
