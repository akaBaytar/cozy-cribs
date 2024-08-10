import { FaStar } from 'react-icons/fa';

const PropertyRating = ({ id, inPage }: { id: string; inPage: boolean }) => {
  const rating = 4.5;
  const count = 35;
  const className = `flex gap-1 items-center ${inPage ? 'text-md' : 'text-xs'}`;
  const text = count > 1 ? ' reviews' : ' review';
  const value = `( ${count} ${inPage ? text : ' '})`;

  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {value}
    </span>
  );
};

export default PropertyRating;
