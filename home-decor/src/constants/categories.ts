import {
  LivingRoomIcon,
  BedRoomIcon,
  DiningRoomIcon,
  KitchenIcon,
  OfficeIcon,
} from '@/components';

export const CATEGORIES_DATA = [
  {
    id: 'living-room',
    imageSrc: LivingRoomIcon,
    label: 'Living room',
    isActive: true,
  },
  {
    id: 'bed-room',
    imageSrc: BedRoomIcon,
    label: 'Bed room',
    isActive: false,
  },
  {
    id: 'dining-room',
    imageSrc: DiningRoomIcon,
    label: 'Dining room',
    isActive: false,
  },
  {
    id: 'kitchen',
    imageSrc: KitchenIcon,
    label: 'Kitchen',
    isActive: false,
  },
  {
    id: 'office',
    imageSrc: KitchenIcon,
    label: 'Office',
    isActive: false,
  },
  {
    id: 'office-two',
    imageSrc: KitchenIcon,
    label: 'Office Two',
    isActive: false,
  },
];
