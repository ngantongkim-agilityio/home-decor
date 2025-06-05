import { TouchableWithoutFeedback } from 'react-native';
import { Image, Text, Stack } from 'tamagui';

// Types
import { ICategory } from '@/types';

// Colors
import { colors } from '@/themes';

interface ICategoryItemProps {
  item: ICategory;
  onPress?: () => void;
}
const CategoryItem = ({ item, onPress = () => {} }: ICategoryItemProps) => {
  const Icon = item.imageSrc;

  return (
    <TouchableWithoutFeedback onPress={onPress} testID="CategoryItem">
      <Stack
        width={66}
        height={66}
        bg={item.isActive ? '$primary' : '$tertiary'}
        items="center"
        justify="center"
        borderRadius={10}
      >
        <Icon color={item.isActive ? colors.secondary : colors.textTertiary} />
      </Stack>
    </TouchableWithoutFeedback>
  );
};
export default CategoryItem;
