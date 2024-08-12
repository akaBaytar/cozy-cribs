'use server';

import prisma from '@/utils/database';

export const fetchPropertyDetails = (id: string) => {
  return prisma.property.findUnique({
    where: { id },
    include: { profile: true },
  });
};
