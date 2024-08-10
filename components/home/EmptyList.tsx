import Link from 'next/link';

import { Button } from '../ui/button';

type PropTypes = {
  heading?: string;
  message?: string;
  buttonText?: string;
};

const EmptyList = ({ heading, message, buttonText }: PropTypes) => {
  return (
    <div className='mt-4'>
      <h2 className='text-xl font-bold'>{heading}</h2>
      <p className='text-lg mt-4'>{message}</p>
      <Button asChild className='mt-4' size='lg'>
        {<Link href='/'>{buttonText}</Link>}
      </Button>
    </div>
  );
};

export default EmptyList;
