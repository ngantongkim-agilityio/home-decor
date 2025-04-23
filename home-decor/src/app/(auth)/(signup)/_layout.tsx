import { Stack } from 'expo-router';

const SignUpLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verify-code"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default SignUpLayout;
