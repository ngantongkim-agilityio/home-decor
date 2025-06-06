// Libs
import { memo } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { H3, YStack } from 'tamagui';

// Components
import ProductCard from '../ProductCard';

// Types
import { IProduct } from '@/types';

interface IProductListProps {
  products: IProduct[];
  onLoadMore?: () => void;
}

export const ProductList = ({
  products,
  onLoadMore = () => {},
}: IProductListProps) => {
  const router = useRouter();

  const getKeyExtractor = ({ id }: IProduct) => id.toString();

  const renderItemProduct = ({ item }: ListRenderItemInfo<IProduct>) => {
    const handleNavigateProductDetail = (product: IProduct) => {
      const id = product.id.toString();
      router.push(`/details/${id}`);
    };

    return <ProductCard product={item} onPress={handleNavigateProductDetail} />;
  };

  return (
    <YStack rowGap={18}>
      <H3 color="$secondary" fontWeight={500} fontSize={18}>
        New Collection
      </H3>
      <FlatList
        data={products}
        onEndReached={onLoadMore}
        keyExtractor={getKeyExtractor}
        renderItem={renderItemProduct}
        initialNumToRender={4}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnProduct}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
  },
  columnProduct: {
    justifyContent: 'space-between',
    columnGap: 35,
  },
});

export default memo(ProductList);
