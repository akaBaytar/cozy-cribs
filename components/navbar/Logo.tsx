import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';
import CozyCribs from '@/public/logo.png';

const Logo = () => {
  return (
    <Button size='icon' variant='link' asChild>
      <Link href='/'>
        <Image src={CozyCribs} width={36} height={36} alt='Home Page - CozyCribs' />
      </Link>
    </Button>
  );
};

export default Logo;
