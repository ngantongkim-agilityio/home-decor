// Libs
import { memo, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Components
import ProductCard from '../ProductCard';

// Types
import { IProduct } from '@/types';

interface IProductListProps {
  products: IProduct[];
  headerChildren?: React.ReactNode;
  onLoadMore?: () => void;
}

export const ProductList = ({
  products,
  headerChildren,
  onLoadMore = () => {},
}: IProductListProps) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const getKeyExtractor = useCallback(({ id }: IProduct) => id.toString(), []);

  const renderItemProduct = useCallback(
    ({ item }: ListRenderItemInfo<IProduct>) => {
      const handleNavigateProductDetail = (product: IProduct) => {
        const id = product.id.toString();
        router.push(`/details/${id}`);
      };

      return (
        <ProductCard product={item} onPress={handleNavigateProductDetail} />
      );
    },
    [router],
  );

  const renderHeaderComponent = useCallback(
    () => (headerChildren ? <>{headerChildren}</> : null),
    [headerChildren],
  );

  return (
    <FlatList
      data={products}
      onEndReached={onLoadMore}
      keyExtractor={getKeyExtractor}
      renderItem={renderItemProduct}
      ListHeaderComponent={renderHeaderComponent}
      initialNumToRender={6}
      numColumns={2}
      nestedScrollEnabled
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={{ paddingBottom: insets.bottom ? 30 : 20 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    columnGap: 35,
  },
});

export default memo(ProductList);
