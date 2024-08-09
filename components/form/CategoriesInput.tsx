import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { categories } from '@/utils/categories';

const CategoriesInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div className='mb-2'>
      <Label htmlFor='category'>
        Categories
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name='category'
        required>
        <SelectTrigger id='category' className='mt-1'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.label} value={category.label}>
              <span className='flex items-center gap-2'>
                <category.icon />
                {category.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoriesInput;
