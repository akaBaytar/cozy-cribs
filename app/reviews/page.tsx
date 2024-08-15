import Title from '@/components/properties/Title';
import EmptyList from '@/components/home/EmptyList';
import ReviewCard from '@/components/reviews/ReviewCard';
import DeleteReview from '@/components/reviews/DeleteReview';

import { fetchReviewByUser } from '@/actions/fetchReviewByUser';

const Reviews = async () => {
  const reviews = await fetchReviewByUser();

  if (reviews.length < 1)
    return (
      <EmptyList
        heading='Your review list is empty'
        message='Browse the properties and and leave comments on them.'
        buttonText='Browse the Properties'
      />
    );

  return (
    <>
      <Title text='Your Reviews' />
      <section className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { id, comment, rating, property } = review;
          const { image, name } = property;
          const reviewInfo = { comment, rating, name, image };

          return (
            <ReviewCard key={id} review={reviewInfo}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
