import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';

import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';

import { SubmitButton } from '@/components/form/Buttons';
import { createProfile } from '@/actions/createProfile';

const CreateProfile = async () => {
  const user = await currentUser();

  if (user?.privateMetadata.hasProfile) redirect('/');

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8'>New User</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProfile}>
          <div className='grid md:grid-cols-2 gap-4 md:gap-x-8 mt-4'>
            <FormInput
              type='text'
              name='firstName'
              label='First Name'
              autoComplete='given-name'
            />
            <FormInput
              type='text'
              name='lastName'
              label='Last Name'
              autoComplete='family-name'
            />
            <FormInput
              type='email '
              name='email'
              label='Email'
              autoComplete='email'
              defaultValue={user?.emailAddresses[0].emailAddress}
            />
            <SubmitButton text='Create a Profile' className='mt-6 h-9 w-full' />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;
