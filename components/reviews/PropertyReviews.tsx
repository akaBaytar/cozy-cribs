import ReviewCard from './ReviewCard';
import Title from '../properties/Title';

import { fetchReviews } from '@/actions/fetchReviews';

const PropertyReviews = async ({ id }: { id: string }) => {
  const reviews = await fetchReviews(id);

  if (reviews.length < 1) return null;

  return (
    <div className='mt-8 lg:w-8/12'>
      <Title text='Reviews' />
      <div className='grid gap-8 mt-4'>
        {reviews.map((review) => {
          const { comment, id, profile, rating } = review;

          const reviewInfo = {
            comment,
            rating,
            name: profile.firstName,
            image: profile.profileImage,
          };

          return <ReviewCard key={id} review={reviewInfo} />;
        })}
      </div>
    </div>
  );
};

export default PropertyReviews;
