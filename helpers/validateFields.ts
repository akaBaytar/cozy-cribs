import { ZodSchema } from 'zod';

export const validateFields = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const message = result.error.errors[0].message;

    throw new Error(message);
  }

  return result.data;
};
