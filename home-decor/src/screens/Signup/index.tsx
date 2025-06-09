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
import { Text, Stack, YStack, XStack } from 'tamagui';
import {
  BackIcon,
  Button,
  FacebookIcon,
  GoogleIcon,
  Input,
} from '@/components';

// Types
import {
  IUserFormInput,
  ILoginParams,
  IResponseApi,
  IResponseVerify,
} from '@/types';

// Hooks
import { useAuth } from '@/hooks';

// Stores
import { authStore } from '@/stores';

interface IForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [setVerifyId] = authStore(useShallow((state) => [state.setVerifyId]));

  const {
    signUp: { mutate },
  } = useAuth();

  const handleSignUp = useCallback(
    ({ first_name, last_name, email, password }: IUserFormInput) => {
      const uuid = `${Date.now()}`;
      const data: ILoginParams<IUserFormInput> = {
        user: {
          uuid,
          first_name,
          last_name,
          email,
          password,
          type: 'customer',
        },
      };

      mutate(data, {
        onSuccess: (data: IResponseApi<IResponseVerify>) => {
          const { data: verifyData } = data || {};
          const { verify_id } = verifyData || {};

          !!verify_id && setVerifyId(verify_id);
          router.navigate(`/verify-code`);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    },
    [mutate, router, setVerifyId],
  );

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

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
          <YStack px={24}>
            <XStack items="center" justify="space-between" py={10} mb={16}>
              <BackIcon onPress={handleBack} />
              <Text color="$primary" fontWeight={600} fontSize={20}>
                Create Account
              </Text>
              <Stack width={24} height={24} />
            </XStack>
            <Controller
              name="first_name"
              control={control}
              render={({ field: { onChange, ...props } }) => {
                return (
                  <Input
                    id="first-name"
                    label="First Name"
                    placeholder="John"
                    mb={20}
                    onChangeText={onChange}
                    {...props}
                  />
                );
              }}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field: { onChange, ...props } }) => {
                return (
                  <Input
                    id="last-name"
                    label="Last Name"
                    placeholder="Doe"
                    mb={20}
                    onChangeText={onChange}
                    {...props}
                  />
                );
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, ...props } }) => {
                return (
                  <Input
                    id="email-signup"
                    label="Email"
                    placeholder="Example@example.com"
                    mb={20}
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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field: { onChange, ...props } }) => {
                return (
                  <Input
                    id="confirm-password"
                    label="Password"
                    onChangeText={onChange}
                    secureTextEntry
                    {...props}
                  />
                );
              }}
            />
            <YStack rowGap={16} items="center" mt={20}>
              <Text width={250} text="center" fontSize={12}>
                By continuing, you agree to
              </Text>
              <Text fontSize={12} mt={-12}>
                <Link href={'#'}>
                  <Text fontWeight={600}>Terms of Use</Text>
                </Link>{' '}
                and{' '}
                <Link href={'#'}>
                  <Text fontWeight={600}>Privacy Policy.</Text>
                </Link>
              </Text>
              <Button width={186} onPress={handleSubmit(handleSignUp)}>
                Sign up
              </Button>
              <YStack items="center" rowGap={10}>
                <Text fontSize={12} fontWeight={300}>
                  or sign up with
                </Text>
                <XStack columnGap={20} mb={10}>
                  <FacebookIcon onPress={() => {}} />
                  <GoogleIcon onPress={() => {}} />
                </XStack>
                <Text fontSize={12} fontWeight={300}>
                  {`Don’t have an account? `}
                  <Link href={'/(auth)/login'}>
                    <Text ml={4} fontSize={12} color="$secondary">
                      Log in
                    </Text>
                  </Link>
                </Text>
              </YStack>
            </YStack>
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
