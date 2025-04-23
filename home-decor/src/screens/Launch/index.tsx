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
import { LogoIcon } from '@/components/icons';

export const Launch = () => {
  const handleLogin = () => {
    router.navigate(`/(auth)/login`);
  };

  const handleSignup = () => {
    router.navigate(`/(auth)/(signup)`);
  };

  return (
    <YStack>
      <LogoIcon />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignup} />
    </YStack>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
});
