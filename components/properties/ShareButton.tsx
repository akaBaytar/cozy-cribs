'use client';

import { LuShare2 } from 'react-icons/lu';

import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

import {
  XIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  LineIcon,
  TwitterShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  LineShareButton,
} from 'react-share';

type PropTypes = {
  propertyId: string;
  name: string;
};

const ShareButton = ({ propertyId, name }: PropTypes) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const link = `${url}/properties/${propertyId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='p-2'>
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='left'
        align='end'
        sideOffset={8}
        className='flex items-center gap-2 justify-center w-full'>
        <FacebookShareButton url={link} title={name} hashtag='#cozycribs'>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={link} title={name} hashtags={['cozycribs']}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <RedditShareButton url={link} title={name}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <WhatsappShareButton url={link} title={name}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton url={link} title={name}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <LineShareButton url={link} title={name}>
          <LineIcon size={32} round />
        </LineShareButton>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
