'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/utils/database';
import { imageSchema } from '@/utils/schemas';
import { uploadImage } from '@/utils/supabase';
import { getAuthUser } from '@/helpers/getAuthUser';
import { validateFields } from '@/helpers/validateFields';
import { renderError } from '@/helpers/renderError';

export const updateAvatar = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to update your avatar.');

  try {
    const image = formData.get('image') as File;
    const validatedFields = validateFields(imageSchema, { image });

    const path = await uploadImage(validatedFields.image);

    await prisma.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: path,
      },
    });

    revalidatePath('/profile');

    return { message: 'Avatar updated successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
