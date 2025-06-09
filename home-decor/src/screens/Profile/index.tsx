import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
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
import { AUTH_STORE_KEY } from '@/constants';

// Hooks
import { useAuth } from '@/hooks';

// Stores
import { authStore, userStore } from '@/stores';

// Types
import { IQueryParams } from '@/types';

const Profile = () => {
  const router = useRouter();
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

  return (
    <SafeAreaView style={styles.container}>
      <XStack items="center" justify="center" py={10}>
        <Text color="$primary" fontWeight={600} fontSize={20}>
          My Profile
        </Text>
      </XStack>
      <YStack justify="center" items="center">
        <Image
          source={{ uri: profile_pic }}
          width={148}
          height={148}
          borderRadius={100}
        />
        <Text fontWeight={'700'} color="$dark" fontSize={22} mt={16}>
          {first_name} {last_name}
        </Text>
        <Text my={10} fontWeight={'600'} fontSize={14} lineHeight={15}>
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
      <XStack items="center" columnGap={10} onPress={handleLogout} px={20}>
        <Circle bg="$primary" width={35} height={35}>
          <LogoutIcon />
        </Circle>
        <Text fontSize={16}>Logout</Text>
      </XStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '$light',
    paddingHorizontal: 20,
    rowGap: 20,
  },
});

export default Profile;
