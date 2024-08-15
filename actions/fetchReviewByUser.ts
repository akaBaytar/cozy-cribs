'use server';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchReviewByUser = async () => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to see a your reviews.');

  const reviews = await prisma.review.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      property: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  return reviews;
};
