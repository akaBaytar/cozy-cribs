import { Card, CardHeader } from '../ui/card';

const StatsCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <Card className='bg-muted'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <span className='text-primary text-4xl font-bold'>{value}</span>
      </CardHeader>
    </Card>
  );
};

export default StatsCard;
