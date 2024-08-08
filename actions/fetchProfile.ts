import { redirect } from 'next/navigation';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';

const fetchProfile = async () => {
  const user = await getAuthUser();

  const profile = await prisma.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) redirect('/profile/create');

  return profile;
};
