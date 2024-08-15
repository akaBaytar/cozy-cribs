'use server';

import prisma from '@/database';

export const fetchReviews = async (propertyId: string) => {
  const reviews = await prisma.review.findMany({
    where: { propertyId },
    select: {
      id: true,
      rating: true,
      comment: true,
      profile: {
        select: { firstName: true, profileImage: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return reviews;
};
