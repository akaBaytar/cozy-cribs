import { FaStar } from 'react-icons/fa';
import { fetchPropertyRating } from '@/actions/fetchPropertyRating';

type PropTypes = {
  id: string;
  inPage: boolean;
};

const PropertyRating = async ({ id, inPage }: PropTypes) => {
  const { count, rating } = await fetchPropertyRating(id);

  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
  const text = count > 1 ? ' reviews' : ' review';
  const value = `( ${count} ${inPage ? text : 'rev'})`;

  if (count < 1) return null;

  return (
    <span className={className}>
      <FaStar className='w-3 h-3 -mt-[2px]' />
      {rating} {value}
    </span>
  );
};

export default PropertyRating;
