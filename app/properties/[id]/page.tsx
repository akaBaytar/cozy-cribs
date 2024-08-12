import { redirect } from 'next/navigation';
import { fetchPropertyDetails } from '@/actions/fetchPropertyDetails';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect('/');

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return <div>PropertyDetailsPage</div>;
};

export default PropertyDetailsPage;
