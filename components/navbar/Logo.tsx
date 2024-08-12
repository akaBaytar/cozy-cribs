import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';
import CozyCribs from '@/public/logo.png';

const Logo = () => {
  return (
    <Button size='icon' variant='link' asChild>
      <Link href='/'>
        <div className='w-8 h-8 rounded-md'>
          <Image
            src={CozyCribs}
            alt='Home page - CozyCribs'
            className='rounded-md'
          />
        </div>
      </Link>
    </Button>
  );
};

export default Logo;
