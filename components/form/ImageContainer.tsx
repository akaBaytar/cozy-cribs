'use client';

import { useState } from 'react';
import Image from 'next/image';

import { LuUser2 } from 'react-icons/lu';

import { Button } from '../ui/button';
import { SubmitButton } from './Buttons';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';

import { type actionFunction } from '@/types';

type ImageContainerProps = {
  image: string;
  name: string;
  text: string;
  action: actionFunction;
  children?: React.ReactNode;
  className?: string;
  buttonClassName?:string
};

const ImageContainer = (props: ImageContainerProps) => {
  const { image, name, text, className,buttonClassName, action } = props;

  const [isUpdateFormVisible, setUpdateFromVisible] = useState(false);

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className={className}
        />
      ) : (
        <LuUser2 className='w-24 h-24 bg-primary rounded text-white mb-4' />
      )}
      <Button
        variant='outline'
        size='lg'
        className={buttonClassName}
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
