import Stripe from 'stripe';

import prisma from '@/database';
import { formatDate } from '@/helpers/formatDate';
import { type NextRequest, type NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (req: NextRequest, res: NextResponse) => {
  const headers = new Headers(req.headers);
  const origin = headers.get('origin');

  const { bookingId } = await req.json();

  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
    },
    include: {
      property: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  if (!booking) {
    return Response.json(null, { status: 404, statusText: 'Not Found' });
  }

  const {
    checkIn,
    checkOut,
    orderTotal,
    totalNights,
    property: { image, name },
  } = booking;

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      metadata: {
        bookingId: booking.id,
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${name}`,
              images: [image],
              description: `From ${formatDate(checkIn)} to ${formatDate(
                checkOut
              )}, a total of ${totalNights} nights. Enjoy your stay!`,
            },
            unit_amount: orderTotal * 100,
          },
        },
      ],
      mode: 'payment',
      return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    return Response.json(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
};
