import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';

import { updateProfile } from '@/actions/updateProfile';
import { fetchProfile } from '@/actions/fetchProfile';

const Profile = async () => {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8'>Profile</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={updateProfile}>
          <div className='grid md:grid-cols-2 gap-4 md:gap-x-8 mt-4'>
            <FormInput
              type='text'
              name='firstName'
              label='First Name'
              defaultValue={profile.firstName}
            />
            <FormInput
              type='text'
              name='lastName'
              label='Last Name'
              defaultValue={profile.lastName}
            />
            <FormInput
              type='email '
              name='email'
              label='Email'
              defaultValue={profile.email}
            />
            <SubmitButton text='Update Profile' className='mt-6 h-9 w-full' />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};

export default Profile;
