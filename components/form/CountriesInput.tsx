import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import { countries } from '@/utils/countries';

const CountriesInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div className='mb-2'>
      <Label htmlFor='country' className='mb-1'>
        Country
      </Label>
      <Select
        name='country'
        defaultValue={defaultValue || countries[0].code}
        required>
        <SelectTrigger id='country'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countries.map(({ code, flag, name }) => (
            <SelectItem key={code} value={code}>
              <span className='flex items-center gap-2'>
                {flag} {name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountriesInput;
