'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

import axios from 'axios';

import { loadStripe } from '@stripe/stripe-js';

import { useToast } from '@/components/ui/use-toast';

import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const Checkout = () => {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get('bookingId');

  const { toast } = useToast();

  const fetchClientSecret = useCallback(async () => {
    const res = await axios.post('/api/payment', { bookingId });

    return res.data.clientSecret;
  }, [bookingId]);

  const options = { fetchClientSecret };

  return (
    <div id='checkout'>
      <p className='text-center bg-muted py-2 mb-4 rounded-md text-sm'>
        To successfully make a test payment, the card number should be{' '}
        <strong
          className='font-semibold cursor-pointer'
          onClick={() => {
            navigator.clipboard.writeText('4242 4242 4242 4242');
            toast({ description: 'Copied to clipboard.' });
          }}>
          4242 4242 4242 4242
        </strong>
        , with a valid expiration date and any CVC number.
      </p>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default Checkout;
