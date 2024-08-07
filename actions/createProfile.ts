'use server';

import { redirect } from 'next/navigation';

import { ZodError } from 'zod';
import { clerkClient, currentUser } from '@clerk/nextjs/server';

import prisma from '@/utils/database';
import { profileSchema } from '@/utils/schemas';

export const createProfile = async (_: any, formData: FormData) => {
  try {
    const user = await currentUser();

    if (!user) throw new Error('Please login.');

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
    let message = 'An error occurred.';

    if (error instanceof ZodError) message = error.errors[0].message;

    return { message };
  }

  redirect('/');
};
