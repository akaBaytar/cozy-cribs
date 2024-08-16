'use client';

import { useState } from 'react';

import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { amenities, Amenity } from '@/utils/amenities';

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const amenitiesWithIcons = defaultValue?.map(({ name, selected }) => {
    return {
      name,
      selected,
      icon: amenities.find((amenity) => amenity.name === name)!.icon,
    };
  });

  const [selected, setSelected] = useState(amenitiesWithIcons || amenities);

  const changeHandler = (amenity: Amenity) => {
    setSelected((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected };
        }

        return a;
      });
    });
  };

  return (
    <section className='border rounded-2xl p-6'>
      <input type='hidden' name='amenities' value={JSON.stringify(selected)} />
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {selected.map((amenity) => (
          <div key={amenity.name} className='flex items-center gap-x-2'>
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => changeHandler(amenity)}
            />
            <Label
              htmlFor={amenity.name}
              className='text-sm font-medium leading-none capitalize flex gap-x-2 items-center cursor-pointer'>
              <amenity.icon className='w-4 h-4' /> {amenity.name}
            </Label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesInput;
