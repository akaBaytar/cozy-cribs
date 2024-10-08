'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';
import { profileSchema } from '@/schemas';
import { renderError } from '@/helpers/renderError';
import { validateFields } from '@/helpers/validateFields';

export const updateProfile = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to update your profile.');

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateFields(profileSchema, rawData);

    await prisma.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields,
    });

    revalidatePath('/profile');

    return { message: 'Profile updated successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
