'use server';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchProfileImage = async () => {
  const user = await getAuthUser();

  const profile = await prisma.profile.findUnique({
    where: { clerkId: user.id },
    select: { profileImage: true },
  });

  return profile?.profileImage;
};
