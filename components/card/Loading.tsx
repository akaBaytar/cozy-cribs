import { Skeleton } from '../ui/skeleton';

const Loading = () => {
  return (
    <div className='mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div>
      <Skeleton className='h-72 rounded-md bg-muted' />
      <Skeleton className='h-3 mt-1 w-3/4 bg-muted' />
      <Skeleton className='h-2 mt-1 w-3/4 bg-muted' />
      <Skeleton className='h-3 mt-1 w-1/2 bg-muted' />
    </div>
  );
};

export default Loading;
