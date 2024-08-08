import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageContainer from '@/components/form/ImageContainer';

import { SubmitButton } from '@/components/form/Buttons';

import { updateProfile } from '@/actions/updateProfile';
import { fetchProfile } from '@/actions/fetchProfile';
import { updateAvatar } from '@/actions/updateAvatar';

const Profile = async () => {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8'>Profile</h1>
      <div className='border p-8 rounded-md grid sm:grid-cols-2 sm:gap-4'>
        <ImageContainer
          image={profile.profileImage}
          name={profile.clerkId}
          text='Update Avatar'
          action={updateAvatar}
        />
        <FormContainer action={updateProfile}>
          <div className='grid gap-[22px] w-full'>
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
            <SubmitButton text='Update Profile' className='w-full' />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};

export default Profile;
