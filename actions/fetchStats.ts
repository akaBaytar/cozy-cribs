'use server';

import prisma from '@/database';
import { getAdminUser } from '@/helpers/getAdminUser';

export const fetchStats = async () => {
  await getAdminUser();

  const usersCount = await prisma.profile.count();
  const propertiesCount = await prisma.property.count();
  const bookingsCount = await prisma.booking.count({
    where: { paymentStatus: true },
  });

  return { usersCount, propertiesCount, bookingsCount };
};
