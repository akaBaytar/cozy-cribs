import { Card, CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

const Loading = () => {
  return <div>Loading</div>;
};

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className='h-20 w-full rounded-md' />
      </CardHeader>
    </Card>
  );
};

export const StatsLoadingContainer = () => {
  return (
    <div className='grid md:grid-cols-3 mt-8 gap-4'>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export const ChartsLoadingContainer = () => {
  return <Skeleton className='mt-8 w-full h-[300px] rounded-md' />;
};

export default Loading;
