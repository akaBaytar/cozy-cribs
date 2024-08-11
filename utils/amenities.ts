import { IconType } from 'react-icons';

import { LuBath, LuParkingCircle } from 'react-icons/lu';
import { FaShower } from 'react-icons/fa';
import { GiHeatHaze } from 'react-icons/gi';
import { IoBedOutline } from 'react-icons/io5';
import { FaKitchenSet, FaWifi } from 'react-icons/fa6';
import { TbAirConditioning } from 'react-icons/tb';
import { IoIosBonfire, IoMdSunny } from 'react-icons/io';
import { GiCooler, GiLanternFlame, GiFirstAidKit } from 'react-icons/gi';

import {
  PiTowel,
  PiCookingPot,
  PiSolarPanel,
  PiPicnicTable,
} from 'react-icons/pi';

import {
  MdWaterDrop,
  MdBedtimeOff,
  MdOutlineOutdoorGrill,
} from 'react-icons/md';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: 'wi-fi', icon: FaWifi, selected: false },
  { name: 'parking', icon: LuParkingCircle, selected: false },
  { name: 'fire pit', icon: IoIosBonfire, selected: false },
  { name: 'bbq grill', icon: MdOutlineOutdoorGrill, selected: false },
  { name: 'outdoor furniture', icon: IoMdSunny, selected: false },
  { name: 'private bathroom', icon: LuBath, selected: false },
  { name: 'hot shower', icon: FaShower, selected: false },
  { name: 'kitchenette', icon: FaKitchenSet, selected: false },
  { name: 'heating', icon: GiHeatHaze, selected: false },
  { name: 'air conditioning', icon: TbAirConditioning, selected: false },
  { name: 'bed linens', icon: IoBedOutline, selected: false },
  { name: 'towels', icon: PiTowel, selected: false },
  { name: 'picnic table', icon: PiPicnicTable, selected: false },
  { name: 'hammock', icon: MdBedtimeOff, selected: false },
  { name: 'solar power', icon: PiSolarPanel, selected: false },
  { name: 'water supply', icon: MdWaterDrop, selected: false },
  { name: 'cooking utensils', icon: PiCookingPot, selected: false },
  { name: 'cool box', icon: GiCooler, selected: false },
  { name: 'lanterns', icon: GiLanternFlame, selected: false },
  { name: 'first aid kit', icon: GiFirstAidKit, selected: false },
];
