'use server';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchProfileImage = async () => {
  const user = await getAuthUser();

  if (!user) return null;

  const profile = await prisma.profile.findUnique({
    where: { clerkId: user.id },
    select: { profileImage: true },
  });

  return profile?.profileImage;
};
