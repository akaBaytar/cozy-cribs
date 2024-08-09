import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextAreaProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const TextAreaInput = ({ name, label, defaultValue }: TextAreaProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className='leading-loose mt-1 resize-none'
      />
    </div>
  );
};

export default TextAreaInput;
