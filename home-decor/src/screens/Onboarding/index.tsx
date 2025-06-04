import { useCallback, useRef, useState, useMemo } from 'react';
import { router } from 'expo-router';
import {
  FlatList,
  ViewToken,
  StyleSheet,
  ViewabilityConfigCallbackPairs,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import { Stack, YStack, H1, Text, XStack, Circle } from 'tamagui';

// Components
import { Image } from '@/components/common/Image';
import { Button } from '@/components/common/Button';

// Constants
import { ONBOARDING_SLIDES } from '@/constants';

// Themes
import { colors } from '@/themes';

type SlideItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const Onboarding = () => {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const { width, height } = useWindowDimensions();

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = useCallback(
    ({ changed }: { changed: Array<ViewToken> }) => {
      console.log('onViewableItemsChanged');

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

  const renderItem = (item: SlideItem) => {
    return (
      <YStack flex={1}>
        <Image source={item.image} width={width} height={500}></Image>
        {/* <YStack flex={1} justify='center' gap='$4' p='$5'> */}
        <H1 fontFamily="$body" color="$primary" fontSize={30} fontWeight="700">
          {item.title}
        </H1>
        <Text text="center" color="$textSecondary">
          {item.description}
        </Text>
        {/* </YStack > */}
      </YStack>
    );
  };

  return (
    <YStack flex={1}>
      <FlatList
        style={{ flexGrow: 1 }}
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <YStack style={{ bottom: 50 }} p="$5" position="absolute">
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
