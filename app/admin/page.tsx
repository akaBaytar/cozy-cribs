import { Suspense } from 'react';

import StatsContainer from '@/components/admin/StatsContainer';
import ChartsContainer from '@/components/admin/ChartsContainer';

import { StatsLoadingContainer } from '@/components/admin/Loading';
import { ChartsLoadingContainer } from '@/components/admin/Loading';

const AdminPage = () => {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
};

export default AdminPage;
