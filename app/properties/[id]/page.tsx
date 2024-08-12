import { redirect } from 'next/navigation';

import Breadcrumbs from '@/components/properties/Breadcrumbs';
import NameAndTagline from '@/components/properties/NameAndTagline';
import FavoriteButton from '@/components/card/FavoriteButton';
import ShareButton from '@/components/properties/ShareButton';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyRating from '@/components/card/PropertyRating';
import Details from '@/components/properties/PropertyDetails';
import BookingCalendar from '@/components/properties/BookingCalendar';
import UserInfo from '@/components/properties/UserInfo';

import { fetchPropertyDetails } from '@/actions/fetchPropertyDetails';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect('/');

  const { category, name, tagline, id, description, image, profile } = property;

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
        </div>
        <div className='mt-8 sm:mt-12 lg:mt-0'>
          <BookingCalendar />
        </div>
      </section>
    </section>
  );
};

export default PropertyDetailsPage;
