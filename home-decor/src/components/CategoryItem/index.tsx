import { TouchableWithoutFeedback } from 'react-native';
import { Image, Text, Stack } from 'tamagui';
// Types
import { ICategory } from '@/types';

interface ICategoryItemProps {
  item: ICategory;
  onPress?: () => void;
}
const CategoryItem = ({ item, onPress = () => {} }: ICategoryItemProps) => {
  const Icon = item.imageSrc;

  return (
    <TouchableWithoutFeedback onPress={onPress} testID="CategoryItem">
      <Stack>
        <Stack
          width={44}
          height={44}
          background={item.isActive ? '$bgDark' : '$bgSecondary'}
        >
          <Icon />
        </Stack>
        <Text
          mt={3}
          fontWeight={item.isActive ? '600' : '400'}
          color={item.isActive ? '$secondary' : '$textSecondary'}
          fontSize={14}
        >
          {item.label}
        </Text>
      </Stack>
    </TouchableWithoutFeedback>
  );
};
export default CategoryItem;
