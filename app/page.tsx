import { Suspense } from 'react';

import Loading from '@/components/card/Loading';
import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';

type SearchParams = {
  category?: string;
  search?: string;
};

const Home = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <Suspense fallback={<Loading />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
    </section>
  );
};

export default Home;
