'use client';

import { icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';

import Title from './Title';
import FlagAndName from '../card/FlagAndName';
import { findCountryByCode } from '@/utils/countries';

import 'leaflet/dist/leaflet.css';

const url = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const marker = icon({ iconUrl: url, iconSize: [20, 30] });

const PropertyMap = ({ code }: { code: string }) => {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryByCode(code)?.location as [number, number];

  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <Title text='Where You Will Be Staying' />
        <FlagAndName code={code} />
      </div>
      <MapContainer
        zoom={7}
        scrollWheelZoom={false}
        zoomControl={false}
        center={location || defaultLocation}
        className='relative z-0 h-[400px] rounded-md'>
        <TileLayer
          attribution=''
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker position={location || defaultLocation} icon={marker} />
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
