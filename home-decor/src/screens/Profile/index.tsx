import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Text } from 'tamagui';
import { useRouter } from 'expo-router';
import { useShallow } from 'zustand/shallow';

// Components
import { Header, SearchIcon, LogoutIcon } from '@/components';

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
  const [removeAuth, authKey] = authStore((state) => [
    state.removeAuth,
    state.authKey,
  ]);
  const [user] = userStore(useShallow((state) => [state.user]));

  const { auth_key = '', uuid = '' } = authKey || {};
  const { first_name = '', last_name = '', email = '' } = user || {};

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="$light"
        barStyle="dark-content"
      />
      <Stack width={'100%'}>
        <Header
          title="Profile"
          leftIcon={<SearchIcon />}
          rightIcon={LogoutIcon}
          onPressRight={handleLogout}
        />
      </Stack>
      <Stack width={'100%'} mb={35} flexDirection="row">
        <Stack ml={20}>
          <Text fontWeight={'700'} color="$dark" fontSize={20}>
            {first_name} {last_name}
          </Text>
          <Text
            my={10}
            fontWeight={'400'}
            color="$primary"
            fontSize={14}
            lineHeight={15}
          >
            {email}
          </Text>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light',
  },
});

export default Profile;
