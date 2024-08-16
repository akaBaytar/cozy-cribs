'use server'

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';

export const deleteRental = async (prevState: { propertyId: string }) => {
  const { propertyId } = prevState;

  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to delete a rental.');

  try {
    await prisma.property.delete({
      where: {
        id: propertyId,
        profileId: user.id,
      },
    });

    revalidatePath('/rentals');

    return { message: 'Rental deleted successfully.' };
  } catch (error) {
    renderError(error);
  }
};
