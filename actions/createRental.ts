'use server';

import { redirect } from 'next/navigation';

import prisma from '@/utils/database';
import { imageSchema, propertySchema } from '@/utils/schemas';
import { uploadImage } from '@/utils/supabase';

import { getAuthUser } from '@/helpers/getAuthUser';
import { validateFields } from '@/helpers/validateFields';
import { renderError } from '@/helpers/renderError';

export const createRental = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;

    const validatedFields = validateFields(propertySchema, rawData);
    const validatedFile = validateFields(imageSchema, { image: file });

    const path = await uploadImage(validatedFile.image);

    await prisma.property.create({
      data: {
        ...validatedFields,
        image: path,
        profileId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect('/');
};
