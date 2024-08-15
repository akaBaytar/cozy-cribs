'use server';

import prisma from '@/utils/database';

export const fetchReview = async (userId: string, propertyId: string) => {
  return prisma.review.findFirst({
    where: {
      profileId: userId,
      propertyId,
    },
  });
};
