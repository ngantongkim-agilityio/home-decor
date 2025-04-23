import {
  KeyboardAvoidingView,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';

// Components
import { Text, Stack } from 'tamagui';
import { Button, Input } from '@/components';

// Types
import { IUserFormInput, ILoginParams, IResponseApi, IUser } from '@/types';

// Hooks
import { useAuth } from '@/hooks';

// Stores
import { authStore, userStore } from '@/stores';

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [setAuthKey] = authStore((state) => [state.setAuthKey]);
  const [setUser] = userStore((state) => [state.setUser]);

  const {
    logIn: { mutate },
  } = useAuth();

  const handleLogin = ({ email, password }: IUserFormInput) => {
    const uuid = `${Date.now()}`;
    const data: ILoginParams<IUserFormInput> = {
      user: {
        email,
        password,
        uuid,
        type: 'customer',
      },
    };

    mutate(data, {
      onSuccess: (data: IResponseApi<ILoginParams<IUser>>) => {
        const { data: authData } = data || {};
        const { user } = authData || {};
        const { key } = user || {};

        !!key && setAuthKey({ ...key, uuid });
        setUser(user);
        router.navigate(`/(tabs)`);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="$light"
        barStyle="dark-content"
      />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            width,
            justifyContent: 'center',
          }}
        >
          <View style={styles.boxShadow}>
            <Stack>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, ...props } }) => {
                  return (
                    <Input
                      id="email"
                      label="Email"
                      mb={35}
                      onChangeText={onChange}
                      {...props}
                    />
                  );
                }}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, ...props } }) => {
                  return (
                    <Input
                      id="password"
                      label="Password"
                      onChangeText={onChange}
                      secureTextEntry
                      {...props}
                    />
                  );
                }}
              />
            </Stack>
            <Stack pt={20} mt={20}>
              <View style={styles.buttonBoxShadow}>
                <Button
                  variant="primary"
                  height={56}
                  justify="center"
                  items="center"
                  onPress={handleSubmit(handleLogin)}
                >
                  Log in
                </Button>
              </View>
              <Link href={'/(auth)/(signup)'}>
                <Stack width="$full" justify="center" items="center">
                  <Text fontSize={16}>Sign up</Text>
                </Stack>
              </Link>
            </Stack>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light',
  },
  boxShadow: {
    paddingVertical: 20,
    paddingLeft: 32,
    marginRight: 32,
    marginTop: 10,
    backgroundColor: '$light',
    shadowColor: '$shadowPrimary',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 15,
  },
  buttonBoxShadow: {
    borderRadius: 8,
    marginBottom: 28,
    backgroundColor: '$light',
    shadowColor: 'shadowSecondary',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 15,
  },
  lineStyle: {
    width: '35%',
    borderRadius: 2,
    height: 1,
    backgroundColor: '$bgLight',
  },
});

export default Login;
