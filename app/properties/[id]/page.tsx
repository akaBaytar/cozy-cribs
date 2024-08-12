import { redirect } from 'next/navigation';

import Breadcrumbs from '@/components/properties/Breadcrumbs';
import FavoriteButton from '@/components/card/FavoriteButton';

import { fetchPropertyDetails } from '@/actions/fetchPropertyDetails';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect('/');

  const { category, name, tagline, id } = property;

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return (
    <section>
      <Breadcrumbs category={category} name={name} />
      <header className='flex justify-between items-center mt-4'>
        <article>
          <h1 className='text-2xl font-semibold'>{name}</h1>
          <h2 className='text-muted-foreground'>{tagline}</h2>
        </article>
        <div className='flex items-center gap-4'>
          {/* TODO =====> SHARE BUTTON */}
          <FavoriteButton propertyId={id} />
        </div>
      </header>
    </section>
  );
};

export default PropertyDetailsPage;
