import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { SubmitButton } from '@/components/form/Buttons';

import PriceInput from '@/components/form/PriceInput';
import CategoriesInput from '@/components/form/CategoriesInput';

import { createRental } from '@/actions/createRental';

const CreateRentals = () => {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8'>Create a Rental</h1>
      <div className='border p-8 rounded'>
        <h3 className='text-lg mb-4 font-medium'>General Info</h3>
        <FormContainer action={createRental}>
          <div className='grid md:grid-cols-2 gap-4 mb-4'>
            <FormInput name='name' type='text' label='Name' />
            <FormInput name='tagline' type='text' label='Tagline' />
            <PriceInput/>
            <CategoriesInput/>
          </div>
          <SubmitButton
            size='lg'
            text='Create a Rental'
            className='w-full mt-12'
          />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateRentals;
