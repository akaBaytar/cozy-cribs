import { z, ZodSchema } from 'zod';

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(40, { message: 'First name can be a maximum of 40 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(40, { message: 'Last name can be a maximum of 40 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});
