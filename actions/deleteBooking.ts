'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';

export const deleteBooking = async (prevState: { bookingId: string }) => {
  const { bookingId } = prevState;

  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to delete a booking.');

  try {
    const result = await prisma.booking.delete({
      where: {
        id: bookingId,
        profileId: user.id,
      },
    });

    revalidatePath('/bookings');

    return { message: 'Booking deleted successfully.' };
  } catch (error) {
    renderError(error);
  }
};
