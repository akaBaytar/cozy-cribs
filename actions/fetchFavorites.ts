'use server';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchFavorites = async () => {
  const user = await getAuthUser();

  const favorites = await prisma.favorite.findMany({
    where: { profileId: user?.id },
    select: {
      property: {
        select: {
          id: true,
          name: true,
          tagline: true,
          country: true,
          price: true,
          image: true,
        },
      },
    },
  });

  return favorites.map((favorite) => favorite.property);
};
