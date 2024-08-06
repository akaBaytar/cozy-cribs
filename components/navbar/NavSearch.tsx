import { Input } from '../ui/input';

const NavSearch = () => {
  return (
    <Input
      type='text'
      placeholder='Search a property...'
      className='max-w-xs dark:bg-muted'
    />
  );
};

export default NavSearch;
