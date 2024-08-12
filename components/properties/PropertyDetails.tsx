import { formatQuantity } from '@/helpers/formatQuantity';

type PropTypes = {
  details: {
    guests: number;
    bedrooms: number;
    baths: number;
    beds: number;
  };
};

const Details = ({ details: { guests, bedrooms, baths, beds } }: PropTypes) => {
  return (
    <p className='font-light mt-2 text-xs sm:text-base'>
      <span>{formatQuantity(guests, 'guest')} &middot; </span>
      <span>{formatQuantity(bedrooms, 'bedroom')} &middot; </span>
      <span>{formatQuantity(beds, 'bed')} &middot; </span>
      <span>{formatQuantity(baths, 'bath')}</span>
    </p>
  );
};

export default Details;
