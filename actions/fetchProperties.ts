'use server';

import prisma from '@/database';

type propTypes = {
  search?: string;
  category?: string;
};

export const fetchProperties = async ({ search = '', category }: propTypes) => {
  const properties = await prisma.property.findMany({
    where: {
      category: category,
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { tagline: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      country: true,
      price: true,
      image: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return properties;
};
