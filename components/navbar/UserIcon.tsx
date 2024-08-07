import Image from 'next/image';

import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/actions/fetchProfileImage';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <figure className='w-6 h-6 relative'>
        <Image
          src={profileImage}
          alt='User Profile image'
          width={24}
          height={24}
          className='rounded-full object-cover'
        />
      </figure>
    );

  return <LuUser2 className='h-6 w-6 bg-primary rounded-full text-white' />;
};

export default UserIcon;
