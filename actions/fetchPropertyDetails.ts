'use server';

import prisma from '@/database';

export const fetchPropertyDetails = (id: string) => {
  return prisma.property.findUnique({
    where: { id },
    include: {
      profile: true,
      bookings: {
        select: {
          checkIn: true,
          checkOut: true,
        },
      },
    },
  });
};
