import Link from 'next/link';

import UserIcon from './UserIcon';
import SignOut from './SignOut';

import { links } from '@/utils/links';

import { auth } from '@clerk/nextjs/server';
import { SignedOut, SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs';

import { LuAlignLeft } from 'react-icons/lu';
import { Button } from '../ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

const LinksDropdown = () => {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-24'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[148px]'>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode='modal' forceRedirectUrl='/profile/create'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map(({ href, label }) => {
            if (label === 'Admin' && !isAdmin) return null;

            return (
              <DropdownMenuItem key={href}>
                <Link href={href} className='w-full'>
                  {label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
