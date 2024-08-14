import { Label } from '../ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { numbers } from '@/helpers/ratingNumbers';

type PropTypes = {
  name: string;
  label?: string;
};

const RatingInput = ({ name, label }: PropTypes) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Select defaultValue={numbers[0]} name={name} required>
        <SelectTrigger className='mt-1'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {numbers.map((number) => (
            <SelectItem key={number} value={number}>
              {number}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RatingInput;
