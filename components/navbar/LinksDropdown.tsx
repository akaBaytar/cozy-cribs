import Link from 'next/link';

import UserIcon from './UserIcon';
import SignOut from './SignOut';

import { links } from '@/utils/links';

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-24'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[148px]'>
        {links.map(({ href, label }) => (
          <DropdownMenuItem key={href}>
            <Link href={href}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
