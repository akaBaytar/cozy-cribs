'use client';

import { useAuth, SignInButton } from '@clerk/nextjs';

import { Button } from '../ui/button';
import FormContainer from '../form/FormContainer';
import { SubmitButton } from '../form/Buttons';

import { createBooking } from '@/actions/createBooking';
import { useProperty } from '@/store';

const ConfirmBooking = () => {
  const { userId } = useAuth();

  const { propertyId, range } = useProperty((state) => state);

  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  if (!userId) {
    return (
      <SignInButton mode='modal'>
        <Button type='button' className='w-full'>
          Sign In
        </Button>
      </SignInButton>
    );
  }

  const createBookingAction = createBooking.bind(null, {
    propertyId,
    checkIn,
    checkOut,
  });

  return (
    <section>
      <FormContainer action={createBookingAction}>
        <SubmitButton text='Make a Reservation' className='w-full' />
      </FormContainer>
    </section>
  );
};

export default ConfirmBooking;
