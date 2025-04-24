import { ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'tamagui';

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
    <ScrollView
      horizontal
      contentContainerStyle={styles.wrapper}
      showsHorizontalScrollIndicator={false}
    >
      {(categories || []).map((item) => (
        <Stack key={item.label}>
          <CategoryItem item={item} onPress={onPressItem} />
        </Stack>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingBottom: 25,
    marginBottom: 25,
  },
});

export default CategoryList;
