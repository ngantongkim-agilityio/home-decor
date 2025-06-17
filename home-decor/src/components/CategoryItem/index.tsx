import { TouchableOpacity } from 'react-native';
import { Stack } from 'tamagui';

// Icons
import {
  LivingRoomIcon,
  BedRoomIcon,
  DiningRoomIcon,
  KitchenIcon,
} from '@/components';

// Themes
import { colors } from '@/themes';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

interface ICategoryItemProps {
  type: string;
  isActive?: boolean;
  onPress?: () => void;
}
const CategoryItem = ({
  type,
  isActive,
  onPress = () => {},
}: ICategoryItemProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'livingRoom':
        return (
          <LivingRoomIcon
            color={isActive ? colors.secondary : colors.textTertiary}
          />
        );
      case 'bedRoom':
        return (
          <BedRoomIcon
            color={isActive ? colors.secondary : colors.textTertiary}
          />
        );
      case 'diningRoom':
        return (
          <DiningRoomIcon
            color={isActive ? colors.secondary : colors.textTertiary}
          />
        );
      case 'kitchen':
        return (
          <KitchenIcon
            color={isActive ? colors.secondary : colors.textTertiary}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} testID="CategoryItem">
      <Stack
        width={66}
        height={66}
        bg={isActive ? '$primary' : '$tertiary'}
        items="center"
        justify="center"
        borderRadius={10}
      >
        {getIcon(type)}
      </Stack>
    </TouchableOpacity>
  );
};
export default CategoryItem;
