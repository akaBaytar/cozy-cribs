'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { propertySchema } from '@/schemas';

import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';
import { validateFields } from '@/helpers/validateFields';

export const updateRental = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to create a rental.');

  const propertyId = formData.get('id') as string;

  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateFields(propertySchema, rawData);

    await prisma.property.update({
      where: {
        id: propertyId,
        profileId: user.id,
      },
      data: {
        ...validatedFields,
      },
    });

    revalidatePath(`/rentals/${propertyId}/edit`);

    return { message: 'Property details updated successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
