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
import { useRouter } from 'expo-router';

// Components
import { Stack } from 'tamagui';
import { Button, Input } from '@/components';

// Types
import { IVerify } from '@/types';

// Hooks
import { useAuth } from '@/hooks';

// Stores
import { authStore } from '@/stores';

interface IForm {
  code: string;
}

const VerifyCode = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      code: '',
    },
  });

  const [verify_id, removeVerifyId] = authStore((state) => [
    state.verify_id,
    state.removeVerifyId,
  ]);

  const {
    verifyCode: { mutate },
  } = useAuth();

  const handleVerifyCode = ({ code }: IForm) => {
    const data: IVerify = {
      verify_id,
      code: Number(code),
    };

    mutate(data, {
      onSuccess: () => {
        removeVerifyId();
        router.navigate(`/(auth)/login`);
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
                name="code"
                control={control}
                render={({ field: { onChange, ...props } }) => {
                  return (
                    <Input
                      id="code"
                      label="Enter your code"
                      mb={35}
                      onChangeText={onChange}
                      {...props}
                    />
                  );
                }}
              />
            </Stack>
            <Stack mt={50} mr={32}>
              <View style={styles.buttonBoxShadow}>
                <Button
                  title="Submit"
                  variant="primary"
                  onPress={handleSubmit(handleVerifyCode)}
                />
              </View>
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
    marginTop: 32,
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

export default VerifyCode;
