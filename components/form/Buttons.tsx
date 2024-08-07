'use client';

import { Fragment } from 'react';
import { useFormStatus } from 'react-dom';

import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';

type ButtonProps = {
  className?: string;
  text?: string;
};

export const SubmitButton = ({
  className = '',
  text = 'Submit',
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' size='lg' disabled={pending} className={className}>
      {pending ? (
        <Fragment>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          <span>Submitting...</span>
        </Fragment>
      ) : (
        text
      )}
    </Button>
  );
};
