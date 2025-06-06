import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Circle, Stack, Text, XStack, YStack } from 'tamagui';
import { useRouter } from 'expo-router';
import { useShallow } from 'zustand/shallow';

// Components
import { LogoutIcon, BackIcon, Image } from '@/components';

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
  const [user] = userStore(useShallow((state) => [state.user]));
  console.log('Profile', user);

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

  const handleLogout = () => {
    const payload: IQueryParams = {
      uuid,
      auth_key,
    };

    AsyncStorage.removeItem(AUTH_STORE_KEY);
    removeAuth();

    if (!!uuid && !!auth_key) {
      mutate(payload, {
        onSuccess: () => {
          router.navigate(`/(auth)/login`);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  };

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <XStack items="center" justify="space-between" py={10}>
        <BackIcon onPress={handleBack} />
        <Text color="$primary" fontWeight={600} fontSize={20}>
          My Profile
        </Text>
        <Stack width={24} height={24} />
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
      <XStack items="center" columnGap={10}>
        <Circle bg="$primary" width={35} height={35} onPress={handleLogout}>
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
