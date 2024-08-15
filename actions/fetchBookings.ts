'use server';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchBookings = async () => {
  const user = await getAuthUser();

  const bookings = await prisma.booking.findMany({
    where: {
      profileId: user?.id,
    },
    include: {
      property: {
        select: {
          id: true,
          name: true,
          country: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return bookings;
};
