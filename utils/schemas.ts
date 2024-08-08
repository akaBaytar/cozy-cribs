import { z } from 'zod';

const validateFile = () => {
  const maxSize = 1024 * 1024; // 1MB
  const acceptedFileTypes = ['image/'];

  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxSize;
    }, 'File size must be less than 1 MB.')
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image.');
};

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

export const imageSchema = z.object({
  image: validateFile(),
});
