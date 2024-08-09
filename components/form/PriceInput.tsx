import { Input } from '../ui/input';
import { Label } from '../ui/label';

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor='price'>Price</Label>
      <Input
        id='price'
        name='price'
        type='number'
        min={0}
        required
        defaultValue={defaultValue}
        className='mt-1'
      />
    </div>
  );
};

export default PriceInput;
