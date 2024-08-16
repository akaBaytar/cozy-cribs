import Image from 'next/image';
import Link from 'next/link';

import svg from '@/public/not-found.svg';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-4xl'>Page Not Found</h1>
      <p className='text-lg'>Could not find requested resource.</p>

      <Image
        src={svg}
        alt='404 Not Found'
        width={500}
        className='w-full sm:w-[500px]'
      />

      <Link href='/' className='text-primary underline underline-offset-4'>
        Return Home
      </Link>
    </div>
  );
}
