'use server';

import { redirect } from 'next/navigation';
import { clerkClient } from '@clerk/nextjs/server';

import prisma from '@/utils/database';
import { profileSchema } from '@/utils/schemas';
import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';

export const createProfile = async (_: any, formData: FormData) => {
  try {
    const user = await getAuthUser();

    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    await prisma.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress || validatedFields.email,
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
    renderError(error);
  }

  redirect('/');
};
