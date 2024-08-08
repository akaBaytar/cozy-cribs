'use client';

import { useState } from 'react';
import Image from 'next/image';

import { LuUser2 } from 'react-icons/lu';

import { Button } from '../ui/button';
import { SubmitButton } from './Buttons';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';

import { type actionFunction } from '@/utils/types';

type ImageContainerProps = {
  image: string;
  name: string;
  text: string;
  action: actionFunction;
  children?: React.ReactNode;
};

const ImageContainer = (props: ImageContainerProps) => {
  const { image, name, text, action } = props;

  const [isUpdateFormVisible, setUpdateFromVisible] = useState(false);

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className='rounded object-cover mb-4 w-full sm:h-[240px] sm:w-[240px]'
        />
      ) : (
        <LuUser2 className='w-24 h-24 bg-primary rounded text-white mb-4' />
      )}
      <Button
        variant='outline'
        size='lg'
        className='w-full sm:w-[240px] mb-6 sm:mb-0 mt-4'
        onClick={() => setUpdateFromVisible(!isUpdateFormVisible)}>
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-lg sm:mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput className='w-full sm:w-[240px] mt-2 cursor-pointer' />
            <SubmitButton size='lg' className='mb-8 w-full sm:w-[240px]' />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
