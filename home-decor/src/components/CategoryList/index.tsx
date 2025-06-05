import { ScrollView, StyleSheet } from 'react-native';
import { H3, Stack, YStack } from 'tamagui';

// Components
import CategoryItem from '../CategoryItem';

// Types
import { ICategory } from '@/types';

interface ICategoryListProps {
  categories: ICategory[];
  onPressItem?: () => void;
}

const CategoryList = ({
  categories,
  onPressItem = () => {},
}: ICategoryListProps) => {
  return (
    <YStack rowGap={18}>
      <H3 color="$secondary" fontWeight={500} fontSize={18}>
        Categories
      </H3>
      <ScrollView
        horizontal
        contentContainerStyle={styles.wrapper}
        showsHorizontalScrollIndicator={false}
      >
        {(categories || []).map((item) => (
          <CategoryItem key={item.label} item={item} onPress={onPressItem} />
        ))}
      </ScrollView>
    </YStack>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    columnGap: 14,
  },
});

export default CategoryList;
