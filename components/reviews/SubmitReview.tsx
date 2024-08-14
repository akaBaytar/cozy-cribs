'use client';

import { useState } from 'react';

import { nanoid } from 'nanoid';

import FormContainer from '../form/FormContainer';
import RatingInput from '../form/RatingInput';
import TextAreaInput from '../form/TextAreaInput';
import { SubmitButton } from '../form/Buttons';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

import { createReview } from '@/actions/createReview';

const SubmitReview = ({ id }: { id: string }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className='mt-8'>
      <Button
        size='lg'
        onClick={() => setVisible(!isVisible)}
        className='w-full lg:w-8/12'>
        Leave a Review
      </Button>
      {isVisible && (
        <Card className='p-4 mt-8 lg:w-8/12'>
          <FormContainer action={createReview}>
            <input type='hidden' name='propertyId' value={id} />
            <RatingInput name='rating' label='Your Rating' key={nanoid()} />
            <TextAreaInput name='comment' label='Your Comment' key={nanoid()} />
            <SubmitButton text='Submit' className='mt-4 w-full' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SubmitReview;
