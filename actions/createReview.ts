'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { reviewSchema } from '@/schemas';

import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';
import { validateFields } from '@/helpers/validateFields';

export const createReview = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to leave a review.');

  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateFields(reviewSchema, rawData);

    await prisma.review.create({
      data: {
        ...validatedFields,
        profileId: user.id,
      },
    });

    revalidatePath(`/properties/${validatedFields.propertyId}`);

    return { message: 'Your review submitted successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
