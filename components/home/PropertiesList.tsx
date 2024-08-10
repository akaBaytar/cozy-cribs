import Card from '../card/PropertyCard';

import type { PropertyCard } from '@/utils/types';

const PropertiesList = ({ properties }: { properties: PropertyCard[] }) => {
  return (
    <section className='mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </section>
  );
};

export default PropertiesList;
