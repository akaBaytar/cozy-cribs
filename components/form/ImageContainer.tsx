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
  imageClassName?: string;
  buttonClassName?: string;
  imageInputClassName?: string;
  submitButtonClassName?: string;
};

const ImageContainer = (props: ImageContainerProps) => {
  const { image, name, text, action } = props;

  const {
    imageClassName,
    buttonClassName,
    imageInputClassName,
    submitButtonClassName,
  } = props;

  const [isUpdateFormVisible, setUpdateFromVisible] = useState(false);

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className={imageClassName}
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
        <div className='sm:mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput className={imageInputClassName} />
            <SubmitButton size='lg' className={submitButtonClassName} />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
