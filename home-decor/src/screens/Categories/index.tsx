import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, XStack } from 'tamagui';

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <XStack
        flex={1}
        items="flex-start"
        justify="center"
        py={10}
        bg="$bgPrimary"
      >
        <Text color="$primary" fontWeight={600} fontSize={20}>
          Categories
        </Text>
      </XStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Categories;
