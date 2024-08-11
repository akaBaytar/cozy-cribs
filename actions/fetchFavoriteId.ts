'use server';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';

type PropType = {
  propertyId: string;
};

export const fetchFavoriteId = async ({ propertyId }: PropType) => {
  const user = await getAuthUser();

  const favorite = await prisma.favorite.findFirst({
    where: {
      propertyId,
      profileId: user?.id,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id || null;
};
