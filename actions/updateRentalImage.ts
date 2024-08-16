'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { imageSchema } from '@/schemas';
import { uploadImage } from '@/utils/supabase';

import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';
import { validateFields } from '@/helpers/validateFields';

export const updateRentalImage = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to create a rental.');

  const propertyId = formData.get('id') as string;

  try {
    const image = formData.get('image') as File;

    const validatedFields = validateFields(imageSchema, image);

    const path = await uploadImage(validatedFields.image);

    await prisma.property.update({
      where: {
        id: propertyId,
        profileId: user.id,
      },
      data: {
        image: path,
      },
    });

    revalidatePath(`/rentals/${propertyId}/edit`);

    return { message: 'Property image updated successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
