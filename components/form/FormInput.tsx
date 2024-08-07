import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  defaultValue?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, autoComplete, label, placeholder, defaultValue } = props;

  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormInput;
