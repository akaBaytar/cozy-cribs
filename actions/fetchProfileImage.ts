'use server';

import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/utils/database';

export const fetchProfileImage = async () => {
  const user = await currentUser();

  if (!user) return null;

  const profile = await prisma.profile.findUnique({
    where: { clerkId: user.id },
    select: { profileImage: true },
  });

  return profile?.profileImage;
};
