import { useCallback } from 'react';
import { StyleSheet, useColorScheme, Appearance, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useShallow } from 'zustand/shallow';
import { Circle, Text, XStack, YStack } from 'tamagui';

// Components
import {
  LogoutIcon,
  Image,
  LargeProfileIcon,
  LargeWishlistIcon,
  OrderIcon,
} from '@/components';

// Constants
import { AUTH_STORE_KEY, DEFAULT_AVATAR } from '@/constants';

// Hooks
import { useAuth } from '@/hooks';

// Stores
import { authStore, userStore } from '@/stores';

// Types
import { IQueryParams } from '@/types';

// Themes
import { colors } from '@/themes';

const Profile = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [removeAuth, authKey] = authStore(
    useShallow((state) => [state.removeAuth, state.authKey]),
  );
  const [user, removeUser] = userStore(
    useShallow((state) => [state.user, state.removeUser]),
  );

  const { auth_key = '', uuid = '' } = authKey || {};
  const {
    first_name = '',
    last_name = '',
    id = '',
    profile_pic = '',
  } = user || {};

  const {
    logOut: { mutate },
  } = useAuth();

  const handleLogout = useCallback(() => {
    const payload: IQueryParams = {
      uuid,
      auth_key,
    };

    AsyncStorage.removeItem(AUTH_STORE_KEY);
    removeAuth();

    if (!!uuid && !!auth_key) {
      mutate(payload, {
        onSuccess: () => {
          removeUser();
          router.replace(`/launch`);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  }, [uuid, auth_key, removeAuth, removeUser, router, mutate]);

  const handleChangeTheme = useCallback(() => {
    Appearance.setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }, [colorScheme]);

  return (
    <SafeAreaView style={styles.container}>
      <YStack bg="$bgPrimary" rowGap={16} px={20} minH="$screenHeight">
        <XStack items="center" justify="center" py={16}>
          <Text color="$primary" fontWeight={600} fontSize={20}>
            My Profile
          </Text>
        </XStack>
        <YStack justify="center" items="center">
          <Image
            source={profile_pic || DEFAULT_AVATAR}
            width={148}
            height={148}
            borderRadius={100}
          />
          <Text fontWeight={'700'} color="$textPrimary" fontSize={22} mt={16}>
            {first_name} {last_name}
          </Text>
          <Text
            my={10}
            fontWeight={'600'}
            fontSize={14}
            lineHeight={15}
            color="$textPrimary"
          >
            ID: <Text fontWeight={300}>{id}</Text>
          </Text>
        </YStack>
        <XStack
          bg="$primary"
          py={14}
          borderRadius={10}
          justify="space-between"
          height={81}
        >
          <YStack
            items="center"
            justify="space-between"
            flex={1 / 3}
            borderRightWidth={1}
            borderRightColor="$light"
          >
            <LargeProfileIcon />
            <Text fontWeight={300} fontSize={12}>
              Profile
            </Text>
          </YStack>
          <YStack
            items="center"
            justify="space-between"
            flex={1 / 3}
            borderRightWidth={1}
            borderRightColor="$light"
          >
            <LargeWishlistIcon />
            <Text fontWeight={300} fontSize={12}>
              Wishlist
            </Text>
          </YStack>
          <YStack items="center" justify="space-between" flex={1 / 3}>
            <OrderIcon />
            <Text fontWeight={300} fontSize={12}>
              My Orders
            </Text>
          </YStack>
        </XStack>
        <XStack items="center" columnGap={10} px={20}>
          <Switch
            thumbColor={colors.primary}
            value={colorScheme === 'dark'}
            onChange={handleChangeTheme}
          />
          <Text fontSize={16} color="$textPrimary">
            Theme Mode
          </Text>
        </XStack>
        <XStack items="center" columnGap={10} onPress={handleLogout} px={20}>
          <Circle bg="$primary" width={35} height={35}>
            <LogoutIcon />
          </Circle>
          <Text fontSize={16} color="$textPrimary">
            Logout
          </Text>
        </XStack>
      </YStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '$light',
  },
});

export default Profile;
