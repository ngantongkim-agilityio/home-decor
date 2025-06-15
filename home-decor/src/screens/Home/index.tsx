import { useCallback, useMemo } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Circle, H1, H3, H4, Text, XStack, YStack } from 'tamagui';
import { CategoryList, ProductList, SearchIcon, Image } from '@/components';

// Constants
import { INIT_PAGE, CATEGORIES_DATA } from '@/constants';

// Hooks
import { useProducts } from '@/hooks';

// Utils
import { formatProducts, getProductList } from '@/utils';

// Themes
import { systemThemes } from '@/themes';

const Home = () => {
  const colorScheme = useColorScheme();
  const { useFetchProducts } = useProducts();
  const { data, hasNextPage, fetchNextPage } = useFetchProducts(INIT_PAGE);
  const pages = useMemo(() => data?.pages ?? [], [data?.pages]);
  const products = useMemo(
    () => (pages.length > 0 && getProductList(pages)) || [],
    [pages],
  );
  const formattedProducts = useMemo(
    () => (products.length > 0 && formatProducts(products)) || [],
    [products],
  );

  const handleLoadMore = useCallback(async () => {
    hasNextPage && (await fetchNextPage());
  }, [hasNextPage, fetchNextPage]);

  const renderHeader = useCallback(() => {
    return (
      <YStack flex={1} rowGap={24}>
        <Image
          source={require('@/assets/images/banner.png')}
          width="100%"
          height={132}
        />
        <YStack rowGap={18}>
          <H3 color="$secondary" fontWeight={500} fontSize={18}>
            Categories
          </H3>
          <CategoryList categories={CATEGORIES_DATA} />
        </YStack>
        <YStack rowGap={18}>
          <H3 color="$secondary" fontWeight={500} fontSize={18}>
            Best Seller
          </H3>
          <XStack
            bg="$primary"
            borderRadius={10}
            height={132}
            position="relative"
            mt={10}
          >
            <YStack width="60%" p={20} rowGap={10}>
              <H4 fontWeight={500} fontSize={16}>
                Kitchen Cart
              </H4>
              <Text fontWeight={300} fontSize={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </YStack>
            <Image
              source={require('@/assets/images/best-seller.png')}
              width={171}
              height={171}
              containerStyle={{ position: 'absolute', top: -40, right: 0 }}
            />
          </XStack>
        </YStack>
        <H3 color="$secondary" fontWeight={500} fontSize={18} mb={18}>
          New Collection
        </H3>
      </YStack>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={systemThemes[colorScheme ?? 'light'].bgPrimary}
        style={colorScheme === 'light' ? 'dark' : 'light'}
      />
      <YStack flex={1} bg="$bgPrimary">
        <YStack flex={1} px={20} rowGap={24}>
          <XStack justify="space-between" pt={24}>
            <YStack>
              <H1
                color="$primary"
                fontWeight={600}
                fontSize={20}
                letterSpacing={0}
              >
                Hi, Welcome Back
              </H1>
              <Text fontSize={12} color="$textPrimary">
                Create spaces that bring joy
              </Text>
            </YStack>
            <Circle bg="$primary" width={31} height={31}>
              <SearchIcon />
            </Circle>
          </XStack>
          <ProductList
            products={formattedProducts}
            headerChildren={renderHeader()}
            onLoadMore={handleLoadMore}
          />
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
