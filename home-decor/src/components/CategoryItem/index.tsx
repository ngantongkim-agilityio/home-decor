import { TouchableWithoutFeedback } from 'react-native';
import { Image, Text, Stack } from 'tamagui';
// Types
import { ICategory } from '@/types';

interface ICategoryItemProps {
  item: ICategory;
  onPress?: () => void;
}
const CategoryItem = ({ item, onPress = () => {} }: ICategoryItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} testID="CategoryItem">
      <Stack>
        <Stack
          width={44}
          height={44}
          background={item.isActive ? '$bgDark' : '$bgSecondary'}
        >
          <Image source={{ uri: item.imageSrc }} width={28} height={28} />
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
