'use server';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchRentalDetails = async (propertyId: string) => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to edit your properties.');

  return prisma.property.findUnique({
    where: {
      id: propertyId,
      profileId: user.id,
    },
  });
};
