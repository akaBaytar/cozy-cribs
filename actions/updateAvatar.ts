'use server';

import { imageSchema } from '@/utils/schemas';
import { validateFields } from '@/helpers/validateFields';

export const updateAvatar = async (_: any, formData: FormData) => {
  const image = formData.get('image') as File;

  const validatedFields = validateFields(imageSchema, { image });

  return { message: 'Avatar updated successfully.' };
};
