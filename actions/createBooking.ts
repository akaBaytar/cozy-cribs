'use server';

import { redirect } from 'next/navigation';

import prisma from '@/database';

import { getAuthUser } from '@/helpers/getAuthUser';
import { calculateTotals } from '@/helpers/calculateTotals';
import { renderError } from '@/helpers/renderError';

type StateProps = { propertyId: string; checkIn: Date; checkOut: Date };

export const createBooking = async (prevState: StateProps) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to make a reservation.');
  if (!user.privateMetadata.hasProfile) redirect('/profile/create');

  const { checkIn, checkOut, propertyId } = prevState;

  const property = await prisma.property.findUnique({
    where: { id: propertyId },
    select: { price: true },
  });

  if (!property) return { message: 'An error occurred.' };

  const { orderTotal, totalNights } = calculateTotals({
    checkIn,
    checkOut,
    price: property.price,
  });

  try {
    const booking = await prisma.booking.create({
      data: {
        checkIn,
        checkOut,
        orderTotal,
        totalNights,
        propertyId,
        profileId: user.id,
      },
    });
  } catch (error) {
    renderError(error);
  }

  redirect('/bookings');
};
