import { LuCheckSquare } from 'react-icons/lu';
import { Amenity } from '@/utils/amenities';
import Title from './Title';

const Amenities = ({ amenities }: { amenities: string }) => {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);

  const noAmenity = amenitiesList.every((amenity) => !amenity.selected);

  if (noAmenity) return null;

  return (
    <div className='mt-4'>
      <Title text='Place Offers' />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;

          return (
            <div key={amenity.name} className='flex items-center gap-1 mb-2'>
              <LuCheckSquare className='h-5 w-5 text-primary' />
              <span className='text-sm capitalize'>{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
