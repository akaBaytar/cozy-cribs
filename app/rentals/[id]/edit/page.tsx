import { redirect } from 'next/navigation';

import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CountriesInput from '@/components/form/CountriesInput';
import CounterInput from '@/components/form/CounterInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';
import ImageContainer from '@/components/form/ImageContainer';
import { SubmitButton } from '@/components/form/Buttons';

import { type Amenity } from '@/utils/amenities';

import { fetchRentalDetails } from '@/actions/fetchRentalDetails';
import { updateProperty } from '@/actions/updateProperty';
import { updatePropertyImage } from '@/actions/updatePropertyImage';

const RentalDetails = async ({ params }: { params: { id: string } }) => {
  const property = await fetchRentalDetails(params.id);

  if (!property) redirect('/');

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-4'>Edit Property Details</h1>
      <div className='border p-8 rounded-md'>
        <ImageContainer
          name={property.name}
          image={property.image}
          text='Update Image'
          action={updatePropertyImage}>
          <input type='hidden' name='id' value={property.id} />
        </ImageContainer>
      </div>
    </section>
  );
};

export default RentalDetails;
