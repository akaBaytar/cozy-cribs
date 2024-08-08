import { Input } from '../ui/input';
import { Label } from '../ui/label';

type ImageInputProps = {
  label?: string;
  className?: string;
};

const ImageInput = ({ label, className }: ImageInputProps) => {
  return (
    <div className='mb-4'>
      <Label htmlFor='image'>{label}</Label>
      <Input
        id='image'
        name='image'
        type='file'
        accept='image/*'
        className={className}
        required
      />
    </div>
  );
};

export default ImageInput;
