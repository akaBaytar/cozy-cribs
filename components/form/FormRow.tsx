import { formatCurrency } from '@/helpers/formatCurrency';

const FormRow = ({ label, amount }: { label: string; amount: number }) => {
  return (
    <p className='flex justify-between text-sm mb-2'>
      <span>{label}</span>
      <span className='font-semibold'>{formatCurrency(amount)}</span>
    </p>
  );
};

export default FormRow;
