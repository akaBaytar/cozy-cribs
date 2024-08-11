import { auth } from '@clerk/nextjs/server';

import { CardButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/actions/fetchFavoriteId';
import FavoriteForm from './FavoriteForm';

const FavoriteButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();

  if (!userId) return <CardButton />;

  const favoriteId = await fetchFavoriteId({ propertyId });

  return <FavoriteForm favoriteId={favoriteId} propertyId={propertyId} />;
};

export default FavoriteButton;
