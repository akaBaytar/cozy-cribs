import { redirect } from 'next/navigation';

import { getAuthUser } from './getAuthUser';

export const getAdminUser = async () => {
  const user = await getAuthUser();

  if (user?.id !== process.env.ADMIN_USER_ID) redirect('/');

  return user;
};
