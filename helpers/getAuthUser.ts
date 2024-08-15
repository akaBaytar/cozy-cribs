import { currentUser } from '@clerk/nextjs/server';

export const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  return user;
};
