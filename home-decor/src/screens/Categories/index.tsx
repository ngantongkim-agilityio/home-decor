import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, YStack } from 'tamagui';
import * as SecureStore from 'expo-secure-store';

import { Button, Input } from '@/components';

const Categories = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const saveSecureValue = async () => {
    await SecureStore.setItemAsync(key, value);
    setKey('');
    setValue('');
  };

  const getSecureValue = async () => {
    const result = await SecureStore.getItemAsync(key);
    setValue(result as string);
  };

  const deleteKey = async () => {
    await SecureStore.deleteItemAsync(key);
    setKey('');
    setValue('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <YStack flex={1} py={10} px={20} rowGap={18} bg="$bgPrimary">
        <Text text="center" color="$primary" fontWeight={600} fontSize={20}>
          Secure Store
        </Text>
        <YStack rowGap={10}>
          <Input
            id="key"
            label="Key"
            placeholder="Enter key"
            value={key}
            onChangeText={setKey}
          />
          <Input
            id="value"
            label="Value"
            placeholder="Enter value"
            value={value}
            onChangeText={setValue}
          />
          <YStack mt={20} rowGap={8} items="center">
            <Button variant="primary" width={186} onPress={saveSecureValue}>
              Save value
            </Button>
            <Button variant="primary" width={186} onPress={getSecureValue}>
              Get value
            </Button>
            <Button variant="primary" width={186} onPress={deleteKey}>
              Delete key
            </Button>
          </YStack>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Categories;
