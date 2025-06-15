import { useCallback, useRef, useState, useMemo } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  ViewToken,
  ViewabilityConfigCallbackPairs,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { Stack, YStack, H1, Text, XStack, Circle } from 'tamagui';

// Components
import { Image } from '@/components/common/Image';
import { Button } from '@/components/common/Button';

// Constants
import { ONBOARDING_SLIDES } from '@/constants';

type SlideItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const Onboarding = () => {
  const { width } = useWindowDimensions();
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = useCallback(
    ({ changed }: { changed: Array<ViewToken> }) => {
      if (
        changed &&
        changed.length > 0 &&
        typeof changed[0].index === 'number'
      ) {
        setCurrentActiveSlide(changed[0].index);
      }
    },
    [],
  );

  const buttonTitle = useMemo(() => {
    return currentActiveSlide + 2 <= ONBOARDING_SLIDES.length
      ? 'Next'
      : 'Get Started';
  }, [currentActiveSlide]);

  const handleGetStarted = useCallback((): void => {
    if (currentActiveSlide + 2 <= ONBOARDING_SLIDES.length) {
      setCurrentActiveSlide(currentActiveSlide + 1);
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: currentActiveSlide + 1,
      });
    } else {
      router.push(`/launch`);
    }
  }, [currentActiveSlide]);

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [{ viewabilityConfig, onViewableItemsChanged }],
  );

  const getKeyExtractor = useCallback(({ id }: SlideItem) => id.toString(), []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SlideItem>) => {
      return (
        <YStack height="100%" width={width} items="center">
          <YStack
            bg="$bgSecondary"
            height={530}
            width={width}
            borderBottomLeftRadius={24}
          >
            <Image source={item.image} width={width} height={500} />
          </YStack>
          <H1
            color="$primary"
            fontSize={30}
            fontWeight="700"
            letterSpacing={0}
            mt={20}
          >
            {item.title}
          </H1>
          <Text
            maxW={323}
            mt="$4"
            text="center"
            color="$textPrimary"
            fontSize={12}
          >
            {item.description}
          </Text>
        </YStack>
      );
    },
    [width],
  );

  return (
    <YStack flex={1} bg="$bgPrimary">
      <FlatList
        style={{ flexGrow: 1 }}
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <YStack style={{ bottom: 30 }} p="$5" position="absolute">
        <XStack justify="space-between" items="center" width={'$full'}>
          <XStack gap="$1.5">
            {ONBOARDING_SLIDES.map((slide, index) => (
              <Circle
                width={index === currentActiveSlide ? '$9' : '$3'}
                height="$2"
                bg={index === currentActiveSlide ? '$primary' : '$tertiary'}
                key={slide.title}
              />
            ))}
          </XStack>
          <Button
            title={buttonTitle}
            fit={true}
            width={133}
            onPress={handleGetStarted}
          />
        </XStack>
      </YStack>
    </YStack>
  );
};
