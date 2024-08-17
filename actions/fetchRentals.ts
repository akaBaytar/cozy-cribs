'use server';

import prisma from '@/database';
import { getAuthUser } from '@/helpers/getAuthUser';

export const fetchRentals = async () => {
  const user = await getAuthUser();

  if (!user) throw new Error('You must log in first to see a your rentals.');

  const rentals = await prisma.property.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      id: true,
      name: true,
      price: true,
    },
  });

  const rentalsWithBookingsSums = await Promise.all(
    rentals.map(async (rental) => {
      const totalNightsSum = await prisma.booking.aggregate({
        where: {
          propertyId: rental.id,
          paymentStatus: true,
        },
        _sum: {
          totalNights: true,
        },
      });

      const orderTotalSum = await prisma.booking.aggregate({
        where: {
          propertyId: rental.id,
          paymentStatus: true,
        },
        _sum: {
          orderTotal: true,
        },
      });

      return {
        ...rental,
        totalNightsSum: totalNightsSum._sum,
        orderTotalSum: orderTotalSum._sum,
      };
    })
  );

  return rentalsWithBookingsSums;
};
