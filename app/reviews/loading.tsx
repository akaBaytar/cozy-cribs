'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ReviewsLoading = () => {
  return (
    <section className='grid md:grid-cols-2 gap-8 mt-4'>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </section>
  );
};

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center'>
          <Skeleton className='w-12 h-12 rounded-full' />
          <div className='ml-4'>
            <Skeleton className='w-40 h-4 mb-2' />
            <Skeleton className='w-28 h-4' />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ReviewsLoading;
