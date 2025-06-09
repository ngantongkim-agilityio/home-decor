import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Text, XStack, YStack } from 'tamagui';
import { ExtraCardIcon } from '@/components';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <XStack items="center" justify="center" py={10}>
        <Text color="$primary" fontWeight={600} fontSize={20}>
          My Cart
        </Text>
      </XStack>
      <YStack items="center" justify="center" rowGap={30} flex={1} mb={70}>
        <ExtraCardIcon />
        <Text
          text="center"
          fontSize={20}
          fontWeight={600}
          color="$textSecondary"
        >{`There Are No Items\n In Your Cart`}</Text>
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

export default Cart;
