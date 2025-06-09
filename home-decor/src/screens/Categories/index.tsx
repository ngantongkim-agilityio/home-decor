import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, XStack } from 'tamagui';

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <XStack items="center" justify="center" py={10}>
        <Text color="$primary" fontWeight={600} fontSize={20}>
          Categories
        </Text>
      </XStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light',
  },
});

export default Categories;
