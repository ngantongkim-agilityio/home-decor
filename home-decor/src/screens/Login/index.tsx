import { useCallback } from 'react';
import {
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import { useShallow } from 'zustand/shallow';

// Components
import { Text, Stack, YStack, H2, XStack } from 'tamagui';
import { Button, Input } from '@/components';
import { FacebookIcon, GoogleIcon, BackIcon } from '@/components/icons';

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
  const { width, height } = useWindowDimensions();

  const [setAuthKey] = authStore(useShallow((state) => [state.setAuthKey]));
  const [setUser] = userStore(useShallow((state) => [state.setUser]));
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    logIn: { mutate },
  } = useAuth();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleLogin = useCallback(
    ({ email, password }: IUserFormInput) => {
      console.log('handleLogin', { email, password });

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
        onError: (error: any) => {
          console.log(error);
        },
      });
    },
    [mutate, router, setAuthKey, setUser],
  );

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            width,
            justifyContent: 'center',
          }}
        >
          <YStack
            px={24}
            flex={1}
            justify="space-between"
            height={height - 100}
          >
            <YStack rowGap={40}>
              <XStack items="center" justify="space-between" py={10}>
                <BackIcon onPress={handleBack} />
                <Text color="$primary" fontWeight={600} fontSize={20}>
                  Log In
                </Text>
                <Stack width={24} height={24} />
              </XStack>
              <YStack rowGap={11} mb={20}>
                <H2 fontWeight={600} letterSpacing={1} fontSize={24}>
                  Welcome
                </H2>
                <Text fontSize={12}>Please enter your details to proceed.</Text>
              </YStack>
              <Stack rowGap={18}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, ...props } }) => {
                    return (
                      <Input
                        id="email"
                        label="Email"
                        placeholder="example@example.com"
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
              <YStack items="center" rowGap={18}>
                <Button
                  variant="primary"
                  width={186}
                  onPress={handleSubmit(handleLogin)}
                >
                  Log In
                </Button>
                <Link href="#">
                  <Text fontSize={12} fontWeight={600}>
                    Forgot Password?
                  </Text>
                </Link>
              </YStack>
            </YStack>
            <YStack items="center" rowGap={16}>
              <Text fontSize={12} fontWeight={300}>
                or sign up with
              </Text>
              <XStack columnGap={20} mb={10}>
                <FacebookIcon onPress={() => {}} />
                <GoogleIcon onPress={() => {}} />
              </XStack>
              <Text fontSize={12} fontWeight={300}>
                {`Don’t have an account? `}
                <Link href={'/(auth)/(signup)'}>
                  <Text ml={4} fontSize={12} color="$secondary">
                    Sign Up
                  </Text>
                </Link>
              </Text>
            </YStack>
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
