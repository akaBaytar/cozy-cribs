import PropertiesList from './PropertiesList';
import EmptyList from './EmptyList';

import { fetchProperties } from '@/actions/fetchProperties';
import type { PropertyCard } from '@/types';

type ContainerProps = {
  category?: string;
  search?: string;
};

const PropertiesContainer = async ({ category, search }: ContainerProps) => {
  const properties: PropertyCard[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading='No results found'
        message='Try changing or removing the filters.'
        buttonText='Clear Filters'
      />
    );
  }

  return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
