import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

import { deleteBooking } from '@/actions/deleteBooking';

const DeleteBooking = ({ bookingId }: { bookingId: string }) => {
  const deleteBookingAction = deleteBooking.bind(null, { bookingId });

  return (
    <FormContainer action={deleteBookingAction}>
      <IconButton action='delete' />
    </FormContainer>
  );
};

export default DeleteBooking;
