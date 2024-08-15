'use server';

import prisma from '@/database';

export const fetchReview = async (userId: string, propertyId: string) => {
  return prisma.review.findFirst({
    where: {
      profileId: userId,
      propertyId,
    },
  });
};
