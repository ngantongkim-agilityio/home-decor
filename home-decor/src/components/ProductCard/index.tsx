// Libs
import { memo } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Stack, Image, Text } from 'tamagui';

// Types
import { IProduct } from '@/types';

interface IProductCardProps {
  product: IProduct;
  onPress?: (product: IProduct) => void;
}

const ProductCard = ({ product, onPress = () => {} }: IProductCardProps) => {
  const { title = '', images = [], price = { amount: '' } } = product || {};

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && {
          opacity: 0.7,
        },
      ]}
      onPress={() => onPress(product)}
    >
      <Image
        source={{ uri: images[0] }}
        resizeMode={'cover'}
        style={styles.image}
      />
      <Stack my={12}>
        <Text fontWeight={'400'} color={'$tertiary'} fontSize={14} mb={5}>
          {title}
        </Text>
        <Text fontWeight={'700'} color={'$dark'} fontSize={14}>
          {price.amount}
        </Text>
      </Stack>
    </Pressable>
  );
};

const styles = StyleSheet.create<Record<string, ViewStyle>>({
  container: {
    // flex: 1 / 2,
  },
  image: {
    height: 200,
    width: 157,
    borderRadius: 8,
  },
});

export default memo(ProductCard);
