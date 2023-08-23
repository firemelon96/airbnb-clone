'use client';
import React from 'react';
import CategoryBox from '../category-box';
import { MdOutlineVilla } from 'react-icons/md';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { FaSkiing } from 'react-icons/fa';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../container';

export const categories = [
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has windmills',
  },
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property has windmills',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the country side',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This property has pool',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property has an Island',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close to a lake',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has ski activity',
  },
  {
    label: 'Catle',
    icon: GiCastle,
    description: 'This property is in a castle',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is in a Cave',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in the Barn',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property luxurious',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
