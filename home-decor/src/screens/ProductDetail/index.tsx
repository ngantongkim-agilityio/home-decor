// Libs
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Dimensions, View, Share } from 'react-native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Image, Text, Button as ButtonIcon } from 'tamagui';
// import dynamicLinks from '@react-native-firebase/dynamic-links';

// Components
// import { Button } from '@/components/common/Button';
import { BackIcon } from '@/components/icons';

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const handleBackPrevScreen = () => {
    router.navigate(`/`);
  };

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

  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <Stack flexDirection="row-reverse" width={'100%'}>
          {/* <Image
            source={{uri: product?.images[0] || ''}}
            resizeMode={'cover'}
            style={styles.image}
          /> */}
          <View style={styles.boxShadow}>
            <ButtonIcon
              gap={10}
              width={40}
              height={40}
              icon={BackIcon}
              onPress={handleBackPrevScreen}
            />
          </View>
        </Stack>
        <Stack p={20}>
          <Stack flexDirection="row" justify="space-between">
            <Text fontWeight={'500'} fontSize={24}>
              {id}
            </Text>
            {/* <ButtonIcon
              w={40}
              h={40}
              icon={ShareIcon}
              onPress={handleShare}
            /> */}
          </Stack>
          {/* <Stack flexDirection="row" justify="space-between">
            <ButtonIcon
              w={60}
              h={'100%'}
              icon={FavoriteIcon}
              onPress={() => {}}
            />
            <Button
              title="Add to cart"
              w={Dimensions.get('window').width - 120}
              variant="primary"
              onPress={() => {}}
            />
          </Stack> */}
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 60,
    height: 455,
    borderBottomLeftRadius: 45,
  },
  boxShadow: {
    position: 'absolute',
    right: 30,
    top: 30,
    borderRadius: 6,
    // backgroundColor: COLOR.light,
    // shadowColor: COLOR.shadow.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 15,
  },
});

export default ProductDetail;
