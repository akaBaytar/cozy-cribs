import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import Breadcrumbs from '@/components/properties/Breadcrumbs';
import NameAndTagline from '@/components/properties/NameAndTagline';
import FavoriteButton from '@/components/card/FavoriteButton';
import ShareButton from '@/components/properties/ShareButton';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyRating from '@/components/card/PropertyRating';
import Details from '@/components/properties/PropertyDetails';
import BookingCalendar from '@/components/properties/BookingCalendar';
import UserInfo from '@/components/properties/UserInfo';
import Description from '@/components/properties/Description';
import Amenities from '@/components/properties/Amenities';

import { fetchPropertyDetails } from '@/actions/fetchPropertyDetails';

const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => (
      <>
        <Skeleton className='h-[12px] w-full mt-4' />
        <Skeleton className='h-[12px] w-full mt-4' />
        <Skeleton className='h-[400px] w-full mt-4' />
      </>
    ),
  }
);

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect('/');

  const {
    category,
    name,
    tagline,
    id,
    description,
    image,
    profile,
    amenities,
    country,
  } = property;

  const { firstName, profileImage } = profile;

  const { baths, bedrooms, beds, guests } = property;

  const details = { baths, bedrooms, beds, guests };

  return (
    <section>
      <Breadcrumbs category={category} name={name} />
      <header className='flex justify-between items-center mt-4'>
        <NameAndTagline name={name} tagline={tagline} />
        <div className='flex items-center gap-2'>
          <ShareButton propertyId={id} name={name} />
          <FavoriteButton propertyId={id} />
        </div>
      </header>
      <ImageContainer src={image} alt={name} />
      <section className='lg:flex lg:justify-between gap-x-12 mt-8 sm:mt-12'>
        <div>
          <div className='flex justify-between gap-4 text-sm sm:text-lg'>
            <h2 className='font-semibold'>{name}</h2>
            <PropertyRating inPage={false} id={id} />
          </div>
          <Details details={details} />
          <UserInfo img={profileImage} name={firstName} />
          <Separator className='mt-4' />
          <Description description={description} />
          <Amenities amenities={amenities} />
          <DynamicMap code={country} />
        </div>
        <div className='mt-8 sm:mt-12 lg:mt-0'>
          <BookingCalendar />
        </div>
      </section>
    </section>
  );
};

export default PropertyDetailsPage;
