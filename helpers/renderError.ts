import { ZodError } from 'zod';

export const renderError = (error: unknown): { message: string } => {
  let message = 'An error occurred.';

  if (error instanceof ZodError) message = error.errors[0].message;

  return { message };
};
