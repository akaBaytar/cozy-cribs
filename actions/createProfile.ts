'use server';

import { redirect } from 'next/navigation';
import { clerkClient } from '@clerk/nextjs/server';

import prisma from '@/utils/database';
import { profileSchema } from '@/utils/schemas';
import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';
import { validateFields } from '@/helpers/validateFields';

export const createProfile = async (_: any, formData: FormData) => {
  try {
    const user = await getAuthUser();

    if (!user) throw new Error('You must log in first to create your profile.');

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateFields(profileSchema, rawData);

    await prisma.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        firstName: validatedFields.firstName,
        lastName: validatedFields.lastName,
      },
    });

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect('/');
};
