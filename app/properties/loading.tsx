'use client';

import { Fragment } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Fragment>
      <Skeleton className='h-[12px] w-full rounded' />
      <Skeleton className='h-[16px] md:h-[20px] w-full rounded mt-8' />
      <Skeleton className='h-[16px] md:h-[20px] w-full rounded mt-4' />
      <Skeleton className='h-[300px] md:h-[500px] w-full rounded mt-8' />
    </Fragment>
  );
};

export default Loading;
