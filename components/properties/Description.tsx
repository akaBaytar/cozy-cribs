'use client';

import { useState } from 'react';

import Title from './Title';
import { Button } from '../ui/button';

const Description = ({ description }: { description: string }) => {
  const [isShown, setShown] = useState(false);

  const words = description.split(' ');
  const isLong = words.length > 99;

  const toggleDescription = () => setShown(!isShown);

  const propertyDescription =
    isLong && !isShown ? words.splice(0, 100).join(' ') + '...' : description;

  return (
    <article className='mt-4'>
      <Title text='Description' />
      <p className='text-muted-foreground font-light leading-loose'>
        {propertyDescription}
      </p>
      {isLong && (
        <Button variant='link' className='pl-0' onClick={toggleDescription}>
          {isShown ? 'Show less' : 'Show more'}
        </Button>
      )}
    </article>
  );
};

export default Description;
