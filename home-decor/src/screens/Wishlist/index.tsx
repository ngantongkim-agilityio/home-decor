import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Text, XStack, YStack } from 'tamagui';
import { ExtraWishlistIcon } from '@/components';

const Wishlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <XStack items="center" justify="center" py={10}>
        <Text color="$primary" fontWeight={600} fontSize={20}>
          Wishlist
        </Text>
      </XStack>
      <YStack items="center" justify="center" rowGap={30} flex={1} mb={60}>
        <ExtraWishlistIcon />
        <Text
          text="center"
          fontSize={20}
          fontWeight={600}
          color="$textSecondary"
        >{`Your Wishlist Is\n Empty`}</Text>
      </YStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light',
    flex: 1,
  },
});

export default Wishlist;
