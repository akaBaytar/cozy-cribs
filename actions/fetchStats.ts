'use server';

import prisma from '@/database';
import { getAdminUser } from '@/helpers/getAdminUser';

export const fetchStats = async () => {
  const user = await getAdminUser();

  const usersCount = await prisma.profile.count();

  const bookingsCount = await prisma.profile.count();

  const propertiesCount = await prisma.property.count();

  return { usersCount, propertiesCount, bookingsCount };
};
