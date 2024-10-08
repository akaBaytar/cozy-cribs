import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

import { auth } from '@clerk/nextjs/server';

import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import Breadcrumbs from '@/components/properties/Breadcrumbs';
import NameAndTagline from '@/components/properties/NameAndTagline';
import FavoriteButton from '@/components/card/FavoriteButton';
import ShareButton from '@/components/properties/ShareButton';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyRating from '@/components/card/PropertyRating';
import Details from '@/components/properties/PropertyDetails';
import UserInfo from '@/components/properties/UserInfo';
import Description from '@/components/properties/Description';
import Amenities from '@/components/properties/Amenities';
import SubmitReview from '@/components/reviews/SubmitReview';
import PropertyReviews from '@/components/reviews/PropertyReviews';

import { fetchReview } from '@/actions/fetchReview';
import { fetchPropertyDetails } from '@/actions/fetchPropertyDetails';

const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full mt-4' />,
  }
);

const DynamicBooking = dynamic(
  () => import('@/components/booking/BookingWrapper'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[300px] w-full mt-4' />,
  }
);

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect('/');

  const { baths, bedrooms, beds, guests, price } = property;
  const { category, tagline, description, bookings } = property;
  const { id, name, image, profile, amenities, country } = property;

  const { firstName, profileImage } = profile;

  const details = { baths, bedrooms, beds, guests };

  const { userId } = auth();

  const isNotOwner = property.profile.clerkId !== userId;

  const reviewDoesNotExist =
    userId && isNotOwner && !(await fetchReview(userId, property.id));

  return (
    <section>
      <Breadcrumbs category={category} name={name} />
      <header className='flex justify-between items-center mt-4 gap-y-4 flex-wrap'>
        <NameAndTagline name={name} tagline={tagline} />
        <div className='flex items-center gap-2'>
          <ShareButton propertyId={id} name={name} />
          <FavoriteButton propertyId={id} />
        </div>
      </header>
      <ImageContainer src={image} alt={name} />
      <section className='lg:flex lg:justify-between gap-x-12 mt-8 sm:mt-12'>
        <div className='lg:w-7/12'>
          <div className='flex justify-between gap-x-4 gap-y-2 sm:text-lg flex-wrap'>
            <h2>{name}</h2>
            <PropertyRating inPage id={id} />
          </div>
          <Details details={details} />
          <UserInfo img={profileImage} name={firstName} />
          <Separator className='mt-4' />
          <Description description={description} />
          <Amenities amenities={amenities} />
          <DynamicMap code={country} />
        </div>
        <div className='mt-8 sm:mt-12 lg:mt-0 lg:w-1/3'>
          <DynamicBooking bookings={bookings} price={price} propertyId={id} />
        </div>
      </section>
      {reviewDoesNotExist && <SubmitReview id={property.id} />}
      <PropertyReviews id={property.id} />
    </section>
  );
};

export default PropertyDetailsPage;
