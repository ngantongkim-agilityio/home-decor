import { useCallback, useState } from 'react';
import {
  Image as ExpoImage,
  ImageProps as ExpoImageProps,
  ImageContentFit,
  ImageSource,
} from 'expo-image';
import { View, YStack, YStackProps } from 'tamagui';

// Constants
import { PLACEHOLDER_IMAGE, BLUR_HASH } from '@/constants';

interface ImageProps extends ExpoImageProps {
  source?: string | ImageSource;
  contentFit?: ImageContentFit;
  width?: number | string;
  height?: number;
  containerStyle?: YStackProps;
}

export const Image = ({
  source = PLACEHOLDER_IMAGE,
  contentFit = 'cover',
  width = 140,
  height = 160,
  containerStyle,
  ...props
}: ImageProps) => {
  const [errorSource, setErrorSource] = useState<
    string | { uri: string } | null
  >(null);

  const imageSource = errorSource || source;

  const handleError = useCallback(() => {
    setErrorSource(PLACEHOLDER_IMAGE);
  }, []);

  return (
    <YStack {...containerStyle}>
      <View overflow="hidden" width={width} height={height}>
        <ExpoImage
          source={imageSource}
          contentFit={contentFit}
          placeholder={{ BLUR_HASH }}
          style={{ width, height }}
          onError={handleError}
          {...props}
        />
      </View>
    </YStack>
  );
};
