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
          imageClassName='rounded object-cover mb-[12px] mt-[6px] w-full sm:h-[238px] sm:w-[238px]'
          buttonClassName='w-full sm:w-[240px] mb-6 sm:mb-0 mt-4'
          imageInputClassName='w-full sm:w-[240px] mt-2 cursor-pointer'
          submitButtonClassName='mb-8 w-full sm:w-[240px]'
          action={updateAvatar}
        />
        <FormContainer action={updateProfile}>
          <div className='grid gap-[18.5px] w-full'>
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
