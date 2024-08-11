'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';
import { profileSchema } from '@/utils/schemas';
import { renderError } from '@/helpers/renderError';
import { validateFields } from '@/helpers/validateFields';

export const updateProfile = async (_: any, formData: FormData) => {
  const user = await getAuthUser();

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
