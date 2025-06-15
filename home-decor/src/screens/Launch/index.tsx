import { useCallback } from 'react';
import { Platform } from 'react-native';
import { router } from 'expo-router';
import { YStack, Text } from 'tamagui';

// Components
import { Button } from '@/components/common/Button';
import { LogoIcon } from '@/components/icons';

export const Launch = () => {
  const isAndroid = Platform.OS === 'android';

  const handleLogin = useCallback(() => {
    router.navigate(`/login`);
  }, []);

  const handleSignup = useCallback(() => {
    router.navigate(`/(signup)`);
  }, []);

  return (
    <YStack
      items="center"
      justify="center"
      height="$screenHeight"
      pb={100}
      rowGap="$6"
      bg="$bgPrimary"
    >
      <YStack items="center" mt={100}>
        <LogoIcon />
        <Text
          fontSize={58}
          fontWeight="600"
          color="$primary"
          textTransform="uppercase"
        >
          Home
        </Text>
        <Text
          mt={isAndroid ? -38 : -16}
          ml={-2}
          fontSize={34}
          color="$primary"
          textTransform="uppercase"
          letterSpacing={14}
        >
          Decor
        </Text>
      </YStack>
      <Text width={236} text="center" fontSize={11} color="$textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Text>
      <YStack rowGap="$1.5">
        <Button title="Log In" width={207} onPress={handleLogin} />
        <Button
          title="Sign Up"
          width={207}
          variant="secondary"
          onPress={handleSignup}
        />
      </YStack>
    </YStack>
  );
};
