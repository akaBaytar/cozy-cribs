import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

export const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) throw new Error('You must be logged in.');

  if (!user.privateMetadata.hasProfile) redirect('/profile/create');

  return user;
};
