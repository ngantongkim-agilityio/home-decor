import { router } from 'expo-router';
import { YStack, Text } from 'tamagui';

// Components
import { Button } from '@/components/common/Button';
import { LogoIcon } from '@/components/icons';

export const Launch = () => {
  const handleLogin = () => {
    router.navigate(`/login`);
  };

  const handleSignup = () => {
    router.navigate(`/(signup)`);
  };

  return (
    <YStack
      items="center"
      justify="center"
      height="$screenHeight"
      pb={100}
      rowGap="$6"
    >
      <YStack items="center" mt={200}>
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
          mt={-16}
          ml={16}
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
          bg="$tertiary"
          variant="secondary"
          onPress={handleSignup}
        />
      </YStack>
    </YStack>
  );
};
