import { Skeleton } from '../ui/skeleton';

const Loading = () => {
  return (
    <div className='mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div>
      <Skeleton className='h-72 rounded-md' />
      <Skeleton className='h-4 mt-1 w-3/4' />
      <Skeleton className='h-2 mt-1 w-3/4' />
      <Skeleton className='h-3 mt-1 w-1/2' />
    </div>
  );
};

export default Loading;
