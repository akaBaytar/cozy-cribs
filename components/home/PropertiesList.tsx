import Card from '../card/PropertyCard';

import type { PropertyCard } from '@/utils/types';

const PropertiesList = ({ properties }: { properties: PropertyCard[] }) => {
  return (
    <section>
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </section>
  );
};

export default PropertiesList;
