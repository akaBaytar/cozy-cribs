import Image from 'next/image';

import Rating from './Rating';
import Comment from './Comment';

import { Card, CardContent, CardHeader } from '../ui/card';

type PropTypes = {
  review: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };

  children?: React.ReactNode;
};

const ReviewCard = ({ review, children }: PropTypes) => {
  return (
    <Card className='relative'>
      <CardHeader>
        <div className='flex items-center'>
          <Image
            src={review.image}
            alt={`${review.name} avatar`}
            width={48}
            height={48}
            className='w-12 h-12 rounded-full object-cover'
          />
          <div className='ml-4'>
            <h3 className='text-sm mb-1 capitalize'>
              {review.name}
            </h3>
            <Rating rating={review.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={review.comment} />
      </CardContent>
      <div className='absolute top-3 right-3'>{children}</div>
    </Card>
  );
};

export default ReviewCard;
