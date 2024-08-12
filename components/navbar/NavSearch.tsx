'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

const NavSearch = () => {
  const params = useSearchParams();

  const { replace } = useRouter();

  const [search, setSearch] = useState(params.get('search')?.toString() || '');

  const propertySearch = useDebouncedCallback((value: string) => {
    const searchParams = new URLSearchParams(params);

    value ? searchParams.set('search', value) : searchParams.delete('search');

    replace(`/?${searchParams.toString()}`);
  }, 500);

  useEffect(() => {
    if (!params.get('search')) setSearch('');
  }, [params]);

  return (
    <Input
      id='searchBar'
      type='text'
      placeholder='Search...'
      className='max-w-xs dark:bg-muted'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        propertySearch(e.target.value);
      }}
    />
  );
};

export default NavSearch;
