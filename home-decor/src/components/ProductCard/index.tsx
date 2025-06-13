// Libs
import { memo } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Stack, Image, Text, Separator } from 'tamagui';

// Types
import { IProduct } from '@/types';

interface IProductCardProps {
  product: IProduct;
  onPress?: (product: IProduct) => void;
}

const ProductCard = ({ product, onPress = () => {} }: IProductCardProps) => {
  const {
    title = '',
    description = '',
    images = [],
    price = { formatted: '' },
  } = product || {};

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
        <Text fontWeight={'600'} color="$textPrimary" fontSize={12} mb={5}>
          {title}
        </Text>
        <Text
          fontWeight={'300'}
          color="$textPrimary"
          fontSize={11}
          mb={5}
          numberOfLines={2}
        >
          {description}
        </Text>
        <Separator borderColor="$tertiary" mb={8} />
        <Text fontWeight={'500'} color="$secondary" fontSize={14}>
          {price.formatted}
        </Text>
      </Stack>
    </Pressable>
  );
};

const styles = StyleSheet.create<Record<string, ViewStyle>>({
  container: {
    flex: 1 / 2,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 8,
  },
});

export default memo(ProductCard);
