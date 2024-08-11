'use server';

import { revalidatePath } from 'next/cache';

import prisma from '@/utils/database';
import { getAuthUser } from '@/helpers/getAuthUser';
import { renderError } from '@/helpers/renderError';

type PropTypes = {
  propertyId: string;
  favoriteId: string | null;
  pathname: string;
};

export const toggleFavorite = async (prevState: PropTypes) => {
  const user = await getAuthUser();
  const { propertyId, favoriteId, pathname } = prevState;
 
  if (!user) throw new Error('You must log in first to favorite property.');

  try {
    if (favoriteId) {
      await prisma.favorite.delete({ where: { id: favoriteId } });
    } else {
      await prisma.favorite.create({
        data: { propertyId, profileId: user.id },
      });
    }

    revalidatePath(pathname);

    return {
      message: favoriteId
        ? 'Property removed from favorite list successfully.'
        : 'Property added to favorite list successfully.',
    };
  } catch (error) {
    return renderError(error);
  }
};
