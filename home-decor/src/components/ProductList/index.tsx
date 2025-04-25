// Libs
import { memo } from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

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
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const getKeyExtractor = ({ id }: IProduct) => id.toString();

  const renderItemProduct = ({ item }: ListRenderItemInfo<IProduct>) => {
    const handleNavigateProductDetail = (product: IProduct) => {
      // navigation.navigate(SCREEN.PRODUCT_DETAIL, { product });
    };

    return <ProductCard product={item} onPress={handleNavigateProductDetail} />;
  };

  return (
    <FlatList
      data={products}
      onEndReached={onLoadMore}
      keyExtractor={getKeyExtractor}
      renderItem={renderItemProduct}
      initialNumToRender={4}
      numColumns={2}
      columnWrapperStyle={styles.columnProduct}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
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
