'use server';

import prisma from '@/database';

import { getAdminUser } from '@/helpers/getAdminUser';
import { formatDate } from '@/helpers/formatDate';

export const fetchChartsData = async () => {
  await getAdminUser();

  const date = new Date();

  date.setMonth(date.getMonth() - 6);

  const sixMonthsAgo = date;

  const bookings = await prisma.booking.findMany({
    where: {
      createdAt: {
        gte: sixMonthsAgo,
      },
      paymentStatus: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  const bookingsPerMonth = bookings.reduce((total, current) => {
    const date = formatDate(current.createdAt, true);
    const existingEntry = total.find((entry) => entry.date === date);
    existingEntry ? (existingEntry.count += 1) : total.push({ date, count: 1 });

    return total;
  }, [] as Array<{ date: string; count: number }>);

  return bookingsPerMonth;
};
