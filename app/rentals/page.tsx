import Link from 'next/link';

import EmptyList from '@/components/home/EmptyList';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { formatCurrency } from '@/helpers/formatCurrency';
import { fetchRentals } from '@/actions/fetchRentals';
import { deleteRental } from '@/actions/deleteRental';

const Rentals = async () => {
  const rentals = await fetchRentals();

  if (rentals.length < 1)
    return (
      <EmptyList
        heading='Your rental list is empty'
        message='Review your properties and publish listings as you wish.'
        buttonText='Browse the Properties'
      />
    );

  return (
    <div className='mt-8'>
      <h4 className='mb-8 font-semibold'>Active Rentals: {rentals.length}</h4>
      <Table className='text-xs text-center'>
        <TableCaption className='text-xs mb-6'>
          A list of all your properties
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center min-w-60'>Name</TableHead>
            <TableHead className='text-center min-w-24'>Nightly Rate</TableHead>
            <TableHead className='text-center min-w-24'>Booked</TableHead>
            <TableHead className='text-center min-w-24'>Total Income</TableHead>
            <TableHead className='text-center min-w-24'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map(({ id, name, orderTotalSum, price, totalNightsSum }) => (
            <TableRow key={id} className='max-h-8'>
              <TableCell className='min-w-60 text-left'>
                <Link
                  href={`/properties/${id}`}
                  className='underline text-muted-foreground'>
                  {name}
                </Link>
              </TableCell>
              <TableCell>{formatCurrency(price)}</TableCell>
              <TableCell>{+totalNightsSum || 0}</TableCell>
              <TableCell>{formatCurrency(+orderTotalSum)}</TableCell>
              <TableCell className='flex items-center justify-center'>
                <Link href={`/rentals/${id}/edit`}>
                  <IconButton action='edit' />
                </Link>
                <DeleteRental propertyId={id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const DeleteRental = ({ propertyId }: { propertyId: string }) => {
  const deleteRentalAction = deleteRental.bind(null, { propertyId });

  return (
    <FormContainer action={deleteRentalAction}>
      <IconButton action='delete' />
    </FormContainer>
  );
};

export default Rentals;
