import { useCallback, useRef, useState, useMemo } from 'react';
import { router } from 'expo-router';
import {
  FlatList,
  View,
  ViewToken,
  StyleSheet,
  ViewabilityConfigCallbackPairs,
  useWindowDimensions,
} from 'react-native';
import { YStack } from 'tamagui';

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
      router.push(`/(tabs)`);
    }
  }, [currentActiveSlide]);

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [{ viewabilityConfig, onViewableItemsChanged }],
  );

  const renderItem = (item: SlideItem) => {
    return (
      <Image
        resizeMode="cover"
        source={item.image}
        width={width}
        height={500}
        // style={[{ width: width, height: 500 }]}
      >
        {/* <View style={[styles.content, { height: height * 0.7 }]}> */}
        {/* <Typography
          text={item.title}
          fontWeight={FontWeight.Bold}
          size={SizeType.Xxl}
          style={styles.title}
          variant={TypoVariant.Paragraph2}
        /> */}
        {/* {index === 0 && (
          <View style={styles.imageWrapper}>
            <Image source={Images.logo} />
          </View>
        )} */}
        {/* <Typography text={item.description || ''} style={styles.description} /> */}
        {/* </View> */}
      </Image>
    );
  };

  return (
    <YStack>
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={(item, index) => item.id}
        horizontal
        contentContainerStyle={{ height }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => renderItem(item)}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={styles.footerWrapper}>
        <View style={[styles.footerContainer, { width: width }]}>
          <View style={styles.indicatorContainer}>
            {ONBOARDING_SLIDES.map((slide, index) => (
              <View
                style={[
                  styles.indicator,
                  {
                    backgroundColor:
                      index === currentActiveSlide
                        ? colors.primary
                        : colors.secondary,
                  },
                ]}
                key={slide.title}
              />
            ))}
          </View>
          <Button title={buttonTitle} onPress={handleGetStarted} />
        </View>
      </View>
    </YStack>
  );
};

const styles = StyleSheet.create({
  footerWrapper: {
    position: 'absolute',
    bottom: 50,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    rowGap: 10,
  },
  title: { paddingHorizontal: 50, textAlign: 'center' },
  description: { paddingHorizontal: 30, paddingTop: 10, textAlign: 'center' },
  imageWrapper: { alignItems: 'center' },

  footerContainer: {
    rowGap: 32,
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    columnGap: 5,
  },
  indicator: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    width: 8,
    height: 8,
  },
});
