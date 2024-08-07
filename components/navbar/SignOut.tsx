'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../ui/use-toast';

const SignOut = () => {
  const { toast } = useToast();

  const logoutHandler = () => {
    toast({ description: 'You have been signed out successfully.' });
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={logoutHandler}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOut;
