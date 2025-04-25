import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'tamagui';

// Components
import { Header } from '@/components';

// Themes

const Categories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor="$light"
        barStyle="dark-content"
      />
      <Stack width={'100%'}>
        <Header title="Categories" />
      </Stack>
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
