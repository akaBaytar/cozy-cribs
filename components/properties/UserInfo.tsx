import Image from 'next/image';

import { RiVerifiedBadgeFill } from 'react-icons/ri';

type PropTypes = {
  img: string;
  name: string;
};

const UserInfo = ({ img, name }: PropTypes) => {
  return (
    <article className='grid grid-cols-[auto,1fr] gap-4 mt-4'>
      <Image
        src={img}
        alt={name}
        width={50}
        height={50}
        className='rounded-md w-12 h-12 object-cover'
      />
      <div className='text-sm flex flex-col justify-center'>
        <p>
          Hosted by <span className='font-semibold'> {name}</span>
        </p>
        <p className='flex items-center gap-1'>
          <RiVerifiedBadgeFill className='inline-flex text-primary' />
          <span className='font-thin'>
            Verified Host &middot; 2 years hosting
          </span>
        </p>
      </div>
    </article>
  );
};

export default UserInfo;
