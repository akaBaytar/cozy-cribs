import { Input } from '../ui/input';

const NavSearch = () => {
  return (
    <Input
      id='searchBar'
      type='text'
      placeholder='Search...'
      className='max-w-xs dark:bg-muted'
    />
  );
};

export default NavSearch;
