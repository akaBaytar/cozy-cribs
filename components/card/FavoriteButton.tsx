import { auth } from '@clerk/nextjs/server';

import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { CardButton } from '../form/Buttons';

const FavoriteButton = ({ id }: { id: string }) => {
  const { userId } = auth();

  if (!userId) return <CardButton />;

  return (
    <Button size='icon' variant='outline' className='cursor-pointer'>
      <FaHeart className='text-lg ' />
    </Button>
  );
};

export default FavoriteButton;
