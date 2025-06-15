import { ScrollView, StyleSheet } from 'react-native';

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
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {(categories || []).map((item) => (
        <CategoryItem key={item.label} item={item} onPress={onPressItem} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 14,
  },
});

export default CategoryList;
