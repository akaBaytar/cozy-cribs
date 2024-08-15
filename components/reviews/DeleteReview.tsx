import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

import { deleteReview } from '@/actions/deleteReview';

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReviewAction = deleteReview.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReviewAction}>
      <IconButton action='delete' />
    </FormContainer>
  );
};

export default DeleteReview;
