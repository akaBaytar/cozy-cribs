'use server';

import prisma from '@/utils/database';

export const fetchPropertyRating = async (propertyId: string) => {
  const result = await prisma.review.groupBy({
    by: ['propertyId'],
    _avg: { rating: true },
    _count: {
      rating: true,
    },
    where: {
      propertyId,
    },
  });

  return {
    rating: result[0]?._avg.rating?.toFixed() ?? 0,
    count: result[0]?._count.rating ?? 0,
  };
};
