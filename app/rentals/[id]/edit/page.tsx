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
          className='w-full sm:h-[300px] md:h-[400px] object-cover rounded-md'
          buttonClassName='w-full my-4'
          action={updatePropertyImage}>
          <input type='hidden' name='id' value={property.id} />
        </ImageContainer>
        <FormContainer action={updateProperty}>
          <input type='hidden' name='id' value={property.id} />
          <FormInput
            name='name'
            type='text'
            label='Name'
            defaultValue={property.name}
          />
          <div className='grid md:grid-cols-2 gap-4 mb-4 mt-8'>
            <FormInput
              name='tagline'
              type='text'
              label='Tagline'
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>
          <TextAreaInput
            name='description'
            label='Description'
            defaultValue={property.description}
          />
          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Accommodation Details
          </h3>
          <CounterInput detail='guests' defaultValue={property.guests} />
          <CounterInput detail='bedrooms' defaultValue={property.bedrooms} />
          <CounterInput detail='beds' defaultValue={property.beds} />
          <CounterInput detail='baths' defaultValue={property.baths} />
          <SubmitButton text='Edit Property Details' className='mt-8 w-full' />
        </FormContainer>
      </div>
    </section>
  );
};

export default RentalDetails;
