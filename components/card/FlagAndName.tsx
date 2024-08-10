import { findCountryByCode } from '@/utils/countries';

const FlagAndName = ({ code }: { code: string }) => {
  const country = findCountryByCode(code)!;

  return (
    <span className='flex justify-between items-center gap-2 text-sm'>
      {country.flag} {country.name}
    </span>
  );
};

export default FlagAndName;
