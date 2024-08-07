'use server';

import { ZodError } from 'zod';
import { profileSchema } from './schemas';

export const createProfile = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

    return { message: 'Profile created successfully.' };
  } catch (error) {
    let message = 'An error occurred.';

    if (error instanceof ZodError) message = error.errors[0].message;

    return { message };
  }
};
