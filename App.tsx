import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderPage from './src/components/HeaderPage';
import WelcomePage from './src/components/WelcomePage';

export default function App() {
  return (
    <View style = {styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Hello World!</Text>
      <StatusBar style="auto" /> */}
      <HeaderPage></HeaderPage>
      <WelcomePage></WelcomePage >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
