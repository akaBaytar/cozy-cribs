import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';

const FavoriteButton = ({ id }: { id: string }) => {
  return (
    <Button size='icon' variant='outline' className='cursor-pointer'>
      <FaHeart className='text-lg ' />
    </Button>
  );
};

export default FavoriteButton;
