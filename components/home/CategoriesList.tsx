import Link from 'next/link';

import { categories } from '@/utils/categories';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

type ListProps = {
  category?: string;
  search?: string;
};

const CategoriesList = ({ category, search }: ListProps) => {
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <section>
      <ScrollArea className='py-6'>
        <div className='flex gap-x-16 justify-between'>
          {categories.map((each) => (
            <Link
              href={`/?category=${each.label}${searchTerm}`}
              key={each.label}>
              <article
                className={`flex flex-col items-center py-4 cursor-pointer duration-200 hover:text-primary ${
                  each.label === category ? 'text-primary' : ''
                }`}>
                <each.icon className='w-8 h-8' />
                <p className='text-sm mt-1'>{each.label}</p>
              </article>
            </Link>
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  );
};

export default CategoriesList;
