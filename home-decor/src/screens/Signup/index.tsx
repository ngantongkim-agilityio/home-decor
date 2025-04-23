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

  const [setVerifyId] = authStore((state) => [state.setVerifyId]);

  const {
    signUp: { mutate },
  } = useAuth();

  const handleSignUp = ({
    first_name,
    last_name,
    email,
    password,
  }: IUserFormInput) => {
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
        router.navigate(`/(auth)/(signup)/verify_code`);
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
                name="first_name"
                control={control}
                render={({ field: { onChange, ...props } }) => {
                  return (
                    <Input
                      id="first-name"
                      label="First Name"
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
                      id="password-signup"
                      label="Password"
                      mb={20}
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
                      label="Confirm Password"
                      height={40}
                      onChangeText={onChange}
                      secureTextEntry
                      {...props}
                    />
                  );
                }}
              />
            </Stack>
            <Stack mt={25}>
              <View style={styles.buttonBoxShadow}>
                <Button
                  variant="primary"
                  height={56}
                  onPress={handleSubmit(handleSignUp)}
                >
                  Sign up
                </Button>
              </View>
              <Stack flexDirection="row" mt={10}>
                <Text fontWeight={'600'} color="$primary" fontSize={14} mr={4}>
                  Already have account?
                </Text>
                <Link href={`/(auth)/login`}>
                  <Text
                    fontSize={14}
                    justify="center"
                    width={'100%'}
                    color={'$dark'}
                  >
                    Sign in
                  </Text>
                </Link>
              </Stack>
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
    paddingVertical: 35,
    paddingLeft: 32,
    marginRight: 32,
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
    marginBottom: 10,
    backgroundColor: '$light',
    shadowColor: '$shadowSecondary',
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

export default SignUp;
