import EmptyList from '@/components/home/EmptyList';
import PropertiesList from '@/components/home/PropertiesList';

import { fetchFavorites } from '@/actions/fetchFavorites';

const Favorites = async () => {
  const favorites = await fetchFavorites();

  if (favorites.length === 0)
    return (
      <EmptyList
        heading='Your favorites list is empty'
        message='Browse the properties and favorite the ones you’re interested in.'
        buttonText='Browse the Properties'
      />
    );

  return <PropertiesList properties={favorites} />;
};

export default Favorites;
