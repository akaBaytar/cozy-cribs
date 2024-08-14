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

export const propertySchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters.' })
    .max(40, { message: 'Name can be a maximum of 40 characters.' }),
  tagline: z
    .string()
    .min(3, { message: 'Tagline must be at least 3 characters.' })
    .max(60, { message: 'Tagline can be a maximum of 60 characters.' }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: 'Price must be a positive number.' }),
  category: z.string(),
  description: z.string().refine(
    (desc) => {
      const count = desc.split(' ').length;
      return count >= 10 && count <= 500;
    },
    { message: 'Description must be between 10 and 500 words.' }
  ),
  country: z.string(),
  guests: z.coerce
    .number()
    .int()
    .min(0, { message: 'Guest amount must be a positive number.' }),
  bedrooms: z.coerce
    .number()
    .int()
    .min(0, { message: 'Bedrooms amount must be a positive number.' }),
  beds: z.coerce
    .number()
    .int()
    .min(0, { message: 'Beds amount must be a positive number.' }),
  baths: z.coerce
    .number()
    .int()
    .min(0, { message: 'Baths amount must be a positive number.' }),
  amenities: z.string(),
});

export const reviewSchema = z.object({
  propertyId: z.string(),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().refine(
    (comment) => {
      const count = comment.split(' ').length;
      return count >= 10 && count <= 200;
    },
    { message: 'Comment must be between 10 and 200 words.' }
  ),
});
