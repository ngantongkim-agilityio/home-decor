import { useCallback } from 'react';
import { KeyboardAvoidingView, useWindowDimensions } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useShallow } from 'zustand/shallow';

// Components
import { Stack, Text, XStack, YStack } from 'tamagui';
import { BackIcon, Button, Input } from '@/components';

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

  const [verify_id, removeVerifyId] = authStore(
    useShallow((state) => [state.verify_id, state.removeVerifyId]),
  );

  const {
    verifyCode: { mutate },
  } = useAuth();

  const handleVerifyCode = useCallback(
    ({ code }: IForm) => {
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
    },
    [mutate, removeVerifyId, router, verify_id],
  );

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <YStack px={24}>
          <XStack items="center" justify="space-between" py={10} mb={20}>
            <BackIcon onPress={handleBack} />
            <Text color="$primary" fontWeight={600} fontSize={20}>
              Verify Code
            </Text>
            <Stack width={24} height={24} />
          </XStack>
          <Controller
            name="code"
            control={control}
            render={({ field: { onChange, ...props } }) => {
              return (
                <Input
                  id="code"
                  label="Enter your code"
                  placeholder="123456"
                  mb={35}
                  onChangeText={onChange}
                  {...props}
                />
              );
            }}
          />
          <Stack items="center">
            <Button
              title="Submit"
              width={186}
              onPress={handleSubmit(handleVerifyCode)}
            />
          </Stack>
        </YStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyCode;
