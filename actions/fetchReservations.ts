'use server';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchReservations = async () => {
  const user = await getAuthUser();

  const reservations = await prisma.booking.findMany({
    where: {
      property: {
        profileId: user?.id,
      },
      paymentStatus: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      property: {
        select: {
          id: true,
          name: true,
          price: true,
          country: true,
        },
      },
    },
  });

  return reservations;
};
