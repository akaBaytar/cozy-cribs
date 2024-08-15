import { redirect } from 'next/navigation';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await prisma.profile.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  if (!profile) redirect('/profile/create');

  return profile;
};
