import { useCallback, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
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

// Constants
import { ERROR_MESSAGES } from '@/constants';

interface IForm {
  code: string;
}

const VerifyCode = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      code: '',
    },
  });
  const [error, setError] = useState('');

  const [verify_id, removeVerifyId] = authStore(
    useShallow((state) => [state.verify_id, state.removeVerifyId]),
  );

  const {
    verifyCode: { mutate, isPending },
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
          setError(ERROR_MESSAGES.FIELD_INVALID('Code'));
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
              const handleChange = (value: string) => {
                onChange(value);
                setError('');
              };

              return (
                <Input
                  id="code"
                  label="Enter your code"
                  placeholder="123456"
                  onChangeText={handleChange}
                  {...props}
                />
              );
            }}
          />
          {error && (
            <Text color="$error" fontSize={14} mt={10}>
              {error}
            </Text>
          )}
          <Stack items="center" mt={35}>
            <Button
              title="Submit"
              width={186}
              isLoading={isPending}
              onPress={handleSubmit(handleVerifyCode)}
            />
          </Stack>
        </YStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyCode;
