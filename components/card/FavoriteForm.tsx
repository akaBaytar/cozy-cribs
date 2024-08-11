'use client';

import { usePathname } from 'next/navigation';

import FormContainer from '../form/FormContainer';
import { FavoriteButton } from '../form/Buttons';
import { toggleFavorite } from '@/actions/toggleFavorite';

type PropTypes = {
  propertyId: string;
  favoriteId: string | null;
};

const FavoriteForm = ({ propertyId, favoriteId }: PropTypes) => {
  const pathname = usePathname();

  console.log(propertyId,favoriteId,pathname);
  

  const toggleAction = toggleFavorite.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <FavoriteButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteForm;
