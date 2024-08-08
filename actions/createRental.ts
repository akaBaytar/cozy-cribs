'use server';

import { propertySchema } from '@/utils/schemas';
import { getAuthUser } from '@/helpers/getAuthUser';
import { validateFields } from '@/helpers/validateFields';
import { renderError } from '@/helpers/renderError';

export const createRental = async (_: any, formData: FormData) => {
  try {
    const user = await getAuthUser();

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateFields(propertySchema, rawData);

    return { message: 'Property created successfully.' };
  } catch (error) {
    return renderError(error);
  }
};
