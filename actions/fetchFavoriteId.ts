'use server';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchFavoriteId = async ({ id }: { id: string }) => {
  const user = await getAuthUser();

  const favorite = await prisma.favorite.findFirst({
    where: {
      propertyId: id,
      profileId: user?.id,
    },
  });
};
