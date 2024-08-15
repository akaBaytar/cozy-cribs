'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';

export const deleteReview = async (prevState: { reviewId: string }) => {
  const { reviewId } = prevState;

  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to delete a review.');

  try {
    await prisma.review.delete({
      where: {
        id: reviewId,
        profileId: user.id,
      },
    });

    revalidatePath('/reviews');

    return { message: 'Review deleted successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
