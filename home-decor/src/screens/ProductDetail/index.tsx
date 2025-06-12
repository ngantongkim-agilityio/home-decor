// Libs
import { useCallback } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, XStack, Circle, H2, YStack, Separator } from 'tamagui';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

// Components
import { BackIcon, SearchIcon } from '@/components/icons';
import { Button, Image } from '@/components';

// Hooks
import { useProducts } from '@/hooks';
import { scheduleNotification } from '@/utils';

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { useFetchProductDetail } = useProducts();
  const { data } = useFetchProductDetail(id as string);
  const { listing } = data?.data || {};

  // const handleBackPrevScreen = () => {
  //   router.navigate(`/`);
  // };

  // const generateLinks = async () => {
  //   try {
  //     const link = await dynamicLinks().buildShortLink(
  //       {
  //         link: 'https://furnitureshopping.page.link/RtQw?',
  //         domainUriPrefix: 'https://furnitureshopping.page.link',
  //         android: {
  //           packageName: 'com.furnitureshoppingapp',
  //         },
  //       },
  //       dynamicLinks.ShortLinkType.DEFAULT,
  //     );
  //     return link;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleShare = async () => {
  //   try {
  //     const getLink = await generateLinks();

  //     Share.share({
  //       message: getLink ?? '',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleAddToCart = useCallback(async () => {
    await scheduleNotification({
      id: id as string,
      body: 'Product added to cart successfully!',
    });
  }, [id]);

  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: '100%', paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <YStack rowGap={20}>
          <XStack items="center" justify="space-between" py={10}>
            <BackIcon onPress={handleBack} />
            <Text color="$primary" fontWeight={600} fontSize={20}>
              {listing?.categories[0]?.name}
            </Text>
            <Circle bg="$primary" width={31} height={31}>
              <SearchIcon />
            </Circle>
          </XStack>
          <Image
            source={{ uri: listing?.images[0] || '' }}
            width={'100%'}
            height={264}
            borderRadius={20}
          />
          <YStack rowGap={10} mt={10}>
            <H2 fontWeight={'600'} fontSize={24} letterSpacing={0}>
              {listing?.title || ''}
            </H2>
            <Text fontWeight={300} fontSize={12}>
              {listing?.description || ''}
            </Text>
            <Separator borderColor="$primary" my={8} borderWidth={1} />
            <Text color="$primary" fontWeight={600} fontSize={24}>
              {listing?.offer_price?.formatted}
            </Text>
          </YStack>

          <XStack justify="center" mt={50}>
            <Button width={207} onPress={handleAddToCart}>
              Add To Cart
            </Button>
          </XStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
