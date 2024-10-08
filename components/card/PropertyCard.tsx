import Image from 'next/image';
import Link from 'next/link';

import FlagAndName from './FlagAndName';
import PropertyRating from './PropertyRating';
import FavoriteButton from './FavoriteButton';

import { formatCurrency } from '@/helpers/formatCurrency';
import { PropertyCard as PropTypes } from '@/types';

const PropertyCard = ({ property }: { property: PropTypes }) => {
  const { name, image, price, country, id, tagline } = property;

  return (
    <article className='relative'>
      <Link href={`/properties/${id}`}>
        <div className='relative h-80 mb-2 overflow-hidden rounded-md'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw, 50vw'
            className='rounded-md object-cover'
          />
        </div>
        <div className='flex justify-between items-center'>
          <h3 className='text-sm font-semibold mt-1'>
            {name.length > 22 ? `${name.substring(0, 19)}...` : name}
          </h3>
          <PropertyRating id={id} inPage={false} />
        </div>
        <p className='text-xs mt-1 text-muted-foreground'>
          {tagline.length > 45 ? `${tagline.substring(0, 42)}...` : tagline}
        </p>
        <div className='flex justify-between items-center mt-1'>
          <p className='text-sm mt-1'>
            <span className='font-semibold'>{formatCurrency(price)}</span>
            <span> / night</span>
          </p>
          <FlagAndName code={country} />
        </div>
      </Link>
      <div className='absolute top-5 right-5 z-5'>
        <FavoriteButton propertyId={id} />
      </div>
    </article>
  );
};

export default PropertyCard;
