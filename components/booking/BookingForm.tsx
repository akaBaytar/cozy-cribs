import FormRow from '../form/FormRow';
import { Card, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

import { calculateTotals } from '@/helpers/calculateTotals';
import { useProperty } from '@/store';

const BookingForm = () => {
  const { range, price } = useProperty((state) => state);

  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  const { totalNights, subTotal, cleaningFee, orderTotal, serviceFee, tax } =
    calculateTotals({ checkIn, checkOut, price });

  return (
    <Card className='p-4 mb-4'>
      <CardTitle className='mb-4'>Summary</CardTitle>
      <FormRow label={`$${price} x ${totalNights} nights`} amount={subTotal} />
      <FormRow label='Cleaning Fee' amount={cleaningFee} />
      <FormRow label='Service Fee' amount={serviceFee} />
      <FormRow label='Tax' amount={tax} />
      <Separator className='mt-4' />
      <CardTitle className='mt-4 text-primary'>
        <FormRow label='Total' amount={orderTotal} />
      </CardTitle>
    </Card>
  );
};

export default BookingForm;
