import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

  return (
    <div className='flex items-center gap-x-1'>
      {stars.map((isFilled, index) => (
        <FaStar
          key={index}
          className={`w-3 h-3 ${isFilled ? 'text-primary' : 'text-border'}`}
        />
      ))}
    </div>
  );
};

export default Rating;
