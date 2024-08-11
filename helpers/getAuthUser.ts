import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

export const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  if (!user.privateMetadata.hasProfile) redirect('/profile/create');

  return user;
};
