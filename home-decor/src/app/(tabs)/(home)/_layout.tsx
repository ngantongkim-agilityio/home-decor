import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {},
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="details/[id]" />
    </Stack>
  );
};

export default HomeLayout;
