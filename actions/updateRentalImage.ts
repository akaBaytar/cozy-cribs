'use server';

import { getAuthUser } from '@/helpers/getAuthUser';

export const updateRentalImage = async () => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to create a rental.');
  
  return { message: 'update property image action' };
};
