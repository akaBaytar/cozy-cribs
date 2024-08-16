import StatsCard from './StatsCard';

import { fetchStats } from '@/actions/fetchStats';

const StatsContainer = async () => {
  const data = await fetchStats();

  return (
    <div className='mt-8 grid lg:grid-cols-3 gap-4'>
      <StatsCard title='Users' value={data.usersCount || 0} />
      <StatsCard title='Properties' value={data.propertiesCount || 0} />
      <StatsCard title='Bookings' value={data.bookingsCount || 0} />
    </div>
  );
};

export default StatsContainer;
